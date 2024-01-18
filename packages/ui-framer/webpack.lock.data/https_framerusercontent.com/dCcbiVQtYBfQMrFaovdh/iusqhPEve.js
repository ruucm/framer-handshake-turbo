// Generated by Framer (de9b242)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,getPropertyControls,Image,useActiveVariantCallback,useOnVariantChange,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import Feature from"https://framerusercontent.com/modules/sRxWnZyFvoeiF0OrJmdg/VmIft7PJHuWprISlpe3Y/mAd6vO_a6.js";const FeatureFonts=getFonts(Feature);const FeatureControls=getPropertyControls(Feature);const cycleOrder=["N2lgwiI2y","Tfi5aYmmZ","FuYaZdi_M","qTu5qoj3W","AydaG5HhL","cXF9XKjr8"];const variantClassNames={AydaG5HhL:"framer-v-1kj4pd8",cXF9XKjr8:"framer-v-1h8diw0",FuYaZdi_M:"framer-v-1pqjg77",N2lgwiI2y:"framer-v-10xa8iz",qTu5qoj3W:"framer-v-bmndsu",Tfi5aYmmZ:"framer-v-17ui6i6"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={"Horizontal 1":"N2lgwiI2y","Horizontal 2":"Tfi5aYmmZ","Horizontal 3":"FuYaZdi_M","Vertical 1":"qTu5qoj3W","Vertical 2":"AydaG5HhL","Vertical 3":"cXF9XKjr8"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const toResponsiveImage=value=>{if(typeof value==="object"&&value!==null&&typeof value.src==="string"){return value;}return typeof value==="string"?{src:value}:undefined;};const Component=/*#__PURE__*/React.forwardRef(function({id,style,className,width,height,layoutId,variant:outerVariant="N2lgwiI2y",asset1:o9A3lp53i={src:new URL("assets/1024/5eyZnGnXuTjC7QSXetgNynoIUVs.png",import.meta.url).href,srcSet:`${new URL("assets/512/5eyZnGnXuTjC7QSXetgNynoIUVs.png",import.meta.url).href} 512w, ${new URL("assets/1024/5eyZnGnXuTjC7QSXetgNynoIUVs.png",import.meta.url).href} 1024w, ${new URL("assets/5eyZnGnXuTjC7QSXetgNynoIUVs.png",import.meta.url).href} 1236w`},asset2:G9NSeJWDI={src:new URL("assets/1024/ae8BXOnLxffeW2eK1gOzYaHamcg.png",import.meta.url).href,srcSet:`${new URL("assets/512/ae8BXOnLxffeW2eK1gOzYaHamcg.png",import.meta.url).href} 512w, ${new URL("assets/1024/ae8BXOnLxffeW2eK1gOzYaHamcg.png",import.meta.url).href} 1024w, ${new URL("assets/ae8BXOnLxffeW2eK1gOzYaHamcg.png",import.meta.url).href} 1236w`},asset3:uZbmGPcAl={src:new URL("assets/1024/qbHqOg0OGj5UF9RlLFjgJMvF0oU.png",import.meta.url).href,srcSet:`${new URL("assets/512/qbHqOg0OGj5UF9RlLFjgJMvF0oU.png",import.meta.url).href} 512w, ${new URL("assets/1024/qbHqOg0OGj5UF9RlLFjgJMvF0oU.png",import.meta.url).href} 1024w, ${new URL("assets/qbHqOg0OGj5UF9RlLFjgJMvF0oU.png",import.meta.url).href} 1236w`},label1:bynriwBNw="Onboarding",icon1:CLAf33gMz="Handshake",label2:x2x6qnKKm="Proactive support",icon2:l6LrrM2MW="Lifebuoy",label3:AT4tOqBmy="Announcements",icon3:Z0EnY0dvS="Megaphone",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"N2lgwiI2y",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onAppearkxaa6p=activeVariantCallback(async(...args)=>{await delay(()=>setVariant("Tfi5aYmmZ"),3e3);});const onAppearzixly0=activeVariantCallback(async(...args)=>{await delay(()=>setVariant("FuYaZdi_M"),3e3);});const onAppear1ocnqhy=activeVariantCallback(async(...args)=>{await delay(()=>setVariant("N2lgwiI2y"),3e3);});const onAppear1o2i191=activeVariantCallback(async(...args)=>{await delay(()=>setVariant("AydaG5HhL"),3e3);});const onAppearlcs9z7=activeVariantCallback(async(...args)=>{await delay(()=>setVariant("cXF9XKjr8"),3e3);});const onAppear1a04ef6=activeVariantCallback(async(...args)=>{await delay(()=>setVariant("qTu5qoj3W"),3e3);});const tap1q26ekc=activeVariantCallback(async(...args)=>{setVariant("N2lgwiI2y");});const tap8a8xtj=activeVariantCallback(async(...args)=>{setVariant("qTu5qoj3W");});const tap1lxf82u=activeVariantCallback(async(...args)=>{setVariant("Tfi5aYmmZ");});const tap8t1shd=activeVariantCallback(async(...args)=>{setVariant("AydaG5HhL");});const tap18hijjv=activeVariantCallback(async(...args)=>{setVariant("FuYaZdi_M");});const tap1o929f3=activeVariantCallback(async(...args)=>{setVariant("cXF9XKjr8");});useOnVariantChange(baseVariant,{AydaG5HhL:onAppearlcs9z7,cXF9XKjr8:onAppear1a04ef6,default:onAppearkxaa6p,FuYaZdi_M:onAppear1ocnqhy,qTu5qoj3W:onAppear1o2i191,Tfi5aYmmZ:onAppearzixly0});const isDisplayed=()=>{if(["FuYaZdi_M","cXF9XKjr8"].includes(baseVariant))return true;return false;};const isDisplayed1=()=>{if(["Tfi5aYmmZ","AydaG5HhL"].includes(baseVariant))return true;return false;};const isDisplayed2=()=>{if(["Tfi5aYmmZ","FuYaZdi_M","AydaG5HhL","cXF9XKjr8"].includes(baseVariant))return false;return true;};const defaultLayoutId=React.useId();return /*#__PURE__*/_jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/_jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-kB3ke",classNames),style:{display:"contents"},children:/*#__PURE__*/_jsxs(motion.div,{...restProps,className:cx("framer-10xa8iz",className),"data-framer-name":"Horizontal 1","data-highlight":true,layoutDependency:layoutDependency,layoutId:"N2lgwiI2y",ref:ref,style:{...style},transition:transition,...addPropertyOverrides({AydaG5HhL:{"data-framer-name":"Vertical 2"},cXF9XKjr8:{"data-framer-name":"Vertical 3"},FuYaZdi_M:{"data-framer-name":"Horizontal 3"},qTu5qoj3W:{"data-framer-name":"Vertical 1"},Tfi5aYmmZ:{"data-framer-name":"Horizontal 2"}},baseVariant,gestureVariant),children:[/*#__PURE__*/_jsxs(motion.div,{className:"framer-iezv4u",layoutDependency:layoutDependency,layoutId:"dsjSfwmbS",style:{borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopLeftRadius:8,borderTopRightRadius:8,boxShadow:"0px 20px 40px 0px rgba(110, 58, 38, 0.1)",filter:"saturate(1)",WebkitFilter:"saturate(1)"},transition:transition,children:[isDisplayed()&&/*#__PURE__*/_jsx(Image,{background:{alt:"",fit:"fill",intrinsicHeight:888,intrinsicWidth:1236,pixelHeight:888,pixelWidth:1236,...toResponsiveImage(uZbmGPcAl)},className:"framer-4ra094","data-framer-name":"Asset 3",layoutDependency:layoutDependency,layoutId:"COgdoLWKu",transition:transition,...addPropertyOverrides({cXF9XKjr8:{background:{alt:"",fit:"fill",intrinsicHeight:888,intrinsicWidth:1236,pixelHeight:888,pixelWidth:1236,sizes:"440px",...toResponsiveImage(uZbmGPcAl)}},FuYaZdi_M:{background:{alt:"",fit:"fill",intrinsicHeight:888,intrinsicWidth:1236,pixelHeight:888,pixelWidth:1236,sizes:"618px",...toResponsiveImage(uZbmGPcAl)}}},baseVariant,gestureVariant)}),isDisplayed1()&&/*#__PURE__*/_jsx(Image,{background:{alt:"",fit:"fill",intrinsicHeight:888,intrinsicWidth:1236,pixelHeight:888,pixelWidth:1236,...toResponsiveImage(G9NSeJWDI)},className:"framer-1rwdv1g","data-framer-name":"Asset 2",layoutDependency:layoutDependency,layoutId:"iocYlIYIJ",transition:transition,...addPropertyOverrides({AydaG5HhL:{background:{alt:"",fit:"fill",intrinsicHeight:888,intrinsicWidth:1236,pixelHeight:888,pixelWidth:1236,sizes:"440px",...toResponsiveImage(G9NSeJWDI)}},Tfi5aYmmZ:{background:{alt:"",fit:"fill",intrinsicHeight:888,intrinsicWidth:1236,pixelHeight:888,pixelWidth:1236,sizes:"618px",...toResponsiveImage(G9NSeJWDI)}}},baseVariant,gestureVariant)}),isDisplayed2()&&/*#__PURE__*/_jsx(Image,{background:{alt:"",fit:"fill",intrinsicHeight:444,intrinsicWidth:618,pixelHeight:888,pixelWidth:1236,sizes:"618px",...toResponsiveImage(o9A3lp53i)},className:"framer-giiifp","data-framer-name":"Asset 1",layoutDependency:layoutDependency,layoutId:"SsKP5VrLh",transition:transition,...addPropertyOverrides({qTu5qoj3W:{background:{alt:"",fit:"fill",intrinsicHeight:444,intrinsicWidth:618,pixelHeight:888,pixelWidth:1236,sizes:"440px",...toResponsiveImage(o9A3lp53i)}}},baseVariant,gestureVariant)})]}),/*#__PURE__*/_jsxs(motion.div,{className:"framer-1cfro1r",layoutDependency:layoutDependency,layoutId:"WzEgCMoHz",transition:transition,children:[/*#__PURE__*/_jsx(motion.div,{className:"framer-1x5ug6z-container",layoutDependency:layoutDependency,layoutId:"f6MBxr47O-container",transition:transition,children:/*#__PURE__*/_jsx(Feature,{background:'var(--token-a3319007-080d-465f-9d26-f005f9c2cb83, rgb(255, 94, 32)) /* {"name":"Red"} */',color:"rgb(255, 255, 255)",height:"100%",icon:CLAf33gMz,id:"f6MBxr47O",layoutId:"f6MBxr47O",style:{width:"100%"},title:bynriwBNw,variant:"fi7kThygn",width:"100%",...addPropertyOverrides({AydaG5HhL:{tap:tap8a8xtj,variant:"MALla2ZXR"},cXF9XKjr8:{tap:tap8a8xtj,variant:"MALla2ZXR"},FuYaZdi_M:{tap:tap1q26ekc,variant:"MALla2ZXR"},Tfi5aYmmZ:{tap:tap1q26ekc,variant:"MALla2ZXR"}},baseVariant,gestureVariant)})}),/*#__PURE__*/_jsx(motion.div,{className:"framer-176y61p-container",layoutDependency:layoutDependency,layoutId:"c1FYK5WYr-container",transition:transition,children:/*#__PURE__*/_jsx(Feature,{background:'var(--token-a3319007-080d-465f-9d26-f005f9c2cb83, rgb(255, 94, 32)) /* {"name":"Red"} */',color:"rgb(255, 255, 255)",height:"100%",icon:l6LrrM2MW,id:"c1FYK5WYr",layoutId:"c1FYK5WYr",style:{width:"100%"},tap:tap1lxf82u,title:x2x6qnKKm,variant:"MALla2ZXR",width:"100%",...addPropertyOverrides({AydaG5HhL:{variant:"fi7kThygn"},cXF9XKjr8:{tap:tap8t1shd},qTu5qoj3W:{tap:tap8t1shd},Tfi5aYmmZ:{variant:"fi7kThygn"}},baseVariant,gestureVariant)})}),/*#__PURE__*/_jsx(motion.div,{className:"framer-hwg5n3-container",layoutDependency:layoutDependency,layoutId:"jCMU27alK-container",transition:transition,children:/*#__PURE__*/_jsx(Feature,{background:'var(--token-a3319007-080d-465f-9d26-f005f9c2cb83, rgb(255, 94, 32)) /* {"name":"Red"} */',color:"rgb(255, 255, 255)",height:"100%",icon:Z0EnY0dvS,id:"jCMU27alK",layoutId:"jCMU27alK",style:{width:"100%"},tap:tap18hijjv,title:AT4tOqBmy,variant:"MALla2ZXR",width:"100%",...addPropertyOverrides({AydaG5HhL:{tap:tap1o929f3},cXF9XKjr8:{variant:"fi7kThygn"},FuYaZdi_M:{variant:"fi7kThygn"},qTu5qoj3W:{tap:tap1o929f3}},baseVariant,gestureVariant)})})]})]})})});});const css=['.framer-kB3ke [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-kB3ke .framer-1foljhj { display: block; }",".framer-kB3ke .framer-10xa8iz { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 960px; }",".framer-kB3ke .framer-iezv4u { aspect-ratio: 1.3918918918918919 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 444px); overflow: visible; position: relative; width: 64%; }",".framer-kB3ke .framer-4ra094, .framer-kB3ke .framer-1rwdv1g, .framer-kB3ke .framer-giiifp { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",".framer-kB3ke .framer-1n9uuf9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 442px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 616px; will-change: transform; }",".framer-kB3ke .framer-1cfro1r { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",".framer-kB3ke .framer-1x5ug6z-container, .framer-kB3ke .framer-176y61p-container, .framer-kB3ke .framer-hwg5n3-container { flex: none; height: auto; position: relative; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kB3ke .framer-10xa8iz, .framer-kB3ke .framer-1n9uuf9, .framer-kB3ke .framer-1cfro1r { gap: 0px; } .framer-kB3ke .framer-10xa8iz > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-kB3ke .framer-10xa8iz > :first-child { margin-left: 0px; } .framer-kB3ke .framer-10xa8iz > :last-child { margin-right: 0px; } .framer-kB3ke .framer-1n9uuf9 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-kB3ke .framer-1n9uuf9 > :first-child, .framer-kB3ke .framer-1cfro1r > :first-child { margin-top: 0px; } .framer-kB3ke .framer-1n9uuf9 > :last-child, .framer-kB3ke .framer-1cfro1r > :last-child { margin-bottom: 0px; } .framer-kB3ke .framer-1cfro1r > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",".framer-kB3ke.framer-v-bmndsu .framer-10xa8iz, .framer-kB3ke.framer-v-1kj4pd8 .framer-10xa8iz, .framer-kB3ke.framer-v-1h8diw0 .framer-10xa8iz { flex-direction: column; width: 440px; }",".framer-kB3ke.framer-v-bmndsu .framer-iezv4u, .framer-kB3ke.framer-v-1kj4pd8 .framer-iezv4u, .framer-kB3ke.framer-v-1h8diw0 .framer-iezv4u { height: var(--framer-aspect-ratio-supported, 316px); width: 100%; }",".framer-kB3ke.framer-v-bmndsu .framer-1cfro1r, .framer-kB3ke.framer-v-1kj4pd8 .framer-1cfro1r, .framer-kB3ke.framer-v-1h8diw0 .framer-1cfro1r { flex: none; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kB3ke.framer-v-bmndsu .framer-10xa8iz { gap: 0px; } .framer-kB3ke.framer-v-bmndsu .framer-10xa8iz > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-kB3ke.framer-v-bmndsu .framer-10xa8iz > :first-child { margin-top: 0px; } .framer-kB3ke.framer-v-bmndsu .framer-10xa8iz > :last-child { margin-bottom: 0px; } }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kB3ke.framer-v-1kj4pd8 .framer-10xa8iz { gap: 0px; } .framer-kB3ke.framer-v-1kj4pd8 .framer-10xa8iz > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-kB3ke.framer-v-1kj4pd8 .framer-10xa8iz > :first-child { margin-top: 0px; } .framer-kB3ke.framer-v-1kj4pd8 .framer-10xa8iz > :last-child { margin-bottom: 0px; } }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kB3ke.framer-v-1h8diw0 .framer-10xa8iz { gap: 0px; } .framer-kB3ke.framer-v-1h8diw0 .framer-10xa8iz > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-kB3ke.framer-v-1h8diw0 .framer-10xa8iz > :first-child { margin-top: 0px; } .framer-kB3ke.framer-v-1h8diw0 .framer-10xa8iz > :last-child { margin-bottom: 0px; } }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 444
 * @framerIntrinsicWidth 960
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"],"constraints":[null,1000,null,null]},"Tfi5aYmmZ":{"layout":["fixed","auto"],"constraints":[null,1000,null,null]},"FuYaZdi_M":{"layout":["fixed","auto"],"constraints":[null,1000,null,null]},"qTu5qoj3W":{"layout":["fixed","auto"],"constraints":[null,1000,null,null]},"AydaG5HhL":{"layout":["fixed","auto"],"constraints":[null,1000,null,null]},"cXF9XKjr8":{"layout":["fixed","auto"],"constraints":[null,1000,null,null]}}}
 * @framerVariables {"o9A3lp53i":"asset1","G9NSeJWDI":"asset2","uZbmGPcAl":"asset3","bynriwBNw":"label1","CLAf33gMz":"icon1","x2x6qnKKm":"label2","l6LrrM2MW":"icon2","AT4tOqBmy":"label3","Z0EnY0dvS":"icon3"}
 */const FrameriusqhPEve=withCSS(Component,css,"framer-kB3ke");export default FrameriusqhPEve;FrameriusqhPEve.displayName="Carousel";FrameriusqhPEve.defaultProps={height:444,width:960};addPropertyControls(FrameriusqhPEve,{variant:{options:["N2lgwiI2y","Tfi5aYmmZ","FuYaZdi_M","qTu5qoj3W","AydaG5HhL","cXF9XKjr8"],optionTitles:["Horizontal 1","Horizontal 2","Horizontal 3","Vertical 1","Vertical 2","Vertical 3"],title:"Variant",type:ControlType.Enum},o9A3lp53i:{__defaultAssetReference:"5eyZnGnXuTjC7QSXetgNynoIUVs.png",title:"Asset 1",type:ControlType.ResponsiveImage},G9NSeJWDI:{__defaultAssetReference:"data:framer/asset-reference,ae8BXOnLxffeW2eK1gOzYaHamcg.png?originalFilename=Asset+2%402x.png&preferredSize=auto",title:"Asset 2",type:ControlType.ResponsiveImage},uZbmGPcAl:{__defaultAssetReference:"data:framer/asset-reference,qbHqOg0OGj5UF9RlLFjgJMvF0oU.png?originalFilename=Asset+3%402x.png&preferredSize=auto",title:"Asset 3",type:ControlType.ResponsiveImage},bynriwBNw:{defaultValue:"Onboarding",displayTextArea:false,title:"Label 1",type:ControlType.String},CLAf33gMz:(FeatureControls===null||FeatureControls===void 0?void 0:FeatureControls["fMc_sb0AR"])&&{...FeatureControls["fMc_sb0AR"],defaultValue:"Handshake",hidden:undefined,title:"Icon 1"},x2x6qnKKm:{defaultValue:"Proactive support",displayTextArea:false,title:"Label 2",type:ControlType.String},l6LrrM2MW:(FeatureControls===null||FeatureControls===void 0?void 0:FeatureControls["fMc_sb0AR"])&&{...FeatureControls["fMc_sb0AR"],defaultValue:"Lifebuoy",hidden:undefined,title:"Icon 2"},AT4tOqBmy:{defaultValue:"Announcements",displayTextArea:false,title:"Label 3",type:ControlType.String},Z0EnY0dvS:(FeatureControls===null||FeatureControls===void 0?void 0:FeatureControls["fMc_sb0AR"])&&{...FeatureControls["fMc_sb0AR"],defaultValue:"Megaphone",hidden:undefined,title:"Icon 3"}});addFonts(FrameriusqhPEve,[...FeatureFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FrameriusqhPEve","slots":[],"annotations":{"framerVariables":"{\"o9A3lp53i\":\"asset1\",\"G9NSeJWDI\":\"asset2\",\"uZbmGPcAl\":\"asset3\",\"bynriwBNw\":\"label1\",\"CLAf33gMz\":\"icon1\",\"x2x6qnKKm\":\"label2\",\"l6LrrM2MW\":\"icon2\",\"AT4tOqBmy\":\"label3\",\"Z0EnY0dvS\":\"icon3\"}","framerIntrinsicHeight":"444","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"auto\"],\"constraints\":[null,1000,null,null]},\"Tfi5aYmmZ\":{\"layout\":[\"fixed\",\"auto\"],\"constraints\":[null,1000,null,null]},\"FuYaZdi_M\":{\"layout\":[\"fixed\",\"auto\"],\"constraints\":[null,1000,null,null]},\"qTu5qoj3W\":{\"layout\":[\"fixed\",\"auto\"],\"constraints\":[null,1000,null,null]},\"AydaG5HhL\":{\"layout\":[\"fixed\",\"auto\"],\"constraints\":[null,1000,null,null]},\"cXF9XKjr8\":{\"layout\":[\"fixed\",\"auto\"],\"constraints\":[null,1000,null,null]}}}","framerIntrinsicWidth":"960","framerContractVersion":"1"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}