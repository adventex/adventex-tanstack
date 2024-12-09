import{H3Event as D,getRequestURL as He,getResponseHeaders as Pe,getRequestWebStream as Ee,getRequestHeaders as Me,getResponseStatus as Le,eventHandler as ze}from"h3";import{getContext as Ae}from"unctx";import{AsyncLocalStorage as qe}from"node:async_hooks";import{isPlainArray as je,isPlainObject as ne,defer as Be,useRouter as k,pick as De,ScriptOnce as F,createControlledPromise as Fe,RouterProvider as Oe,createMemoryHistory as We,useRouterState as b,Link as f,createRootRoute as Ve,Outlet as Ue,ScrollRestoration as Ye,createFileRoute as _,lazyRouteComponent as S,lazyFn as Q,createRouter as Qe}from"@tanstack/react-router";import{jsxs as l,Fragment as v,jsx as e}from"react/jsx-runtime";import*as m from"react";import{createElement as ae}from"react";import M from"jsesc";import Ge from"tiny-invariant";import{Transform as Je,PassThrough as Xe}from"node:stream";import{isbot as ee}from"isbot";import z from"react-dom/server";import{Context as se}from"@tanstack/react-cross-context";import{Facebook as Ke,Twitter as Ze,Instagram as et,Youtube as tt,Phone as rt,Mail as ot,MapPin as nt,ChevronDown as ie,X as at,Menu as st,Check as it,Search as lt,SlidersHorizontal as ct,LayoutGrid as dt,List as ut}from"lucide-react";import{clsx as mt}from"clsx";import{twMerge as ht}from"tailwind-merge";import*as g from"@radix-ui/react-navigation-menu";import{cva as q}from"class-variance-authority";import{Slot as pt}from"@radix-ui/react-slot";import*as x from"@radix-ui/react-dialog";import{z as T}from"zod";import*as R from"@radix-ui/react-accordion";import*as O from"@radix-ui/react-checkbox";import*as le from"@radix-ui/react-label";import*as ce from"@radix-ui/react-separator";import*as C from"@radix-ui/react-slider";const ft=()=>({routes:{__root__:{filePath:"__root.tsx",children:["/","/about","/contact","/blogs/$blogId","/tours/$tourId","/blogs/","/tours/"],preloads:["/_build/assets/client-D_r--B-J.js","/_build/assets/client-B42ABy-e.js"]},"/":{filePath:"index.tsx"},"/about":{filePath:"about.tsx"},"/contact":{filePath:"contact.tsx"},"/blogs/$blogId":{filePath:"blogs/$blogId.tsx"},"/tours/$tourId":{filePath:"tours/$tourId.tsx"},"/blogs/":{filePath:"blogs/index.tsx"},"/tours/":{filePath:"tours/index.tsx"}}});function gt(t){return globalThis.MANIFEST[t]}function xt(){const t=ft(),r=t.routes.__root__=t.routes.__root__||{};r.assets=r.assets||[];const o=gt("client");return r.assets.push({tag:"script",attrs:{src:o.inputs[o.handler]?.output.path,type:"module",async:!0,suppressHydrationWarning:!0}}),t}function yt(){const t=xt();return{...t,routes:Object.fromEntries(Object.entries(t.routes).map(([r,o])=>{const{preloads:n,assets:s}=o;return[r,{preloads:n,assets:s}]}))}}function bt(t,r,o){if(!o.router.isServer)return r;o.match.extracted=o.match.extracted||[];const n=o.match.extracted;return W(r,(a,i)=>{const c=a instanceof ReadableStream?"stream":a instanceof Promise?"promise":void 0;if(c){const u={dataType:t,type:c,path:i,id:n.length,value:a,matchIndex:o.match.index};if(n.push(u),c==="stream"){const[h,p]=a.tee();return u.streamState=_t({stream:p}),h}else Be(a)}return a})}function vt(t){const r=k(),o=r.state.matches[t.matchIndex];if(!r.isServer)return null;const n=o.extracted,[s,a]=["__beforeLoadContext","loaderData"].map(i=>n?n.reduce((c,u)=>u.dataType!==i?V(c,["temp",...u.path],void 0):c,{temp:o[i]}).temp:o[i]);if(s!==void 0||a!==void 0||n?.length){const i=`__TSR__.initMatch(${M({index:t.matchIndex,__beforeLoadContext:r.options.transformer.stringify(s),loaderData:r.options.transformer.stringify(a),extracted:n?Object.fromEntries(n.map(c=>[c.id,De(c,["type","path"])])):{}},{isScriptContext:!0,wrap:!0,json:!0})})`;return l(v,{children:[e(F,{children:i}),n?n.map(c=>c.type==="stream"?e(Rt,{entry:c},c.id):e(Nt,{entry:c},c.id)):null]})}return null}function W(t,r,o=[]){if(je(t))return t.map((s,a)=>W(s,r,[...o,`${a}`]));if(ne(t)){const s={};for(const a in t)s[a]=W(t[a],r,[...o,a]);return s}const n=r(t,o);return n!==t?n:t}function Nt({entry:t}){return e("div",{className:"tsr-once",children:e(m.Suspense,{fallback:null,children:e(wt,{entry:t})})})}function wt({entry:t}){const r=k();if(t.value.status==="pending")throw t.value;const o=`__TSR__.resolvePromise(${M(t,{isScriptContext:!0,wrap:!0,json:!0})})`;return r.injectScript(o),e(v,{})}function Rt({entry:t}){Ge(t.streamState,"StreamState should be defined");const r=k();return e(de,{streamState:t.streamState,children:o=>{const n=o?`__TSR__.matches[${t.matchIndex}].extracted[${t.id}].value.controller.enqueue(new TextEncoder().encode(${M(o.toString(),{isScriptContext:!0,wrap:!0,json:!0})}))`:`__TSR__.matches[${t.matchIndex}].extracted[${t.id}].value.controller.close()`;return r.injectScript(n),e(v,{})}})}function _t({stream:t}){const r={promises:[]},o=t.getReader(),n=s=>(r.promises[s]=Fe(),o.read().then(({done:a,value:i})=>{if(a){r.promises[s].resolve(null),o.releaseLock();return}return r.promises[s].resolve(i),n(s+1)}));return n(0).catch(s=>{console.error("stream read error",s)}),r}function de({streamState:t,children:r,__index:o=0}){const n=t.promises[o];if(!n)return null;if(n.status==="pending")throw n;const s=n.value;return l(v,{children:[r(s),e("div",{className:"tsr-once",children:e(m.Suspense,{fallback:null,children:e(de,{streamState:t,__index:o+1,children:r})})})]})}function V(t,r,o){if(r.length===0)return o;const[n,...s]=r;return Array.isArray(t)?t.map((a,i)=>i===Number(n)?V(a,s,o):a):ne(t)?{...t,[n]:V(t[n],s,o)}:t}function te(t){t.router.AfterEachMatch=vt,t.router.serializer=n=>M(n,{isScriptContext:!0,wrap:!0,json:!0});const r=se.get("TanStackRouterHydrationContext",{}),o=m.useMemo(()=>{var n,s;return{router:t.router.dehydrate(),payload:(s=(n=t.router.options).dehydrate)==null?void 0:s.call(n)}},[t.router]);return e(r.Provider,{value:o,children:e(Oe,{router:t.router})})}function St(t){let r;const o=me(t),n={duplex:"half",method:t.method,headers:t.headers};return t.node.req.body instanceof ArrayBuffer?new Request(o,{...n,body:t.node.req.body}):new Request(o,{...n,get body(){return r||(r=$t(t),r)}})}function kt(t){return t.web??={request:St(t),url:me(t)},t.web.request}function Tt(){return Pt()}const ue=Symbol("$HTTPEvent");function Ct(t){return typeof t=="object"&&(t instanceof D||t?.[ue]instanceof D||t?.__is_event__===!0)}function L(t){return function(...r){let o=r[0];if(Ct(o))r[0]=o instanceof D||o.__is_event__?o:o[ue];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(o=Tt(),!o)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");r.unshift(o)}return t(...r)}}const ao=L(Me),me=L(He),so=L(Le),It=L(Pe),$t=L(Ee);function Ht(){return Ae("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:qe})}function Pt(){return Ht().use().event}function Et(t){return t instanceof Headers?new Headers(t):Array.isArray(t)?new Headers(t):typeof t=="object"?new Headers(t):new Headers}function re(...t){return t.reduce((r,o)=>{const n=Et(o);for(const[s,a]of n.entries())r.set(s,a);return r},new Headers)}function Mt({createRouter:t,getRouterManifest:r}){return o=>ze(async n=>{const s=kt(n),a=new URL(s.url),i=a.href.replace(a.origin,""),c=We({initialEntries:[i]}),u=t();u.serializeLoaderData=bt,r&&(u.manifest=r()),u.update({history:c}),await u.load();const h=Lt({event:n,router:u});return await o({request:s,router:u,responseHeaders:h})})}function Lt(t){t.event.__tsrHeadersSent=!0;let r=re(It(t.event),{"Content-Type":"text/html; charset=UTF-8"},...t.router.state.matches.map(n=>n.headers));const{redirect:o}=t.router.state;return o&&(r=re(r,o.headers,{Location:o.href})),r}function zt(t){const r=he(()=>t.injectedHtml.map(o=>o()).join(""));return new Je({transform(o,n,s){r.transform(o,this.push.bind(this)).then(()=>s()).catch(a=>s(a))},flush(o){r.flush(this.push.bind(this)).then(()=>o()).catch(n=>o(n))}})}function At(t){const r=he(()=>t.injectedHtml.map(n=>n()).join("")),o=new TextEncoder;return new TransformStream({transform(n,s){return r.transform(n,a=>(s.enqueue(o.encode(a)),!0))},flush(n){return r.flush(s=>(n.enqueue(s),!0))}})}const qt=/(<body)/,jt=/(<\/body>)/,Bt=/(<\/html>)/,Dt=/(<\/[a-zA-Z][\w:.-]*?>)/g,Ft=new TextDecoder;function he(t){let r=!1,o="",n="";return{async transform(s,a){const i=o+Ft.decode(s),c=i.match(qt),u=i.match(jt),h=i.match(Bt);try{if(c&&(r=!0),!r){a(i),o="";return}const p=t();if(u&&h&&u.index<h.index){const y=u.index+u[0].length,w=h.index+h[0].length,j=i.slice(0,y)+p+i.slice(y,w)+i.slice(w);a(j),o=""}else{let y,w=0;for(;(y=Dt.exec(i))!==null;)w=y.index+y[0].length;if(w>0){const j=i.slice(0,w)+p+n;a(j),o=i.slice(w)}else o=i,n+=p}}catch(p){throw console.error("Error transforming HTML:",p),p}},async flush(s){o&&s(o)}}}const Ot=async({request:t,router:r,responseHeaders:o})=>{if(typeof z.renderToReadableStream=="function"){const n=await z.renderToReadableStream(e(te,{router:r}),{signal:t.signal});ee(t.headers.get("User-Agent"))&&await n.allReady;const a=[At(r)].reduce((i,c)=>i.pipeThrough(c),n);return new Response(a,{status:r.state.statusCode,headers:o})}if(typeof z.renderToPipeableStream=="function"){const n=new Xe,s=z.renderToPipeableStream(e(te,{router:r}),{...ee(t.headers.get("User-Agent"))?{onAllReady(){s.pipe(n)}}:{onShellReady(){s.pipe(n)}},onError:(c,u)=>{console.log("Error in renderToPipeableStream:",c,u)}}),i=[zt(r)].reduce((c,u)=>c.pipe(u),n);return new Response(i,{status:r.state.statusCode,headers:o})}throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.")};function pe({tag:t,attrs:r,children:o}){switch(t){case"title":return e("title",{...r,suppressHydrationWarning:!0,children:o});case"meta":return e("meta",{...r,suppressHydrationWarning:!0});case"link":return e("link",{...r,suppressHydrationWarning:!0});case"style":return e("style",{...r,dangerouslySetInnerHTML:{__html:o}});case"script":return r&&r.src?e("script",{...r,suppressHydrationWarning:!0}):typeof o=="string"?e("script",{...r,dangerouslySetInnerHTML:{__html:o},suppressHydrationWarning:!0}):null;default:return null}}const Wt=()=>{const t=k(),r=b({select:a=>a.matches.map(i=>i.meta).filter(Boolean)}),o=m.useMemo(()=>{const a=[],i={};let c;return[...r].reverse().forEach(u=>{[...u].reverse().forEach(h=>{if(h)if(h.title)c||(c={tag:"title",children:h.title});else{const p=h.name??h.property;if(p){if(i[p])return;i[p]=!0}a.push({tag:"meta",attrs:{...h}})}})}),c&&a.push(c),a.reverse(),a},[r]),n=b({select:a=>a.matches.map(i=>i.links).filter(Boolean).flat(1).map(i=>({tag:"link",attrs:{...i}})),structuralSharing:!0}),s=b({select:a=>{const i=[];return a.matches.map(c=>t.looseRoutesById[c.routeId]).forEach(c=>{var u,h,p;return(p=(h=(u=t.manifest)==null?void 0:u.routes[c.id])==null?void 0:h.preloads)==null?void 0:p.filter(Boolean).forEach(y=>{i.push({tag:"link",attrs:{rel:"modulepreload",href:y}})})}),i},structuralSharing:!0});return Yt([...o,...s,...n],a=>JSON.stringify(a))},Vt=()=>{const t=k(),r=Wt(),o=m.useContext(se.get("TanStackRouterHydrationContext",{}));return l(v,{children:[r.map((n,s)=>ae(pe,{...n,key:`tsr-meta-${JSON.stringify(n)}`})),l(v,{children:[e(F,{log:!1,children:'__TSR__={matches:[],streamedValues:{},queue:[],runQueue:()=>{let e=!1;__TSR__.queue=__TSR__.queue.filter((_=>!_()||(e=!0,!1))),e&&__TSR__.runQueue()},initMatch:e=>{__TSR__.queue.push((()=>(__TSR__.matches[e.index]||(__TSR__.matches[e.index]=e,Object.entries(e.extracted).forEach((([e,_])=>{if("stream"===_.type){let e;_.value=new ReadableStream({start(_){e=_}}),_.value.controller=e}else if("promise"===_.type){let e,t;_.value=new Promise(((_,u)=>{e=_,t=u})),_.resolve=e,_.reject=t}}))),!0))),__TSR__.runQueue()},resolvePromise:e=>{__TSR__.queue.push((()=>{const _=__TSR__.matches[e.matchIndex];if(_){const t=_.extracted[e.id];if(t)return t.resolve(e.value.data),!0}return!1})),__TSR__.runQueue()},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach((e=>{e.remove()}))}};'}),e(F,{children:`__TSR__.dehydrated = ${M(t.options.transformer.stringify(o),{isScriptContext:!0,wrap:!0,json:!0})}`})]})]})},Ut=()=>e(v,{children:Vt()});function Yt(t,r){const o=new Set;return t.filter(n=>{const s=r(n);return o.has(s)?!1:(o.add(s),!0)})}const Qt=()=>{const t=k(),r=b({select:s=>{const a=[];return s.matches.map(i=>t.looseRoutesById[i.routeId]).forEach(i=>{var c,u,h;return(h=(u=(c=t.manifest)==null?void 0:c.routes[i.id])==null?void 0:u.assets)==null?void 0:h.filter(p=>p.tag==="script").forEach(p=>{a.push({tag:"script",attrs:p.attrs,children:p.children})})}),a},structuralSharing:!0}),{scripts:o}=b({select:s=>({scripts:s.matches.map(a=>a.scripts).filter(Boolean).flat(1).map(({children:a,...i})=>({tag:"script",attrs:{...i,suppressHydrationWarning:!0},children:a}))})}),n=[...o,...r];return e(v,{children:n.map((s,a)=>ae(pe,{...s,key:`tsr-scripts-${s.tag}-${a}`}))})},B={company:[{label:"เกี่ยวกับเรา",href:"/about"},{label:"ติดต่อเรา",href:"/contact"}],tours:[{label:"แพ็คเกจทั้งหมด",href:"/tours"},{label:"แพ็คเกจเรียนต่อ",href:"/tours?type=study"},{label:"แพ็คเกจท่องเที่ยว",href:"/tours?type=travel"}],blogs:[{label:"บทความทั้งหมด",href:"/blogs"},{label:"บทความยอดนิยม",href:"/blogs?featured=true"}]},Gt=[{icon:Ke,href:"https://facebook.com"},{icon:Ze,href:"https://twitter.com"},{icon:et,href:"https://instagram.com"},{icon:tt,href:"https://youtube.com"}],Jt=[{icon:rt,text:"+66 81 123 4567"},{icon:ot,text:"contact@advantex.com"},{icon:nt,text:"121/2 เลขที่ 3 ต.เวียง อ.เชียงแสน จ.เชียงราย 57120"}],Xt=()=>{const t=new Date().getFullYear();return l("footer",{className:"border-t bg-white",children:[e("div",{className:"container mx-auto px-4 py-12",children:l("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5",children:[l("aside",{className:"lg:col-span-2",children:[e(f,{to:"/",className:"mb-4 block text-xl font-bold uppercase text-primary",children:"advantex international group co., ltd."}),e("p",{className:"mb-6 max-w-[30ch] text-muted-foreground",children:"ทะเบียนพานิชย์เลขที่ 0575567001670"}),e("div",{className:"space-y-3",children:Jt.map((r,o)=>l("div",{className:"flex items-center gap-2 text-muted-foreground",children:[e(r.icon,{className:"size-4"}),e("span",{children:r.text})]},o))})]}),l("div",{children:[e("h3",{className:"mb-4 font-semibold",children:"บริษัท"}),e("ul",{className:"space-y-3",children:B.company.map(r=>e("li",{children:e(f,{to:r.href,className:"text-muted-foreground transition-colors hover:text-primary",children:r.label})},r.href))})]}),l("div",{children:[e("h3",{className:"mb-4 font-semibold",children:"แพ็คเกจ"}),e("ul",{className:"space-y-3",children:B.tours.map(r=>e("li",{children:e(f,{to:r.href,className:"text-muted-foreground transition-colors hover:text-primary",children:r.label})},r.href))})]}),l("div",{children:[e("h3",{className:"mb-4 font-semibold",children:"บทความ"}),e("ul",{className:"space-y-3",children:B.blogs.map(r=>e("li",{children:e(f,{to:r.href,className:"text-muted-foreground transition-colors hover:text-primary",children:r.label})},r.href))})]})]})}),e("div",{className:"border-t",children:e("div",{className:"container mx-auto px-4 py-6",children:l("div",{className:"flex flex-col items-center justify-between gap-4 sm:flex-row",children:[l("p",{className:"text-center text-sm text-muted-foreground sm:text-left",children:["© ",t," Advantex. All rights reserved."]}),e("div",{className:"flex items-center gap-4",children:Gt.map((r,o)=>e("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground transition-colors hover:text-primary",children:e(r.icon,{className:"size-5"})},o))})]})})})]})};function d(...t){return ht(mt(t))}const fe=m.forwardRef(({className:t,children:r,...o},n)=>l(g.Root,{ref:n,className:d("relative z-10 flex max-w-max flex-1 items-center justify-center",t),...o,children:[r,e(xe,{})]}));fe.displayName=g.Root.displayName;const ge=m.forwardRef(({className:t,...r},o)=>e(g.List,{ref:o,className:d("group flex flex-1 list-none items-center justify-center space-x-1",t),...r}));ge.displayName=g.List.displayName;const oe=g.Item,Kt=q("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),U=m.forwardRef(({className:t,children:r,...o},n)=>l(g.Trigger,{ref:n,className:d(Kt(),"group",t),...o,children:[r," ",e(ie,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}));U.displayName=g.Trigger.displayName;const Y=m.forwardRef(({className:t,...r},o)=>e(g.Content,{ref:o,className:d("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",t),...r}));Y.displayName=g.Content.displayName;const xe=m.forwardRef(({className:t,...r},o)=>e("div",{className:d("absolute left-0 top-full flex justify-center"),children:e(g.Viewport,{className:d("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",t),ref:o,...r})}));xe.displayName=g.Viewport.displayName;const Zt=m.forwardRef(({className:t,...r},o)=>e(g.Indicator,{ref:o,className:d("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",t),...r,children:e("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})}));Zt.displayName=g.Indicator.displayName;const er=[{id:"harbin",title:"เมืองฮาร์บิน",to:"/tours",type:"travel",location:"harbin",description:"สัมผัสเทศกาลน้ำแข็งที่ใหญ่ที่สุดในโลก ชมสถาปัตยกรรมรัสเซียโบราณ และลิ้มรสอาหารเหนือแท้ๆ ของจีน"},{id:"xian",title:"เมืองเซี่ยงไฮ้",to:"/tours",type:"travel",location:"xian",description:"เยือนมหานครทันสมัยริมแม่น้ำหวงผู่ ตื่นตากับตึกระฟ้า The Bund และสัมผัสวัฒนธรรมผสมผสานตะวันออก-ตะวันตก"},{id:"chengdu",title:"เมืองเฉิงตู",to:"/tours",type:"travel",location:"chengdu",description:"พบกับหมีแพนด้ายักษ์ในศูนย์อนุรักษ์ ลิ้มรสอาหารเสฉวนแท้ และสัมผัสวิถีชีวิตที่ผ่อนคลายของชาวเฉิงตู"},{id:"beijing",title:"เมืองปักกิ่ง",to:"/tours",type:"travel",location:"beijing",description:"สำรวจพระราชวังต้องห้าม เดินบนกำแพงเมืองจีน และสัมผัสประวัติศาสตร์อันยิ่งใหญ่ของจีนในเมืองหลวง"},{id:"guangzhou",title:"เมืองกว่างโจว",to:"/tours",type:"travel",location:"guangzhou",description:"เมืองท่าการค้าสำคัญพร้อมอาหารกวางตุ้งชื่อดัง ผสมผสานความทันสมัยกับวัฒนธรรมดั้งเดิมได้อย่างลงตัว"},{id:"chongqing",title:"เมืองฉงชิ่ง",to:"/tours",type:"travel",location:"chongqing",description:"สัมผัสมหานครบนภูเขาริมแม่น้ำแยงซี ลิ้มรสหม้อไฟฉงชิ่ง และชมวิวตึกระฟ้ายามค่ำคืนที่สวยงาม"}],tr=()=>{const t=b(),{type:r}=t.location.search;return e(fe,{children:l(ge,{children:[l(oe,{children:[e(U,{className:d("bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary",r==="study"?"text-primary":"hover:text-primary"),children:e(f,{to:"/tours",search:{type:"study"},children:"แพ็คเกจเรียนต่อ"})}),e(Y,{children:l("ul",{className:"grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",children:[e("li",{className:"row-span-3",children:l(f,{className:"flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",to:"/tours",search:{type:"study"},children:[e("div",{className:"mb-2 mt-4 text-lg font-medium",children:"แพ็คเกจทั้งหมด"}),e("p",{className:"text-sm leading-tight text-muted-foreground",children:"ค้นพบประสบการณ์การเรียนรู้และการท่องเที่ยวในประเทศจีน พร้อมแพ็คเกจที่ครอบคลุมทั้งที่พัก การเดินทาง และกิจกรรมต่างๆ"})]})}),e("li",{children:l(f,{to:"/tours",search:{type:"study",duration:"short-term"},className:"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",children:[e("div",{className:"text-sm font-medium leading-none",children:"แพ็คเกจเรียนต่อระยะสั้น"}),e("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:"เรียนรู้ภาษาและวัฒนธรรมจีนผ่านหลักสูตรระยะสั้น 1-6 เดือน พร้อมที่พักและกิจกรรมครบครัน"})]})}),e("li",{children:l(f,{to:"/tours",search:{type:"study",duration:"long-term"},className:"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",children:[e("div",{className:"text-sm font-medium leading-none",children:"แพ็คเกจท่องเที่ยวระยะยาว"}),e("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:"หลักสูตรการศึกษาระยะยาว 1-4 ปี พร้อมโอกาสฝึกงานและเรียนรู้วิถีชีวิตในประเทศจีน"})]})})]})})]}),l(oe,{children:[e(U,{className:d("bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary",r==="travel"?"text-primary":"hover:text-primary"),children:e(f,{to:"/tours",search:{type:"travel"},children:"แพ็คเกจท่องเที่ยว"})}),e(Y,{children:e("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",children:er.map(o=>e("li",{children:l(f,{to:"/tours",search:{type:"travel",location:o.location},className:"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",children:[e("div",{className:"text-sm font-medium leading-none",children:o.title}),e("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:o.description})]})},o.title))})})]})]})})},rr=q("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),E=m.forwardRef(({className:t,variant:r,size:o,asChild:n=!1,...s},a)=>e(n?pt:"button",{className:d(rr({variant:r,size:o,className:t})),ref:a,...s}));E.displayName="Button";const ye=x.Root,be=x.Trigger,or=x.Portal,ve=m.forwardRef(({className:t,...r},o)=>e(x.Overlay,{className:d("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r,ref:o}));ve.displayName=x.Overlay.displayName;const nr=q("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),G=m.forwardRef(({side:t="right",className:r,children:o,...n},s)=>l(or,{children:[e(ve,{}),l(x.Content,{ref:s,className:d(nr({side:t}),r),...n,children:[l(x.Close,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e(at,{className:"h-4 w-4"}),e("span",{className:"sr-only",children:"Close"})]}),o]})]}));G.displayName=x.Content.displayName;const J=({className:t,...r})=>e("div",{className:d("flex flex-col space-y-2 text-center sm:text-left",t),...r});J.displayName="SheetHeader";const X=m.forwardRef(({className:t,...r},o)=>e(x.Title,{ref:o,className:d("text-lg font-semibold text-foreground",t),...r}));X.displayName=x.Title.displayName;const K=m.forwardRef(({className:t,...r},o)=>e(x.Description,{ref:o,className:d("text-sm text-muted-foreground",t),...r}));K.displayName=x.Description.displayName;function ar(){const r=b().location.pathname;return l(ye,{children:[e(be,{asChild:!0,className:"lg:hidden",children:e(E,{variant:"ghost",size:"icon",children:e(st,{className:"size-6"})})}),l(G,{children:[l(J,{children:[e(X,{children:"เมนู"}),e(K,{children:"เลือกหมวดหมู่ที่คุณสนใจ"})]}),e("nav",{children:l("ul",{className:"mt-8 flex flex-col gap-4",children:[e("li",{children:e(f,{to:"/",className:d("text-lg font-medium transition-colors",r==="/"?"text-primary":"hover:text-primary"),children:"หน้าแรก"})}),e("li",{children:e(f,{to:"/tours",search:{type:"study"},className:d("text-lg font-medium transition-colors",r==="/tours"?"text-primary":"hover:text-primary"),children:"แพ็คเกจ"})}),e("li",{children:e(f,{to:"/blogs",className:d("text-lg font-medium transition-colors",r==="/blogs"?"text-primary":"hover:text-primary"),children:"บทความ"})}),e("li",{children:e(f,{to:"/about",className:d("text-lg font-medium transition-colors",r==="/about"?"text-primary":"hover:text-primary"),children:"เกี่ยวกับเรา"})}),e("li",{children:e(f,{to:"/contact",className:d("text-lg font-medium transition-colors",r==="/contact"?"text-primary":"hover:text-primary"),children:"ติดต่อเรา"})})]})})]})]})}const sr=()=>{const r=b().location.pathname;return e("header",{className:"sticky inset-x-0 top-0 z-50 h-[72px] border-b bg-white/80 backdrop-blur-md",children:l("div",{className:"container mx-auto flex h-full items-center justify-between px-4",children:[e(f,{to:"/",className:"pl-1 text-2xl font-bold text-primary",children:"ADVENTEX"}),e("nav",{className:"hidden lg:block",children:l("div",{className:"flex items-center gap-2",children:[e(f,{to:"/",className:d("px-4 py-2 text-base font-normal transition-colors",r==="/"?"text-primary":"hover:text-primary"),children:"หน้าแรก"}),e(tr,{}),e(f,{to:"/blogs",className:d("px-4 py-2 transition-colors",r==="/blogs"?"text-primary":"hover:text-primary"),children:"บทความ"}),e(f,{to:"/about",className:d("px-4 py-2 transition-colors",r==="/about"?"text-primary":"hover:text-primary"),children:"เกี่ยวกับเรา"}),e(f,{to:"/contact",className:d("px-4 py-2 transition-colors",r==="/contact"?"text-primary":"hover:text-primary"),children:"ติดต่อเรา"})]})}),e(ar,{})]})})},ir="/_build/assets/globals-BUMEa2m7.css",N=Ve({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"บริษัทแอดเวนเท็กซ์ : ทัวร์ต่างประเทศ แพ็คเกจทัวร์",description:"ทัวร์ต่างประเทศ ในประเทศ เราคัดสรรแพ็คเกจทัวร์ ที่น่าสนใจ ดีที่สุด หลากหลายเส้นทาง ✓ บริการด้วยความเต็มใจ จองทัวร์ จัดกรุ๊ปส่วนตัว ตั๋วเครื่องบิน บัตรเข้าชม โทร: 02-254-9338."}],links:[{rel:"stylesheet",href:ir}]}),component:lr});function lr(){return e(cr,{children:e(Ue,{})})}function cr({children:t}){return l("html",{children:[e("head",{children:e(Ut,{})}),l("body",{className:"min-h-screen bg-background antialiased",children:[l("div",{className:"relative flex min-h-screen flex-col bg-background",children:[e(sr,{}),e("main",{className:"flex-1",children:t}),e(Xt,{})]}),e(Ye,{}),e(Qt,{})]})]})}const dr=()=>import("./contact-jtLj_M2M.js"),Ne=_("/contact")({head:()=>({meta:[{title:"ติดต่อเรา : บริษัท แอดแวนซ์เท็ก จำกัด : ศูนย์รวมทัวร์ที่ดีที่สุด"}]}),component:S(dr,"component",()=>Ne.ssr)}),ur=()=>import("./about-BqKYHHhD.js"),mr=()=>import("./about-BqKYHHhD.js"),we=_("/about")({head:()=>({meta:[{title:"เกี่ยวกับเรา : บริษัท แอดแวนซ์เท็ก จำกัด : ศูนย์รวมทัวร์ที่ดีที่สุด"}]}),component:S(mr,"component",()=>we.ssr),loader:Q(ur,"loader")}),hr=()=>import("./index-BcaqQp-Y.js"),Re=_("/")({component:S(hr,"component",()=>Re.ssr)}),A=m.forwardRef(({className:t,type:r,...o},n)=>e("input",{type:r,className:d("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:n,...o}));A.displayName="Input";const pr=R.Root,I=m.forwardRef(({className:t,...r},o)=>e(R.Item,{ref:o,className:d("border-b",t),...r}));I.displayName="AccordionItem";const $=m.forwardRef(({className:t,children:r,...o},n)=>e(R.Header,{className:"flex",children:l(R.Trigger,{ref:n,className:d("flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...o,children:[r,e(ie,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));$.displayName=R.Trigger.displayName;const H=m.forwardRef(({className:t,children:r,...o},n)=>e(R.Content,{ref:n,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:e("div",{className:d("pb-4 pt-0",t),children:r})}));H.displayName=R.Content.displayName;const _e=m.forwardRef(({className:t,...r},o)=>e(O.Root,{ref:o,className:d("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...r,children:e(O.Indicator,{className:d("flex items-center justify-center text-current"),children:e(it,{className:"h-4 w-4"})})}));_e.displayName=O.Root.displayName;const fr=q("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Z=m.forwardRef(({className:t,...r},o)=>e(le.Root,{ref:o,className:d(fr(),t),...r}));Z.displayName=le.Root.displayName;const Se=m.forwardRef(({className:t,orientation:r="horizontal",decorative:o=!0,...n},s)=>e(ce.Root,{ref:s,decorative:o,orientation:r,className:d("shrink-0 bg-border",r==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",t),...n}));Se.displayName=ce.Root.displayName;const ke=m.forwardRef(({className:t,...r},o)=>l(C.Root,{ref:o,className:d("relative flex w-full touch-none select-none items-center",t),...r,children:[e(C.Track,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:e(C.Range,{className:"absolute h-full bg-primary"})}),e(C.Thumb,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]}));ke.displayName=C.Root.displayName;const P=m.forwardRef(({className:t,id:r,title:o,checked:n,onChange:s,...a},i)=>l("li",{ref:i,className:d("flex items-center gap-2",t),...a,children:[e(_e,{id:r,className:"border-muted-foreground shadow-none data-[state=checked]:border-primary data-[state=checked]:bg-primary",checked:n,onCheckedChange:c=>s(c)}),e(Z,{htmlFor:r,className:"text-sm font-normal leading-none",children:o})]}));P.displayName="ListItem";const gr=[{id:"all",title:"แพ็คเกจทั้งหมด",checked:!0},{id:"study",title:"แพ็คเกจเรียนต่อ",checked:!1},{id:"travel",title:"แพ็คเกจท่องเที่ยว",checked:!1}],xr=[{id:"all",title:"เมืองทั้งหมด",checked:!0},{id:"harbin",title:"เมืองฮาร์บิน",checked:!1},{id:"shanghai",title:"เมืองเซี่ยงไฮ้",checked:!1},{id:"chengdu",title:"เมืองเฉิงตู",checked:!1},{id:"beijing",title:"เมืองปักกิ่ง",checked:!1},{id:"guangzhou",title:"เมืองกว่างโจว",checked:!1},{id:"chongqing",title:"เมืองฉงชิ่ง",checked:!1}],yr=[{id:"all",title:"เดือนทั้งหมด",checked:!0},{id:"1",title:"มกราคม",checked:!1},{id:"2",title:"กุมภาพันธ์",checked:!1},{id:"3",title:"มีนาคม",checked:!1},{id:"4",title:"เมษายน",checked:!1},{id:"5",title:"พฤษภาคม",checked:!1},{id:"6",title:"มิถุนายน",checked:!1},{id:"7",title:"กรกฎาคม",checked:!1},{id:"8",title:"สิงหาคม",checked:!1},{id:"9",title:"กันยายน",checked:!1},{id:"10",title:"ตุลาคม",checked:!1},{id:"11",title:"พฤศจิกายน",checked:!1},{id:"12",title:"ธันวาคม",checked:!1}],br=[{id:"all",title:"กิจกรรมทั้งหมด",checked:!0},{id:"short",title:"เรียนต่อระยะสั้น",checked:!1},{id:"long",title:"เรียนต่อระยะยาว",checked:!1}],vr=()=>{const[o,n]=m.useState({priceRange:[0,2e5]}),s=a=>{const i={...o,priceRange:a};n(i)};return l("div",{className:"space-y-6",children:[l("div",{className:"flex flex-col gap-2",children:[e(Z,{className:"text-sm font-semibold leading-none",children:"ช่วงราคา"}),l("div",{className:"flex items-center gap-2",children:[e(A,{type:"number",value:o.priceRange[0],onChange:a=>s([+a.target.value,o.priceRange[1]]),className:"w-24 rounded-md border px-3 py-2"}),e("span",{className:"font-normal text-muted-foreground",children:"-"}),e(A,{type:"number",value:o.priceRange[1],onChange:a=>s([o.priceRange[0],+a.target.value]),className:"w-24 rounded-md border px-3 py-2"})]}),e("div",{className:"pt-2",children:e(ke,{min:0,max:2e5,step:1e3,value:o.priceRange,onValueChange:s,className:"w-full cursor-grab"})})]}),e(Se,{className:"text-muted-foreground"}),l(pr,{type:"multiple",className:"w-full",defaultValue:["item-1"],children:[l(I,{value:"item-1",className:"border-none",children:[e($,{className:"text-sm font-normal leading-none text-muted-foreground hover:no-underline",children:"แพ็คเกจ"}),e(H,{children:e("ul",{className:"space-y-2",children:gr.map(a=>e(P,{...a,checked:a.checked,onChange:()=>{}},a.id))})})]}),l(I,{value:"item-2",className:"border-none",children:[e($,{className:"text-sm font-normal leading-none text-muted-foreground hover:no-underline",children:"เมือง"}),e(H,{children:e("ul",{className:"h-24 space-y-2 overflow-y-auto",children:xr.map(a=>e(P,{...a,checked:a.checked,onChange:()=>{}},a.id))})})]}),l(I,{value:"item-3",className:"border-none",children:[e($,{className:"text-sm font-normal leading-none text-muted-foreground hover:no-underline",children:"เดือน"}),e(H,{children:e("ul",{className:"h-24 space-y-2 overflow-y-auto",children:yr.map(a=>e(P,{...a,checked:a.checked,onChange:()=>{}},a.id))})})]}),l(I,{value:"item-4",className:"border-none",children:[e($,{className:"text-sm font-normal leading-none text-muted-foreground hover:no-underline",children:"ประเภทกิจกรรม"}),e(H,{children:e("ul",{className:"space-y-2",children:br.map(a=>e(P,{...a,checked:a.checked,onChange:()=>{}},a.id))})})]})]})]})},Nr=m.forwardRef(({className:t,children:r,...o},n)=>e("div",{ref:n,className:d("mb-8 flex flex-col items-center justify-between gap-4 rounded-lg border bg-background p-4 md:flex-row",t),...o,children:r}));Nr.displayName="TourSearch";const wr=m.forwardRef(({className:t,totalCount:r,...o},n)=>l("div",{ref:n,className:d("flex flex-col gap-2",t),...o,children:[e("h2",{className:"text-2xl font-semibold",children:"ค้นหาแพ็คเกจ"}),l("p",{className:"text-sm text-muted-foreground",children:["พบทั้งหมด"," ",e("span",{className:"font-medium text-orange-500",children:r})," รายการ"]})]}));wr.displayName="TourSearchHeader";const Rr=m.forwardRef(({className:t,searchQuery:r,onSearchChange:o,viewMode:n,onViewModeChange:s,...a},i)=>l("div",{ref:i,className:d("flex w-full items-center gap-4 md:w-auto",t),...a,children:[l("div",{className:"relative flex-1 md:w-64",children:[e(lt,{className:"absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"}),e(A,{placeholder:"Search tours...",className:"pl-9",value:r,onChange:c=>o(c.target.value)})]}),e("div",{className:"md:hidden",children:l(ye,{children:[e(be,{asChild:!0,children:e(E,{variant:"outline",size:"icon",children:e(ct,{className:"size-4"})})}),l(G,{children:[l(J,{children:[e(X,{children:"กรองแพ็คเกจท่องเที่ยว"}),e(K,{children:"กรองแพ็คเกจท่องเที่ยวตามความต้องการของคุณ"})]}),e("div",{className:"py-4",children:e(vr,{})})]})]})}),l("div",{className:"flex rounded-md border",children:[e(E,{variant:"ghost",size:"icon",className:"rounded-none transition-colors hover:bg-primary/10",onClick:()=>s("grid"),children:e(dt,{className:d("size-4",n==="grid"&&"text-primary")})}),e(E,{variant:"ghost",size:"icon",className:"rounded-none transition-colors hover:bg-primary/10",onClick:()=>s("list"),children:e(ut,{className:d("size-4",n==="list"&&"text-primary")})})]})]}));Rr.displayName="TourSearchControls";const _r=()=>import("./index-IMqa8d57.js"),Sr=()=>import("./index-IMqa8d57.js"),kr=T.object({type:T.enum(["study","travel"]).default("study"),duration:T.enum(["short-term","long-term"]).optional(),location:T.string().optional(),price:T.number().optional()}),Te=_("/tours/")({head:()=>({meta:[{title:"แพ็คเกจทัวร์ : บริษัท แอดแวนซ์เท็ก จำกัด : ศูนย์รวมทัวร์ที่ดีที่สุด"}]}),component:S(Sr,"component",()=>Te.ssr),validateSearch:t=>kr.parse(t),loader:Q(_r,"loader")}),Tr=()=>import("./index-8ppc5UHZ.js"),Cr=()=>import("./index-8ppc5UHZ.js"),Ce=_("/blogs/")({component:S(Cr,"component",()=>Ce.ssr),loader:Q(Tr,"loader")}),Ir=()=>import("./_tourId-BGxO_fRW.js"),Ie=_("/tours/$tourId")({component:S(Ir,"component",()=>Ie.ssr)}),$r=()=>import("./_blogId-BxHXRZr1.js"),$e=_("/blogs/$blogId")({component:S($r,"component",()=>$e.ssr)}),Hr=Ne.update({id:"/contact",path:"/contact",getParentRoute:()=>N}),Pr=we.update({id:"/about",path:"/about",getParentRoute:()=>N}),Er=Re.update({id:"/",path:"/",getParentRoute:()=>N}),Mr=Te.update({id:"/tours/",path:"/tours/",getParentRoute:()=>N}),Lr=Ce.update({id:"/blogs/",path:"/blogs/",getParentRoute:()=>N}),zr=Ie.update({id:"/tours/$tourId",path:"/tours/$tourId",getParentRoute:()=>N}),Ar=$e.update({id:"/blogs/$blogId",path:"/blogs/$blogId",getParentRoute:()=>N}),qr={IndexRoute:Er,AboutRoute:Pr,ContactRoute:Hr,BlogsBlogIdRoute:Ar,ToursTourIdRoute:zr,BlogsIndexRoute:Lr,ToursIndexRoute:Mr},jr=N._addFileChildren(qr)._addFileTypes();function Br(){return Qe({routeTree:jr})}const io=Mt({createRouter:Br,getRouterManifest:yt})(Ot);export{E as B,A as I,Z as L,we as R,Nr as T,Te as a,rr as b,d as c,wr as d,Rr as e,vr as f,Ce as g,gt as h,so as i,Pt as j,ao as k,$e as l,re as m,io as n,kt as t};