import{c as ge,a as o,j as e,Q as ve,u as be,U as O,t as V,V as je,e as T,k as j,v as K,i as Ne,l as ye,b as S,B,d as Te}from"./client-B42ABy-e.js";import{B as we,C as Ie}from"./badge-BX8fJbc0.js";import{s as Se,S as Ce,a as Re,b as Fe,c as Ee,d as Pe,D as ke,e as Ae,f as _e,g as Be,h as De,A as C,i as L}from"./select-Rv5xCkR_.js";import{u as Me}from"./use-toast-58QX4mOB.js";import{h as ze,j as Ge,i as $e,S as Le,U as Oe}from"./index-ByNaFnmF.js";import"./chevron-right-jr-OsRoB.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=ge("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);function Ke(s,t=[]){let r=[];function a(m,i){const u=o.createContext(i),p=r.length;r=[...r,i];function l(c){const{scope:x,children:N,...f}=c,g=x?.[s][p]||u,w=o.useMemo(()=>f,Object.values(f));return e.jsx(g.Provider,{value:w,children:N})}function d(c,x){const N=x?.[s][p]||u,f=o.useContext(N);if(f)return f;if(i!==void 0)return i;throw new Error(`\`${c}\` must be used within \`${m}\``)}return l.displayName=m+"Provider",[l,d]}const n=()=>{const m=r.map(i=>o.createContext(i));return function(u){const p=u?.[s]||m;return o.useMemo(()=>({[`__scope${s}`]:{...u,[s]:p}}),[u,p])}};return n.scopeName=s,[a,Ue(n,...t)]}function Ue(...s){const t=s[0];if(s.length===1)return t;const r=()=>{const a=s.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(m){const i=a.reduce((u,{useScope:p,scopeName:l})=>{const c=p(m)[`__scope${l}`];return{...u,...c}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return r.scopeName=t.scopeName,r}var _="rovingFocusGroup.onEntryFocus",We={bubbles:!1,cancelable:!0},E="RovingFocusGroup",[D,U,He]=ve(E),[Ye,W]=Ke(E,[He]),[qe,Qe]=Ye(E),H=o.forwardRef((s,t)=>e.jsx(D.Provider,{scope:s.__scopeRovingFocusGroup,children:e.jsx(D.Slot,{scope:s.__scopeRovingFocusGroup,children:e.jsx(Ze,{...s,ref:t})})}));H.displayName=E;var Ze=o.forwardRef((s,t)=>{const{__scopeRovingFocusGroup:r,orientation:a,loop:n=!1,dir:m,currentTabStopId:i,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:p,onEntryFocus:l,preventScrollOnEntryFocus:d=!1,...c}=s,x=o.useRef(null),N=be(t,x),f=O(m),[g=null,w]=V({prop:i,defaultProp:u,onChange:p}),[v,b]=o.useState(!1),P=je(l),ue=U(r),k=o.useRef(!1),[me,G]=o.useState(0);return o.useEffect(()=>{const h=x.current;if(h)return h.addEventListener(_,P),()=>h.removeEventListener(_,P)},[P]),e.jsx(qe,{scope:r,orientation:a,dir:f,loop:n,currentTabStopId:g,onItemFocus:o.useCallback(h=>w(h),[w]),onItemShiftTab:o.useCallback(()=>b(!0),[]),onFocusableItemAdd:o.useCallback(()=>G(h=>h+1),[]),onFocusableItemRemove:o.useCallback(()=>G(h=>h-1),[]),children:e.jsx(T.div,{tabIndex:v||me===0?-1:0,"data-orientation":a,...c,ref:N,style:{outline:"none",...s.style},onMouseDown:j(s.onMouseDown,()=>{k.current=!0}),onFocus:j(s.onFocus,h=>{const pe=!k.current;if(h.target===h.currentTarget&&pe&&!v){const $=new CustomEvent(_,We);if(h.currentTarget.dispatchEvent($),!$.defaultPrevented){const A=ue().filter(y=>y.focusable),fe=A.find(y=>y.active),xe=A.find(y=>y.id===g),he=[fe,xe,...A].filter(Boolean).map(y=>y.ref.current);Q(he,d)}}k.current=!1}),onBlur:j(s.onBlur,()=>b(!1))})})}),Y="RovingFocusGroupItem",q=o.forwardRef((s,t)=>{const{__scopeRovingFocusGroup:r,focusable:a=!0,active:n=!1,tabStopId:m,...i}=s,u=K(),p=m||u,l=Qe(Y,r),d=l.currentTabStopId===p,c=U(r),{onFocusableItemAdd:x,onFocusableItemRemove:N}=l;return o.useEffect(()=>{if(a)return x(),()=>N()},[a,x,N]),e.jsx(D.ItemSlot,{scope:r,id:p,focusable:a,active:n,children:e.jsx(T.span,{tabIndex:d?0:-1,"data-orientation":l.orientation,...i,ref:t,onMouseDown:j(s.onMouseDown,f=>{a?l.onItemFocus(p):f.preventDefault()}),onFocus:j(s.onFocus,()=>l.onItemFocus(p)),onKeyDown:j(s.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){l.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const g=es(f,l.orientation,l.dir);if(g!==void 0){if(f.metaKey||f.ctrlKey||f.altKey||f.shiftKey)return;f.preventDefault();let v=c().filter(b=>b.focusable).map(b=>b.ref.current);if(g==="last")v.reverse();else if(g==="prev"||g==="next"){g==="prev"&&v.reverse();const b=v.indexOf(f.currentTarget);v=l.loop?ss(v,b+1):v.slice(b+1)}setTimeout(()=>Q(v))}})})})});q.displayName=Y;var Je={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Xe(s,t){return t!=="rtl"?s:s==="ArrowLeft"?"ArrowRight":s==="ArrowRight"?"ArrowLeft":s}function es(s,t,r){const a=Xe(s.key,r);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return Je[a]}function Q(s,t=!1){const r=document.activeElement;for(const a of s)if(a===r||(a.focus({preventScroll:t}),document.activeElement!==r))return}function ss(s,t){return s.map((r,a)=>s[(t+a)%s.length])}var ts=H,rs=q,M="Tabs",[as,vs]=Ne(M,[W]),Z=W(),[ns,z]=as(M),J=o.forwardRef((s,t)=>{const{__scopeTabs:r,value:a,onValueChange:n,defaultValue:m,orientation:i="horizontal",dir:u,activationMode:p="automatic",...l}=s,d=O(u),[c,x]=V({prop:a,onChange:n,defaultProp:m});return e.jsx(ns,{scope:r,baseId:K(),value:c,onValueChange:x,orientation:i,dir:d,activationMode:p,children:e.jsx(T.div,{dir:d,"data-orientation":i,...l,ref:t})})});J.displayName=M;var X="TabsList",ee=o.forwardRef((s,t)=>{const{__scopeTabs:r,loop:a=!0,...n}=s,m=z(X,r),i=Z(r);return e.jsx(ts,{asChild:!0,...i,orientation:m.orientation,dir:m.dir,loop:a,children:e.jsx(T.div,{role:"tablist","aria-orientation":m.orientation,...n,ref:t})})});ee.displayName=X;var se="TabsTrigger",te=o.forwardRef((s,t)=>{const{__scopeTabs:r,value:a,disabled:n=!1,...m}=s,i=z(se,r),u=Z(r),p=ne(i.baseId,a),l=ie(i.baseId,a),d=a===i.value;return e.jsx(rs,{asChild:!0,...u,focusable:!n,active:d,children:e.jsx(T.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":l,"data-state":d?"active":"inactive","data-disabled":n?"":void 0,disabled:n,id:p,...m,ref:t,onMouseDown:j(s.onMouseDown,c=>{!n&&c.button===0&&c.ctrlKey===!1?i.onValueChange(a):c.preventDefault()}),onKeyDown:j(s.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&i.onValueChange(a)}),onFocus:j(s.onFocus,()=>{const c=i.activationMode!=="manual";!d&&!n&&c&&i.onValueChange(a)})})})});te.displayName=se;var re="TabsContent",ae=o.forwardRef((s,t)=>{const{__scopeTabs:r,value:a,forceMount:n,children:m,...i}=s,u=z(re,r),p=ne(u.baseId,a),l=ie(u.baseId,a),d=a===u.value,c=o.useRef(d);return o.useEffect(()=>{const x=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(x)},[]),e.jsx(ye,{present:n||d,children:({present:x})=>e.jsx(T.div,{"data-state":d?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!x,id:l,tabIndex:0,...i,ref:t,style:{...s.style,animationDuration:c.current?"0s":void 0},children:x&&m})})});ae.displayName=re;function ne(s,t){return`${s}-trigger-${t}`}function ie(s,t){return`${s}-content-${t}`}var is=J,oe=ee,ce=te,le=ae;const os=is,de=o.forwardRef(({className:s,...t},r)=>e.jsx(oe,{ref:r,className:S("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",s),...t}));de.displayName=oe.displayName;const R=o.forwardRef(({className:s,...t},r)=>e.jsx(ce,{ref:r,className:S("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",s),...t}));R.displayName=ce.displayName;const F=o.forwardRef(({className:s,...t},r)=>e.jsx(le,{ref:r,className:S("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...t}));F.displayName=le.displayName;const cs=({tourData:s})=>{const[t,r]=o.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"relative aspect-[4/3] overflow-hidden rounded-lg",children:e.jsx("img",{src:s.images[t],alt:s.title,className:"size-full object-cover"})}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:s.images.map((a,n)=>e.jsx("button",{onClick:()=>r(n),className:S("relative aspect-[4/3] overflow-hidden rounded-lg",t===n&&"ring-2 ring-primary"),children:e.jsx("img",{src:a,alt:`Gallery ${n+1}`,className:"size-full object-cover"})},n))})]})},ls=({basePrice:s,maxGroupSize:t})=>{const[r,a]=o.useState(),[n,m]=o.useState("1"),{toast:i}=Me(),u=parseInt(t.split(" ")[0]),p=()=>{if(!r){i({title:"Select a Date",description:"Please select a travel date to continue.",variant:"destructive"});return}i({title:"Booking Initiated",description:`Your booking request for ${$e(r,"PPP")} has been received.`})},l=()=>{const d=parseInt(n);let c=s*d;return d>=4&&(c=c*.9),c.toFixed(2)};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium",children:"Select Date"}),e.jsx(ze,{mode:"single",selected:r,onSelect:a,disabled:d=>Ge(d,Se()),className:"rounded-md border"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium",children:"Number of Travelers"}),e.jsxs(Ce,{value:n,onValueChange:m,children:[e.jsx(Re,{children:e.jsx(Fe,{placeholder:"Select travelers"})}),e.jsx(Ee,{children:Array.from({length:u},(d,c)=>e.jsxs(Pe,{value:(c+1).toString(),children:[c+1," ",c===0?"Person":"People"]},c+1))})]})]}),e.jsxs("div",{className:"rounded-lg bg-gray-50 p-4",children:[e.jsxs("div",{className:"mb-2 flex justify-between",children:[e.jsx("span",{children:"Base Price:"}),e.jsxs("span",{children:["$",s,"/person"]})]}),e.jsxs("div",{className:"mb-2 flex justify-between",children:[e.jsx("span",{children:"Travelers:"}),e.jsxs("span",{children:["× ",n]})]}),parseInt(n)>=4&&e.jsxs("div",{className:"mb-2 flex justify-between text-green-600",children:[e.jsx("span",{children:"Group Discount:"}),e.jsx("span",{children:"-10%"})]}),e.jsx("div",{className:"mt-2 border-t pt-2",children:e.jsxs("div",{className:"flex justify-between font-bold",children:[e.jsx("span",{children:"Total:"}),e.jsxs("span",{children:["$",l()]})]})})]}),e.jsx(B,{className:"w-full",size:"lg",onClick:p,disabled:!r,children:"Book Now"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"* Free cancellation up to 24 hours before the tour"})]})]})})},ds=({tourData:s})=>{const[t,r]=o.useState(!1);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx(we,{children:s.difficulty}),e.jsx(B,{variant:"ghost",size:"icon",onClick:()=>r(!t),children:e.jsx(Ve,{className:S("size-5",t&&"fill-red-500 text-red-500")})})]}),e.jsx("h1",{className:"mb-2 text-3xl font-bold",children:s.title}),e.jsxs("div",{className:"mb-4 flex items-center gap-2 text-muted-foreground",children:[e.jsx(Te,{className:"size-4"}),e.jsx("span",{children:s.location})]}),e.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(Le,{className:"mr-1 size-4 text-yellow-400"}),e.jsx("span",{children:s.rating}),e.jsxs("span",{className:"ml-1 text-muted-foreground",children:["(",s.reviewCount," reviews)"]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(Ie,{className:"mr-1 size-4"}),e.jsx("span",{children:s.duration})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(Oe,{className:"mr-1 size-4"}),e.jsx("span",{children:s.groupSize})]})]})]}),e.jsxs("div",{className:"rounded-lg border bg-white p-6",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Price per person"}),e.jsxs("p",{className:"text-3xl font-bold",children:["$",s.price]})]}),e.jsxs(ke,{children:[e.jsx(Ae,{asChild:!0,children:e.jsx(B,{size:"lg",className:"px-8",children:"Book Now"})}),e.jsxs(_e,{className:"max-w-3xl",children:[e.jsx(Be,{children:e.jsx(De,{children:"Book Your Tour"})}),e.jsx(ls,{basePrice:s.price,maxGroupSize:s.groupSize})]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"* Price may vary depending on selected date"})]}),e.jsx("div",{className:"prose max-w-none",children:e.jsx("p",{children:s.description})}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 font-semibold",children:"Tour Highlights"}),e.jsx("ul",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:s.highlights.map((a,n)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(C,{className:"size-4 text-primary"}),e.jsx("span",{children:a})]},n))})]})]})},I={id:"1",title:"Bali Paradise Explorer",description:"Experience the magic of Bali through this carefully curated 10-day adventure that takes you from pristine beaches to ancient temples, lush rainforests, and vibrant cultural sites.",price:2499,rating:4.8,reviewCount:124,duration:"10 days",groupSize:"12 max",difficulty:"Easy",location:"Bali, Indonesia",images:["https://images.unsplash.com/photo-1537996194471-e657df975ab4","https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b","https://images.unsplash.com/photo-1537953773345-d172ccf13cf1","https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8"],highlights:["Visit the iconic Tanah Lot temple at sunset","Trek through the stunning Tegalalang rice terraces","Snorkel in crystal-clear waters of Nusa Penida","Experience traditional Balinese dance performances","Stay in luxury villas with private pools"],itinerary:[{day:1,title:"Arrival in Denpasar",description:"Welcome to Bali! Transfer to your luxury villa in Seminyak, followed by a welcome dinner.",activities:["Airport pickup","Hotel check-in","Welcome dinner"]},{day:2,title:"Exploring Ubud",description:"Discover the cultural heart of Bali with visits to ancient temples and art galleries.",activities:["Temple visits","Art gallery tour","Traditional dance show"]},{day:3,title:"Rice Terraces & Waterfalls",description:"Trek through the famous Tegalalang rice terraces and visit hidden waterfalls.",activities:["Rice terrace trek","Waterfall swimming","Local lunch"]}],included:["Luxury accommodation","Daily breakfast and select meals","Professional English-speaking guide","All entrance fees","Private transportation","Airport transfers"],excluded:["International flights","Travel insurance","Personal expenses","Optional activities"]},bs=function(){return e.jsx("div",{className:"min-h-screen bg-gray-50",children:e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsxs("div",{className:"mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2",children:[e.jsx(cs,{tourData:I}),e.jsx(ds,{tourData:I})]}),e.jsxs(os,{defaultValue:"itinerary",className:"mt-12",children:[e.jsxs(de,{className:"w-full justify-start",children:[e.jsx(R,{value:"itinerary",children:"Itinerary"}),e.jsx(R,{value:"included",children:"What's Included"}),e.jsx(R,{value:"reviews",children:"Reviews"})]}),e.jsx(F,{value:"itinerary",className:"mt-6",children:e.jsx("div",{className:"space-y-8",children:I.itinerary.map(t=>e.jsxs("div",{className:"relative border-l-2 border-gray-200 pb-8 pl-8 last:pb-0",children:[e.jsx("div",{className:"absolute left-[-9px] top-0 size-4 rounded-full bg-primary"}),e.jsxs("div",{children:[e.jsxs("h3",{className:"mb-2 font-semibold",children:["Day ",t.day,": ",t.title]}),e.jsx("p",{className:"mb-4 text-muted-foreground",children:t.description}),e.jsx("ul",{className:"space-y-2",children:t.activities.map((r,a)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(C,{className:"size-4 text-primary"}),e.jsx("span",{children:r})]},a))})]})]},t.day))})}),e.jsx(F,{value:"included",className:"mt-6",children:e.jsxs("div",{className:"grid gap-8 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"mb-4 flex items-center gap-2 font-semibold",children:[e.jsx(L,{className:"size-5 text-primary"}),"What's Included"]}),e.jsx("ul",{className:"space-y-2",children:I.included.map((t,r)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(C,{className:"size-4 text-green-500"}),e.jsx("span",{children:t})]},r))})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:"mb-4 flex items-center gap-2 font-semibold",children:[e.jsx(L,{className:"size-5 text-primary"}),"What's Not Included"]}),e.jsx("ul",{className:"space-y-2",children:I.excluded.map((t,r)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(C,{className:"size-4 text-red-500"}),e.jsx("span",{children:t})]},r))})]})]})}),e.jsx(F,{value:"reviews",className:"mt-6",children:e.jsx("div",{className:"py-12 text-center",children:e.jsx("p",{className:"text-muted-foreground",children:"Reviews coming soon..."})})})]})]})})};export{bs as component};