import{c as Ne,a as o,j as n,X as Pe,b as j,Y as Ee,Z as St,_ as wt,$ as _e,a0 as je,a1 as yt,a2 as Ct,a3 as Nt,Q as bt,i as Tt,u as L,e as D,k as I,a4 as G,a5 as De,m as It,p as Rt,n as Pt,S as Et,F as _t,D as jt,v as be,a6 as Dt,a7 as Mt,V as At,q as Ot,a8 as Ie,U as kt,t as Re,a9 as Me,aa as Lt}from"./client-B42ABy-e.js";import{s as Ht,e as Ae,A as Vt,C as Bt,f as Ft,R as Ut}from"./index-ByNaFnmF.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=Ne("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=Ne("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=Ne("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);function jo(t){return Ht(Date.now(),t)}const Do=yt,Mo=Ct,Kt=Nt,Oe=o.forwardRef(({className:t,...s},e)=>n.jsx(Pe,{ref:e,className:j("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s}));Oe.displayName=Pe.displayName;const zt=o.forwardRef(({className:t,children:s,...e},r)=>n.jsxs(Kt,{children:[n.jsx(Oe,{}),n.jsxs(Ee,{ref:r,className:j("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...e,children:[s,n.jsxs(St,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[n.jsx(wt,{className:"h-4 w-4"}),n.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));zt.displayName=Ee.displayName;const $t=({className:t,...s})=>n.jsx("div",{className:j("flex flex-col space-y-1.5 text-center sm:text-left",t),...s});$t.displayName="DialogHeader";const Gt=o.forwardRef(({className:t,...s},e)=>n.jsx(_e,{ref:e,className:j("text-lg font-semibold leading-none tracking-tight",t),...s}));Gt.displayName=_e.displayName;const qt=o.forwardRef(({className:t,...s},e)=>n.jsx(je,{ref:e,className:j("text-sm text-muted-foreground",t),...s}));qt.displayName=je.displayName;var Yt=[" ","Enter","ArrowUp","ArrowDown"],Xt=[" ","Enter"],re="Select",[ie,de,Zt]=bt(re),[te,Ao]=Tt(re,[Zt,Ae]),pe=Ae(),[Qt,q]=te(re),[Jt,eo]=te(re),ke=t=>{const{__scopeSelect:s,children:e,open:r,defaultOpen:l,onOpenChange:p,value:a,defaultValue:c,onValueChange:i,dir:f,name:x,autoComplete:w,disabled:R,required:b,form:C}=t,d=pe(s),[h,v]=o.useState(null),[m,g]=o.useState(null),[W,M]=o.useState(!1),oe=kt(f),[P=!1,O]=Re({prop:r,defaultProp:l,onChange:p}),[K,X]=Re({prop:a,defaultProp:c,onChange:i}),H=o.useRef(null),V=h?C||!!h.closest("form"):!0,[z,B]=o.useState(new Set),F=Array.from(z).map(E=>E.props.value).join(";");return n.jsx(Ut,{...d,children:n.jsxs(Qt,{required:b,scope:s,trigger:h,onTriggerChange:v,valueNode:m,onValueNodeChange:g,valueNodeHasChildren:W,onValueNodeHasChildrenChange:M,contentId:be(),value:K,onValueChange:X,open:P,onOpenChange:O,dir:oe,triggerPointerDownPosRef:H,disabled:R,children:[n.jsx(ie.Provider,{scope:s,children:n.jsx(Jt,{scope:t.__scopeSelect,onNativeOptionAdd:o.useCallback(E=>{B(k=>new Set(k).add(E))},[]),onNativeOptionRemove:o.useCallback(E=>{B(k=>{const U=new Set(k);return U.delete(E),U})},[]),children:e})}),V?n.jsxs(lt,{"aria-hidden":!0,required:b,tabIndex:-1,name:x,autoComplete:w,value:K,onChange:E=>X(E.target.value),disabled:R,form:C,children:[K===void 0?n.jsx("option",{value:""}):null,Array.from(z)]},F):null]})})};ke.displayName=re;var Le="SelectTrigger",He=o.forwardRef((t,s)=>{const{__scopeSelect:e,disabled:r=!1,...l}=t,p=pe(e),a=q(Le,e),c=a.disabled||r,i=L(s,a.onTriggerChange),f=de(e),x=o.useRef("touch"),[w,R,b]=ct(d=>{const h=f().filter(g=>!g.disabled),v=h.find(g=>g.value===a.value),m=it(h,d,v);m!==void 0&&a.onValueChange(m.value)}),C=d=>{c||(a.onOpenChange(!0),b()),d&&(a.triggerPointerDownPosRef.current={x:Math.round(d.pageX),y:Math.round(d.pageY)})};return n.jsx(Vt,{asChild:!0,...p,children:n.jsx(D.button,{type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":at(a.value)?"":void 0,...l,ref:i,onClick:I(l.onClick,d=>{d.currentTarget.focus(),x.current!=="mouse"&&C(d)}),onPointerDown:I(l.onPointerDown,d=>{x.current=d.pointerType;const h=d.target;h.hasPointerCapture(d.pointerId)&&h.releasePointerCapture(d.pointerId),d.button===0&&d.ctrlKey===!1&&d.pointerType==="mouse"&&(C(d),d.preventDefault())}),onKeyDown:I(l.onKeyDown,d=>{const h=w.current!=="";!(d.ctrlKey||d.altKey||d.metaKey)&&d.key.length===1&&R(d.key),!(h&&d.key===" ")&&Yt.includes(d.key)&&(C(),d.preventDefault())})})})});He.displayName=Le;var Ve="SelectValue",Be=o.forwardRef((t,s)=>{const{__scopeSelect:e,className:r,style:l,children:p,placeholder:a="",...c}=t,i=q(Ve,e),{onValueNodeHasChildrenChange:f}=i,x=p!==void 0,w=L(s,i.onValueNodeChange);return G(()=>{f(x)},[f,x]),n.jsx(D.span,{...c,ref:w,style:{pointerEvents:"none"},children:at(i.value)?n.jsx(n.Fragment,{children:a}):p})});Be.displayName=Ve;var to="SelectIcon",Fe=o.forwardRef((t,s)=>{const{__scopeSelect:e,children:r,...l}=t;return n.jsx(D.span,{"aria-hidden":!0,...l,ref:s,children:r||"▼"})});Fe.displayName=to;var oo="SelectPortal",Ue=t=>n.jsx(Ot,{asChild:!0,...t});Ue.displayName=oo;var J="SelectContent",We=o.forwardRef((t,s)=>{const e=q(J,t.__scopeSelect),[r,l]=o.useState();if(G(()=>{l(new DocumentFragment)},[]),!e.open){const p=r;return p?De.createPortal(n.jsx(Ke,{scope:t.__scopeSelect,children:n.jsx(ie.Slot,{scope:t.__scopeSelect,children:n.jsx("div",{children:t.children})})}),p):null}return n.jsx(ze,{...t,ref:s})});We.displayName=J;var A=10,[Ke,Y]=te(J),no="SelectContentImpl",ze=o.forwardRef((t,s)=>{const{__scopeSelect:e,position:r="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:p,onPointerDownOutside:a,side:c,sideOffset:i,align:f,alignOffset:x,arrowPadding:w,collisionBoundary:R,collisionPadding:b,sticky:C,hideWhenDetached:d,avoidCollisions:h,...v}=t,m=q(J,e),[g,W]=o.useState(null),[M,oe]=o.useState(null),P=L(s,u=>W(u)),[O,K]=o.useState(null),[X,H]=o.useState(null),V=de(e),[z,B]=o.useState(!1),F=o.useRef(!1);o.useEffect(()=>{if(g)return It(g)},[g]),Rt();const E=o.useCallback(u=>{const[N,..._]=V().map(T=>T.ref.current),[S]=_.slice(-1),y=document.activeElement;for(const T of u)if(T===y||(T?.scrollIntoView({block:"nearest"}),T===N&&M&&(M.scrollTop=0),T===S&&M&&(M.scrollTop=M.scrollHeight),T?.focus(),document.activeElement!==y))return},[V,M]),k=o.useCallback(()=>E([O,g]),[E,O,g]);o.useEffect(()=>{z&&k()},[z,k]);const{onOpenChange:U,triggerPointerDownPosRef:$}=m;o.useEffect(()=>{if(g){let u={x:0,y:0};const N=S=>{u={x:Math.abs(Math.round(S.pageX)-($.current?.x??0)),y:Math.abs(Math.round(S.pageY)-($.current?.y??0))}},_=S=>{u.x<=10&&u.y<=10?S.preventDefault():g.contains(S.target)||U(!1),document.removeEventListener("pointermove",N),$.current=null};return $.current!==null&&(document.addEventListener("pointermove",N),document.addEventListener("pointerup",_,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",N),document.removeEventListener("pointerup",_,{capture:!0})}}},[g,U,$]),o.useEffect(()=>{const u=()=>U(!1);return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[U]);const[ue,ae]=ct(u=>{const N=V().filter(y=>!y.disabled),_=N.find(y=>y.ref.current===document.activeElement),S=it(N,u,_);S&&setTimeout(()=>S.ref.current.focus())}),fe=o.useCallback((u,N,_)=>{const S=!F.current&&!_;(m.value!==void 0&&m.value===N||S)&&(K(u),S&&(F.current=!0))},[m.value]),me=o.useCallback(()=>g?.focus(),[g]),ee=o.useCallback((u,N,_)=>{const S=!F.current&&!_;(m.value!==void 0&&m.value===N||S)&&H(u)},[m.value]),le=r==="popper"?ve:$e,ne=le===ve?{side:c,sideOffset:i,align:f,alignOffset:x,arrowPadding:w,collisionBoundary:R,collisionPadding:b,sticky:C,hideWhenDetached:d,avoidCollisions:h}:{};return n.jsx(Ke,{scope:e,content:g,viewport:M,onViewportChange:oe,itemRefCallback:fe,selectedItem:O,onItemLeave:me,itemTextRefCallback:ee,focusSelectedItem:k,selectedItemText:X,position:r,isPositioned:z,searchRef:ue,children:n.jsx(Pt,{as:Et,allowPinchZoom:!0,children:n.jsx(_t,{asChild:!0,trapped:m.open,onMountAutoFocus:u=>{u.preventDefault()},onUnmountAutoFocus:I(l,u=>{m.trigger?.focus({preventScroll:!0}),u.preventDefault()}),children:n.jsx(jt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:p,onPointerDownOutside:a,onFocusOutside:u=>u.preventDefault(),onDismiss:()=>m.onOpenChange(!1),children:n.jsx(le,{role:"listbox",id:m.contentId,"data-state":m.open?"open":"closed",dir:m.dir,onContextMenu:u=>u.preventDefault(),...v,...ne,onPlaced:()=>B(!0),ref:P,style:{display:"flex",flexDirection:"column",outline:"none",...v.style},onKeyDown:I(v.onKeyDown,u=>{const N=u.ctrlKey||u.altKey||u.metaKey;if(u.key==="Tab"&&u.preventDefault(),!N&&u.key.length===1&&ae(u.key),["ArrowUp","ArrowDown","Home","End"].includes(u.key)){let S=V().filter(y=>!y.disabled).map(y=>y.ref.current);if(["ArrowUp","End"].includes(u.key)&&(S=S.slice().reverse()),["ArrowUp","ArrowDown"].includes(u.key)){const y=u.target,T=S.indexOf(y);S=S.slice(T+1)}setTimeout(()=>E(S)),u.preventDefault()}})})})})})})});ze.displayName=no;var so="SelectItemAlignedPosition",$e=o.forwardRef((t,s)=>{const{__scopeSelect:e,onPlaced:r,...l}=t,p=q(J,e),a=Y(J,e),[c,i]=o.useState(null),[f,x]=o.useState(null),w=L(s,P=>x(P)),R=de(e),b=o.useRef(!1),C=o.useRef(!0),{viewport:d,selectedItem:h,selectedItemText:v,focusSelectedItem:m}=a,g=o.useCallback(()=>{if(p.trigger&&p.valueNode&&c&&f&&d&&h&&v){const P=p.trigger.getBoundingClientRect(),O=f.getBoundingClientRect(),K=p.valueNode.getBoundingClientRect(),X=v.getBoundingClientRect();if(p.dir!=="rtl"){const y=X.left-O.left,T=K.left-y,Z=P.left-T,Q=P.width+Z,he=Math.max(Q,O.width),ge=window.innerWidth-A,xe=Ie(T,[A,Math.max(A,ge-he)]);c.style.minWidth=Q+"px",c.style.left=xe+"px"}else{const y=O.right-X.right,T=window.innerWidth-K.right-y,Z=window.innerWidth-P.right-T,Q=P.width+Z,he=Math.max(Q,O.width),ge=window.innerWidth-A,xe=Ie(T,[A,Math.max(A,ge-he)]);c.style.minWidth=Q+"px",c.style.right=xe+"px"}const H=R(),V=window.innerHeight-A*2,z=d.scrollHeight,B=window.getComputedStyle(f),F=parseInt(B.borderTopWidth,10),E=parseInt(B.paddingTop,10),k=parseInt(B.borderBottomWidth,10),U=parseInt(B.paddingBottom,10),$=F+E+z+U+k,ue=Math.min(h.offsetHeight*5,$),ae=window.getComputedStyle(d),fe=parseInt(ae.paddingTop,10),me=parseInt(ae.paddingBottom,10),ee=P.top+P.height/2-A,le=V-ee,ne=h.offsetHeight/2,u=h.offsetTop+ne,N=F+E+u,_=$-N;if(N<=ee){const y=H.length>0&&h===H[H.length-1].ref.current;c.style.bottom="0px";const T=f.clientHeight-d.offsetTop-d.offsetHeight,Z=Math.max(le,ne+(y?me:0)+T+k),Q=N+Z;c.style.height=Q+"px"}else{const y=H.length>0&&h===H[0].ref.current;c.style.top="0px";const Z=Math.max(ee,F+d.offsetTop+(y?fe:0)+ne)+_;c.style.height=Z+"px",d.scrollTop=N-ee+d.offsetTop}c.style.margin=`${A}px 0`,c.style.minHeight=ue+"px",c.style.maxHeight=V+"px",r?.(),requestAnimationFrame(()=>b.current=!0)}},[R,p.trigger,p.valueNode,c,f,d,h,v,p.dir,r]);G(()=>g(),[g]);const[W,M]=o.useState();G(()=>{f&&M(window.getComputedStyle(f).zIndex)},[f]);const oe=o.useCallback(P=>{P&&C.current===!0&&(g(),m?.(),C.current=!1)},[g,m]);return n.jsx(ao,{scope:e,contentWrapper:c,shouldExpandOnScrollRef:b,onScrollButtonChange:oe,children:n.jsx("div",{ref:i,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:W},children:n.jsx(D.div,{...l,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});$e.displayName=so;var ro="SelectPopperPosition",ve=o.forwardRef((t,s)=>{const{__scopeSelect:e,align:r="start",collisionPadding:l=A,...p}=t,a=pe(e);return n.jsx(Bt,{...a,...p,ref:s,align:r,collisionPadding:l,style:{boxSizing:"border-box",...p.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});ve.displayName=ro;var[ao,Te]=te(J,{}),Se="SelectViewport",Ge=o.forwardRef((t,s)=>{const{__scopeSelect:e,nonce:r,...l}=t,p=Y(Se,e),a=Te(Se,e),c=L(s,p.onViewportChange),i=o.useRef(0);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),n.jsx(ie.Slot,{scope:e,children:n.jsx(D.div,{"data-radix-select-viewport":"",role:"presentation",...l,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...l.style},onScroll:I(l.onScroll,f=>{const x=f.currentTarget,{contentWrapper:w,shouldExpandOnScrollRef:R}=a;if(R?.current&&w){const b=Math.abs(i.current-x.scrollTop);if(b>0){const C=window.innerHeight-A*2,d=parseFloat(w.style.minHeight),h=parseFloat(w.style.height),v=Math.max(d,h);if(v<C){const m=v+b,g=Math.min(C,m),W=m-g;w.style.height=g+"px",w.style.bottom==="0px"&&(x.scrollTop=W>0?W:0,w.style.justifyContent="flex-end")}}}i.current=x.scrollTop})})})]})});Ge.displayName=Se;var qe="SelectGroup",[lo,co]=te(qe),io=o.forwardRef((t,s)=>{const{__scopeSelect:e,...r}=t,l=be();return n.jsx(lo,{scope:e,id:l,children:n.jsx(D.div,{role:"group","aria-labelledby":l,...r,ref:s})})});io.displayName=qe;var Ye="SelectLabel",Xe=o.forwardRef((t,s)=>{const{__scopeSelect:e,...r}=t,l=co(Ye,e);return n.jsx(D.div,{id:l.id,...r,ref:s})});Xe.displayName=Ye;var ce="SelectItem",[po,Ze]=te(ce),Qe=o.forwardRef((t,s)=>{const{__scopeSelect:e,value:r,disabled:l=!1,textValue:p,...a}=t,c=q(ce,e),i=Y(ce,e),f=c.value===r,[x,w]=o.useState(p??""),[R,b]=o.useState(!1),C=L(s,m=>i.itemRefCallback?.(m,r,l)),d=be(),h=o.useRef("touch"),v=()=>{l||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return n.jsx(po,{scope:e,value:r,disabled:l,textId:d,isSelected:f,onItemTextChange:o.useCallback(m=>{w(g=>g||(m?.textContent??"").trim())},[]),children:n.jsx(ie.ItemSlot,{scope:e,value:r,disabled:l,textValue:x,children:n.jsx(D.div,{role:"option","aria-labelledby":d,"data-highlighted":R?"":void 0,"aria-selected":f&&R,"data-state":f?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1,...a,ref:C,onFocus:I(a.onFocus,()=>b(!0)),onBlur:I(a.onBlur,()=>b(!1)),onClick:I(a.onClick,()=>{h.current!=="mouse"&&v()}),onPointerUp:I(a.onPointerUp,()=>{h.current==="mouse"&&v()}),onPointerDown:I(a.onPointerDown,m=>{h.current=m.pointerType}),onPointerMove:I(a.onPointerMove,m=>{h.current=m.pointerType,l?i.onItemLeave?.():h.current==="mouse"&&m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:I(a.onPointerLeave,m=>{m.currentTarget===document.activeElement&&i.onItemLeave?.()}),onKeyDown:I(a.onKeyDown,m=>{i.searchRef?.current!==""&&m.key===" "||(Xt.includes(m.key)&&v(),m.key===" "&&m.preventDefault())})})})})});Qe.displayName=ce;var se="SelectItemText",Je=o.forwardRef((t,s)=>{const{__scopeSelect:e,className:r,style:l,...p}=t,a=q(se,e),c=Y(se,e),i=Ze(se,e),f=eo(se,e),[x,w]=o.useState(null),R=L(s,v=>w(v),i.onItemTextChange,v=>c.itemTextRefCallback?.(v,i.value,i.disabled)),b=x?.textContent,C=o.useMemo(()=>n.jsx("option",{value:i.value,disabled:i.disabled,children:b},i.value),[i.disabled,i.value,b]),{onNativeOptionAdd:d,onNativeOptionRemove:h}=f;return G(()=>(d(C),()=>h(C)),[d,h,C]),n.jsxs(n.Fragment,{children:[n.jsx(D.span,{id:i.textId,...p,ref:R}),i.isSelected&&a.valueNode&&!a.valueNodeHasChildren?De.createPortal(p.children,a.valueNode):null]})});Je.displayName=se;var et="SelectItemIndicator",tt=o.forwardRef((t,s)=>{const{__scopeSelect:e,...r}=t;return Ze(et,e).isSelected?n.jsx(D.span,{"aria-hidden":!0,...r,ref:s}):null});tt.displayName=et;var we="SelectScrollUpButton",ot=o.forwardRef((t,s)=>{const e=Y(we,t.__scopeSelect),r=Te(we,t.__scopeSelect),[l,p]=o.useState(!1),a=L(s,r.onScrollButtonChange);return G(()=>{if(e.viewport&&e.isPositioned){let c=function(){const f=i.scrollTop>0;p(f)};const i=e.viewport;return c(),i.addEventListener("scroll",c),()=>i.removeEventListener("scroll",c)}},[e.viewport,e.isPositioned]),l?n.jsx(st,{...t,ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:i}=e;c&&i&&(c.scrollTop=c.scrollTop-i.offsetHeight)}}):null});ot.displayName=we;var ye="SelectScrollDownButton",nt=o.forwardRef((t,s)=>{const e=Y(ye,t.__scopeSelect),r=Te(ye,t.__scopeSelect),[l,p]=o.useState(!1),a=L(s,r.onScrollButtonChange);return G(()=>{if(e.viewport&&e.isPositioned){let c=function(){const f=i.scrollHeight-i.clientHeight,x=Math.ceil(i.scrollTop)<f;p(x)};const i=e.viewport;return c(),i.addEventListener("scroll",c),()=>i.removeEventListener("scroll",c)}},[e.viewport,e.isPositioned]),l?n.jsx(st,{...t,ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:i}=e;c&&i&&(c.scrollTop=c.scrollTop+i.offsetHeight)}}):null});nt.displayName=ye;var st=o.forwardRef((t,s)=>{const{__scopeSelect:e,onAutoScroll:r,...l}=t,p=Y("SelectScrollButton",e),a=o.useRef(null),c=de(e),i=o.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return o.useEffect(()=>()=>i(),[i]),G(()=>{c().find(x=>x.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[c]),n.jsx(D.div,{"aria-hidden":!0,...l,ref:s,style:{flexShrink:0,...l.style},onPointerDown:I(l.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:I(l.onPointerMove,()=>{p.onItemLeave?.(),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:I(l.onPointerLeave,()=>{i()})})}),uo="SelectSeparator",rt=o.forwardRef((t,s)=>{const{__scopeSelect:e,...r}=t;return n.jsx(D.div,{"aria-hidden":!0,...r,ref:s})});rt.displayName=uo;var Ce="SelectArrow",fo=o.forwardRef((t,s)=>{const{__scopeSelect:e,...r}=t,l=pe(e),p=q(Ce,e),a=Y(Ce,e);return p.open&&a.position==="popper"?n.jsx(Ft,{...l,...r,ref:s}):null});fo.displayName=Ce;function at(t){return t===""||t===void 0}var lt=o.forwardRef((t,s)=>{const{value:e,...r}=t,l=o.useRef(null),p=L(s,l),a=Dt(e);return o.useEffect(()=>{const c=l.current,i=window.HTMLSelectElement.prototype,x=Object.getOwnPropertyDescriptor(i,"value").set;if(a!==e&&x){const w=new Event("change",{bubbles:!0});x.call(c,e),c.dispatchEvent(w)}},[a,e]),n.jsx(Mt,{asChild:!0,children:n.jsx("select",{...r,ref:p,defaultValue:e})})});lt.displayName="BubbleSelect";function ct(t){const s=At(t),e=o.useRef(""),r=o.useRef(0),l=o.useCallback(a=>{const c=e.current+a;s(c),function i(f){e.current=f,window.clearTimeout(r.current),f!==""&&(r.current=window.setTimeout(()=>i(""),1e3))}(c)},[s]),p=o.useCallback(()=>{e.current="",window.clearTimeout(r.current)},[]);return o.useEffect(()=>()=>window.clearTimeout(r.current),[]),[e,l,p]}function it(t,s,e){const l=s.length>1&&Array.from(s).every(f=>f===s[0])?s[0]:s,p=e?t.indexOf(e):-1;let a=mo(t,Math.max(p,0));l.length===1&&(a=a.filter(f=>f!==e));const i=a.find(f=>f.textValue.toLowerCase().startsWith(l.toLowerCase()));return i!==e?i:void 0}function mo(t,s){return t.map((e,r)=>t[(s+r)%t.length])}var ho=ke,dt=He,go=Be,xo=Fe,vo=Ue,pt=We,So=Ge,ut=Xe,ft=Qe,wo=Je,yo=tt,mt=ot,ht=nt,gt=rt;const Oo=ho,ko=go,Co=o.forwardRef(({className:t,children:s,...e},r)=>n.jsxs(dt,{ref:r,className:j("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...e,children:[s,n.jsx(xo,{asChild:!0,children:n.jsx(Me,{className:"h-4 w-4 opacity-50"})})]}));Co.displayName=dt.displayName;const xt=o.forwardRef(({className:t,...s},e)=>n.jsx(mt,{ref:e,className:j("flex cursor-default items-center justify-center py-1",t),...s,children:n.jsx(Wt,{className:"h-4 w-4"})}));xt.displayName=mt.displayName;const vt=o.forwardRef(({className:t,...s},e)=>n.jsx(ht,{ref:e,className:j("flex cursor-default items-center justify-center py-1",t),...s,children:n.jsx(Me,{className:"h-4 w-4"})}));vt.displayName=ht.displayName;const No=o.forwardRef(({className:t,children:s,position:e="popper",...r},l)=>n.jsx(vo,{children:n.jsxs(pt,{ref:l,className:j("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:e,...r,children:[n.jsx(xt,{}),n.jsx(So,{className:j("p-1",e==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),n.jsx(vt,{})]})}));No.displayName=pt.displayName;const bo=o.forwardRef(({className:t,...s},e)=>n.jsx(ut,{ref:e,className:j("px-2 py-1.5 text-sm font-semibold",t),...s}));bo.displayName=ut.displayName;const To=o.forwardRef(({className:t,children:s,...e},r)=>n.jsxs(ft,{ref:r,className:j("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...e,children:[n.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:n.jsx(yo,{children:n.jsx(Lt,{className:"h-4 w-4"})})}),n.jsx(wo,{children:s})]}));To.displayName=ft.displayName;const Io=o.forwardRef(({className:t,...s},e)=>n.jsx(gt,{ref:e,className:j("-mx-1 my-1 h-px bg-muted",t),...s}));Io.displayName=gt.displayName;export{Eo as A,Do as D,Oo as S,Co as a,ko as b,No as c,To as d,Mo as e,zt as f,$t as g,Gt as h,_o as i,jo as s};