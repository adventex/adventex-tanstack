import{jsx as e,jsxs as n}from"react/jsx-runtime";import{zodResolver as w}from"@hookform/resolvers/zod";import{Send as C,Mail as k,Phone as R,MapPin as S}from"lucide-react";import{FormProvider as z,Controller as M,useFormContext as $,useForm as j}from"react-hook-form";import B from"react-qr-code";import*as l from"zod";import{u as D}from"./use-toast-CYhUVph2.js";import{c as u,L,I as b,B as P}from"./ssr-Dg2tEgjp.js";import*as m from"react";import{Slot as A}from"@radix-ui/react-slot";import{B as g}from"./blur-fade-CEpGLh_7.js";import"h3";import"unctx";import"node:async_hooks";import"@tanstack/react-router";import"jsesc";import"tiny-invariant";import"node:stream";import"isbot";import"react-dom/server";import"@tanstack/react-cross-context";import"clsx";import"tailwind-merge";import"@radix-ui/react-navigation-menu";import"class-variance-authority";import"@radix-ui/react-dialog";import"@radix-ui/react-accordion";import"@radix-ui/react-checkbox";import"@radix-ui/react-label";import"@radix-ui/react-separator";import"@radix-ui/react-slider";import"motion/react";const T=z,N=m.createContext({}),x=({...t})=>e(N.Provider,{value:{name:t.name},children:e(M,{...t})}),v=()=>{const t=m.useContext(N),i=m.useContext(y),{getFieldState:o,formState:s}=$(),r=o(t.name,s);if(!t)throw new Error("useFormField should be used within <FormField>");const{id:a}=i;return{id:a,name:t.name,formItemId:`${a}-form-item`,formDescriptionId:`${a}-form-item-description`,formMessageId:`${a}-form-item-message`,...r}},y=m.createContext({}),c=m.forwardRef(({className:t,...i},o)=>{const s=m.useId();return e(y.Provider,{value:{id:s},children:e("div",{ref:o,className:u("space-y-2",t),...i})})});c.displayName="FormItem";const d=m.forwardRef(({className:t,...i},o)=>{const{error:s,formItemId:r}=v();return e(L,{ref:o,className:u(s&&"text-destructive",t),htmlFor:r,...i})});d.displayName="FormLabel";const p=m.forwardRef(({...t},i)=>{const{error:o,formItemId:s,formDescriptionId:r,formMessageId:a}=v();return e(A,{ref:i,id:s,"aria-describedby":o?`${r} ${a}`:`${r}`,"aria-invalid":!!o,...t})});p.displayName="FormControl";const E=m.forwardRef(({className:t,...i},o)=>{const{formDescriptionId:s}=v();return e("p",{ref:o,id:s,className:u("text-[0.8rem] text-muted-foreground",t),...i})});E.displayName="FormDescription";const h=m.forwardRef(({className:t,children:i,...o},s)=>{const{error:r,formMessageId:a}=v(),f=r?String(r?.message):i;return f?e("p",{ref:s,id:a,className:u("text-[0.8rem] font-medium text-destructive",t),...o,children:f}):null});h.displayName="FormMessage";const F=m.forwardRef(({className:t,...i},o)=>e("textarea",{className:u("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:o,...i}));F.displayName="Textarea";const Q=l.object({name:l.string().min(2,"ชื่อต้องมีอย่างน้อย 2 ตัวอักษร"),email:l.string().email("อีเมลไม่ถูกต้อง"),subject:l.string().min(5,"หัวข้อต้องมีอย่างน้อย 5 ตัวอักษร"),message:l.string().min(10,"ข้อความต้องมีอย่างน้อย 10 ตัวอักษร")}),W=[{icon:k,title:"อีเมล",details:["info@adventex.com","support@adventex.com"]},{icon:R,title:"โทรศัพท์",details:["+66 81 234 5678","+66 81 234 5679"]},{icon:S,title:"ที่อยู่",details:["121/2 เลขที่ 3 ต.เวียง","อ.เชียงแสน จ.เชียงราย 57120"]}],_=[{icon:"/images/shared/facebook.svg",title:"Adventexeducation",url:"https://facebook.com/yourusername",color:"#1877F2"},{icon:"/images/shared/instagram.svg",title:"Adventexeducation",url:"https://instagram.com/yourusername",color:"#E4405F"},{icon:"/images/shared/line.svg",title:"Adventexeducation",url:"https://line.me/ti/p/yourusername",color:"#00C300"},{icon:"/images/shared/tiktok.svg",title:"Adventexeducation",url:"https://tiktok.com/yourusername",color:"#000000"}],be=function(){const{toast:i}=D(),o=j({resolver:w(Q)}),s=r=>{console.log({data:r}),i({title:"ส่งข้อความสำเร็จ",description:"เราจะติดต่อกลับโดยเร็วที่สุด"}),o.reset()};return e("article",{className:"container mx-auto px-4 py-8",children:n("div",{className:"grid gap-16 lg:grid-cols-3",children:[n("div",{className:"space-y-8",children:[W.map((r,a)=>e(g,{delay:.1*a,children:n("div",{className:"flex gap-4",children:[e("div",{className:"shrink-0",children:e("div",{className:"flex size-12 items-center justify-center rounded-full bg-primary/10",children:e(r.icon,{className:"size-6 text-primary"})})}),n("div",{children:[e("h3",{className:"mb-2 font-semibold",children:r.title}),r.details.map((f,I)=>e("p",{className:"text-muted-foreground",children:f},I))]})]})},a)),e(g,{delay:.4,children:n("div",{className:"mt-8",children:[e("h3",{className:"mb-4 font-semibold",children:"ติดต่อเราผ่านโซเชียล"}),e("div",{className:"flex flex-col gap-4",children:_.map((r,a)=>n("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-lg px-4 py-2 transition-colors hover:opacity-80",style:{backgroundColor:`${r.color}15`,color:r.color},children:[e("img",{src:r.icon,alt:r.title,className:"size-4",width:20,height:20}),e("span",{children:r.title})]},a))})]})}),e(g,{delay:.5,children:n("div",{className:"mt-8",children:[e("h3",{className:"mb-4 font-semibold",children:"สแกนเพื่อติดต่อ"}),e("div",{className:"rounded-xl bg-white p-4",children:e(B,{value:"https://adventex.com/contact",size:100,style:{height:"auto",maxWidth:"100%",width:"100%"},viewBox:"0 0 256 256"})})]})})]}),e("div",{className:"lg:col-span-2",children:e(g,{delay:.3,children:e("div",{className:"rounded-xl border bg-white p-6",children:e(T,{...o,children:n("form",{onSubmit:o.handleSubmit(s),className:"space-y-6",children:[n("div",{className:"grid gap-6 md:grid-cols-2",children:[e(x,{control:o.control,name:"name",render:({field:r})=>n(c,{children:[e(d,{children:"ชื่อ"}),e(p,{children:e(b,{placeholder:"กรุณากรอกชื่อ",...r})}),e(h,{})]})}),e(x,{control:o.control,name:"email",render:({field:r})=>n(c,{children:[e(d,{children:"อีเมล"}),e(p,{children:e(b,{placeholder:"example@email.com",...r})}),e(h,{})]})})]}),e(x,{control:o.control,name:"subject",render:({field:r})=>n(c,{children:[e(d,{children:"หัวข้อ"}),e(p,{children:e(b,{placeholder:"เรื่องที่ต้องการติดต่อ",...r})}),e(h,{})]})}),e(x,{control:o.control,name:"message",render:({field:r})=>n(c,{children:[e(d,{children:"ข้อความ"}),e(p,{children:e(F,{placeholder:"รายละเอียดที่ต้องการติดต่อ...",className:"min-h-[150px]",...r})}),e(h,{})]})}),n(P,{type:"submit",className:"w-full",children:[e(C,{className:"mr-2 size-4"}),"ส่งข้อความ"]})]})})})})})]})})};export{be as component};
