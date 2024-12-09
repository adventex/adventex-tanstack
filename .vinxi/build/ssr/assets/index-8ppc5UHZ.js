import{jsx as e,jsxs as t}from"react/jsx-runtime";import{c as u,a as g}from"./index-2e5SzYaF.js";import*as l from"react";import{Clock as f,Calendar as v,Search as x}from"lucide-react";import{B as c,g as N,I as C}from"./ssr-Dg2tEgjp.js";import{Link as y}from"@tanstack/react-router";import{B as b}from"./badge-DPD-9gux.js";import{C as w,d as E,a as B,e as S}from"./card-DkDznRDU.js";import"tiny-invariant";import"node:stream";import"h3";import"unctx";import"node:async_hooks";import"jsesc";import"isbot";import"react-dom/server";import"@tanstack/react-cross-context";import"clsx";import"tailwind-merge";import"@radix-ui/react-navigation-menu";import"class-variance-authority";import"@radix-ui/react-slot";import"@radix-ui/react-dialog";import"zod";import"@radix-ui/react-accordion";import"@radix-ui/react-checkbox";import"@radix-ui/react-label";import"@radix-ui/react-separator";import"@radix-ui/react-slider";const L=[{id:"1",title:"สำรวจสวรรค์บาหลี: การเดินทางผ่านเกาะแห่งเทพเจ้า",excerpt:"ค้นพบความมหัศจรรย์ของบาหลีผ่านการผจญภัย 10 วันที่คัดสรรมาอย่างพิถีพิถัน พาคุณไปตั้งแต่ชายหาดที่บริสุทธิ์ไปจนถึงวัดโบราณ",coverImage:"https://images.unsplash.com/photo-1537996194471-e657df975ab4",category:"จุดหมายปลายทาง",readTime:"อ่าน 5 นาที",publishDate:"2024-03-15",author:{name:"ซาร่า จอห์นสัน",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330"}},{id:"2",title:"วัฒนธรรมญี่ปุ่น: การผสมผสานระหว่างดั้งเดิมและสมัยใหม่",excerpt:"สัมผัสการผสมผสานที่ลงตัวระหว่างประเพณีโบราณและความมหัศจรรย์สมัยใหม่ในดินแดนอาทิตย์อุทัย",coverImage:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",category:"วัฒนธรรม",readTime:"อ่าน 4 นาที",publishDate:"2024-03-14",author:{name:"ไมเคิล เชน",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"}},{id:"3",title:"เกาะกรีก: สวรรค์แห่งทะเลเมดิเตอร์เรเนียน",excerpt:"การผจญภัยข้ามเกาะผ่านน้ำทะเลใสของทะเลอีเจียน สำรวจซากปรักหักพังโบราณและชายหาดที่สวยงาม",coverImage:"https://images.unsplash.com/photo-1533105079780-92b9be482077",category:"การผจญภัย",readTime:"อ่าน 6 นาที",publishDate:"2024-03-13",author:{name:"เอ็มม่า วิลสัน",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80"}}],D=({blog:a})=>e(w,{className:"overflow-hidden transition-shadow hover:shadow-lg",children:t("div",{className:"grid gap-6 md:grid-cols-2",children:[e("div",{className:"relative aspect-[16/9] md:aspect-auto",children:e("img",{src:a.coverImage,alt:a.title,className:"absolute inset-0 size-full object-cover"})}),t("div",{className:"flex flex-col p-6",children:[t(E,{className:"p-0",children:[t("div",{className:"mb-3 flex items-center gap-2",children:[e(b,{variant:"secondary",children:a.category}),t("div",{className:"flex items-center text-sm text-muted-foreground",children:[e(f,{className:"mr-1 size-4"}),a.readTime]})]}),e("h2",{className:"mb-2 text-2xl font-bold",children:a.title})]}),t(B,{className:"p-0",children:[e("p",{className:"mb-4 text-muted-foreground",children:a.excerpt}),t("div",{className:"flex items-center gap-3",children:[e("img",{src:a.author.avatar,alt:a.author.name,className:"size-10 rounded-full object-cover"}),t("div",{children:[e("p",{className:"font-medium",children:a.author.name}),t("div",{className:"flex items-center text-sm text-muted-foreground",children:[e(v,{className:"mr-1 size-4"}),new Intl.DateTimeFormat("th-TH",{month:"long",day:"numeric",year:"numeric"}).format(new Date(a.publishDate))]})]})]})]}),e(S,{className:"mt-6 p-0",children:e(c,{asChild:!0,children:e(y,{to:`/blogs/${a.id}`,children:"อ่านเพิ่มเติม"})})})]})]})}),I=[{id:"all",name:"บทความทั้งหมด"},{id:"destinations",name:"จุดหมายปลายทาง"},{id:"learning",name:"การเรียนรู้"},{id:"culture",name:"วัฒนธรรม"},{id:"tips",name:"เคล็ดลับการท่องเที่ยว"},{id:"food",name:"อาหารและการกิน"}],T=({selectedCategory:a,onSelectCategory:i})=>t("div",{className:"rounded-lg border bg-white p-6",children:[e("h2",{className:"mb-4 font-semibold",children:"หมวดหมู่"}),e("ul",{className:"space-y-2",children:I.map(s=>e("li",{children:e(c,{variant:a===s.id?"default":"ghost",className:"w-full justify-start",onClick:()=>i(s.id),children:s.name})},s.id))})]});async function z(){return L}const m=u({method:"GET"}).handler(g(j,"c_3fv3ai","$$function0"),()=>z()),le=function(){const[i,s]=l.useState(""),[o,n]=l.useState("all"),d=N.useLoaderData().filter(r=>{const h=r.title.toLowerCase().includes(i.toLowerCase())||r.excerpt.toLowerCase().includes(i.toLowerCase()),p=o==="all"||r.category.toLowerCase()===o.toLowerCase();return h&&p});return t("article",{className:"min-h-screen bg-gray-50",children:[e("section",{className:"border-b bg-white",children:t("div",{className:"container mx-auto px-4 py-16 text-center",children:[e("h1",{className:"mb-4 text-4xl font-bold",children:"เรื่องราวและข้อมูลเชิงลึกการท่องเที่ยว"}),e("p",{className:"mx-auto mb-8 max-w-[53ch] text-lg text-muted-foreground",children:"ค้นพบเคล็ดลับการท่องเที่ยว ข้อมูลเชิงลึกทางวัฒนธรรม และคู่มือแนะนำโดยละเอียด เพื่อช่วยคุณวางแผนการผจญภัยครั้งต่อไป"}),t("div",{className:"relative mx-auto max-w-lg",children:[e(x,{className:"absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"}),e(C,{placeholder:"\\u0E04\\u0E49\\u0E19\\u0E2B\\u0E32\\u0E1A\\u0E17\\u0E04\\u0E27\\u0E32\\u0E21...",className:"pl-9",value:i,onChange:r=>s(r.target.value)})]})]})}),e("section",{className:"container mx-auto px-4 py-12",children:t("div",{className:"grid grid-cols-1 gap-8 lg:grid-cols-4",children:[e("aside",{className:"lg:col-span-1",children:e("div",{className:"sticky top-24",children:e(T,{selectedCategory:o,onSelectCategory:n})})}),t("div",{className:"lg:col-span-3",children:[e("div",{className:"grid gap-8",children:d.map(r=>e(D,{blog:r},r.id))}),e("div",{className:"mt-12 text-center",children:e(c,{variant:"outline",size:"lg",children:"โหลดบทความเพิ่มเติม"})})]})]})})]})},me=async()=>await m();function j(a){return m.__executeServer(a)}export{j as $$function0,le as component,me as loader};