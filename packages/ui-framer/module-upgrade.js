// [note] target HTTP module patterns
// https://framer.com/m/Logo-cheq.js@ssITA477gUImcew4Bhyd
// → [humanReadable]@[versionId]
// https://framerusercontent.com/modules/58irWVEKyJ5TcNPlJ3UV/ssITA477gUImcew4Bhyd/w9D6se69y.js
// https://framerusercontent.com/modules/jbdXvMknbEBpbDuD7wgZ/SdC4Lr4sH9LECq40ll4I/Overrides.js
// → https://framerusercontent.com/modules/[uniqueModuleName]/[versionId]/[fileName]
// https://dist-framer.s3.ap-southeast-2.amazonaws.com/share/Form/FormButton.js
// → https://dist-framer.s3.ap-southeast-2.amazonaws.com/share/[uniqueModuleName] (this one is unique cause it just follows the same local folder structure)

const fs = require('fs')
const fsp = require('fs').promises
const path = require('path')
const readline = require('readline-sync')
const https = require('https')

const lockFilePath = 'webpack.lock'
const lockFilesDirectory = 'webpack.lock.data'
const pdsDirectory = 'src'

main()

// ----------------------------- [main] ----------------------------------
async function main() {
  const moduleURL = readline.question('New HTTP module URL: ')
  let resolvedURL = moduleURL

  if (needResolved(moduleURL)) resolvedURL = await getResolvedUrl(moduleURL)

  if (resolvedURL) {
    const { uniqueModuleName, versionId, fileName } = getIds(resolvedURL)

    const oldVersionIds = await cleanWebpackLock(uniqueModuleName, versionId)
    console.log('oldVersionIds', oldVersionIds)
    message(`${lockFilePath} file is cleaned`)

    await findAndDeleteFolder(`./${lockFilesDirectory}`, uniqueModuleName)
    message(`${uniqueModuleName} folder is deleted`)

    if (oldVersionIds.length > 0) {
      const input = readline.question(`Want to replace the versionId in ${lockFilesDirectory}? (y/n) `)
      if (input === 'y' || input === '') {
        for (let i = 0; i < oldVersionIds.length; i++) {
          const oldVersionId = oldVersionIds[i]
          await searchAndReplace(lockFilesDirectory, oldVersionId, versionId)
          await searchAndReplace(pdsDirectory, oldVersionId, versionId)
        }
        message('all module usages are upgraded')
        message('please restart the dev server again (it will refetch the new module version & update the lock file)')
      }
    }
  } else message('No resolved URL found')
}
// ----------------------------- [Functions] ----------------------------------

function message(msg) {
  const colours = { reset: '\x1b[0m', fg: '\x1b[37m', bg: '\x1b[44m' }
  console.log(colours.bg, colours.fg, `[MESSAGE] ${msg}`, colours.reset)
}

function needResolved(url) {
  return url.includes('framer.com/m')
}
function selfHosted(url) {
  return url.includes('dist-framer.s3')
}

function getIds(resolvedURL) {
  if (selfHosted(resolvedURL)) {
    const splitted = resolvedURL.split('/')
    return { uniqueModuleName: splitted[splitted.length - 1] }
  }

  const [_, uniqueModuleName, versionId, fileName] = resolvedURL.match(/\/modules\/(.+)\/(.+)\/(.+)/) || []
  return { uniqueModuleName, versionId, fileName }
}

async function cleanWebpackLock(uniqueModuleName, versionId) {
  const oldVersionIds = []
  // read the webpack.lock file as text
  const webpackLock = fs.readFileSync(path.resolve(__dirname, lockFilePath), 'utf8')

  // Split file contents into an array of lines
  const lines = webpackLock.split('\n')
  const filteredLines = lines.filter((line) => {
    const hasModule = line.includes(uniqueModuleName)
    const hasNewVersion = line.includes(versionId)
    const oldVersionModule = hasModule && !hasNewVersion

    if (oldVersionModule) {
      const urlRegex = /"(https?:\/\/[^\s"]+)"/g
      const urls = []

      let match
      while ((match = urlRegex.exec(line))) {
        urls.push(match[1])
      }

      const { versionId } = getIds(urls[urls.length - 1]) // use the last url
      if (versionId) oldVersionIds.push(versionId)
    }

    return !oldVersionModule
  })
  const output = filteredLines.join('\n')

  try {
    await fsp.writeFile(lockFilePath, output, 'utf8')
    console.log(
      `[DELETED] Occurrences of old versions of "${uniqueModuleName}" on ${lockFilePath} deleted successfully.`
    )
  } catch (error) {
    console.error(`Error writing to file: ${error}`)
  }

  return oldVersionIds
}

// Recursive function to process a directory
async function searchAndReplace(directoryPath, search, replace) {
  try {
    // Read all files and subdirectories in the directory
    const entries = await fsp.readdir(directoryPath, { withFileTypes: true })

    // Process each file or subdirectory in the directory
    for (const entry of entries) {
      const entryPath = path.join(directoryPath, entry.name)

      // If the entry is a subdirectory, recursively process it
      if (entry.isDirectory()) {
        await searchAndReplace(entryPath, search, replace)
      } else {
        // Read the file contents
        const data = await fsp.readFile(entryPath, 'utf8')

        // Check if the search string exists in the file contents
        if (data.includes(search)) {
          // Replace all occurrences of the search string with the replace string
          const output = data.replaceAll(search, replace)

          // Write the updated contents back to the file
          await fsp.writeFile(entryPath, output, 'utf8')
          console.log(
            `[REPLACED] Occurrences of the old versionId (${search}) replaced with the new versionId (${replace}) in ${entryPath}`
          )
        }
      }
    }
  } catch (err) {
    console.error(`Error processing directory: ${err}`)
  }
}

async function getResolvedUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .request(url, { method: 'HEAD' }, (res) => {
        const resolvedUrl = res.headers.location
        resolve(resolvedUrl)
      })
      .on('error', (err) => {
        reject(err)
      })
      .end()
  })
}

async function deleteFolder(folderPath) {
  return new Promise((resolve, reject) => {
    fs.rmdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        reject(`Failed to delete folder ${folderPath}: ${err}`)
      } else {
        resolve(`Deleted folder ${folderPath}`)
      }
    })
  })
}
async function findAndDeleteFolder(dirPath, folderName) {
  const files = await fsp.readdir(dirPath)

  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const stat = await fsp.stat(filePath)

    if (stat.isDirectory()) {
      if (file === folderName) {
        await deleteFolder(filePath)
      } else {
        await findAndDeleteFolder(filePath, folderName)
      }
    }
  }
}
