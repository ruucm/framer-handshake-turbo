import { useState } from "react";
import { useAsyncEffect } from "./useAsyncEffect";

// need this wrap cause still 'use client' directive has SSR and emit build errors for browser API (document, window...) that is inside of bds/patterns
// this dynamic imports automatically disable the next.js SSR
export function useHandshaked() {
  const [modules, setModules] = useState<any>(loadingObject);
  useAsyncEffect(async () => {
    setModules(await import("ui-framer/handshaked"));
  }, []);
  return modules;
}

const loadingObject = new Proxy(
  {},
  {
    get: function (target, prop) {
      if (prop in target) {
        return target[prop];
      } else {
        return () => <></>; // loading...
      }
    },
  }
);
