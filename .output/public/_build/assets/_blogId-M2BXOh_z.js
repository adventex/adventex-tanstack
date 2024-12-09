import{c as g,a as d,j as e,B as m,W as j,d as f}from"./client-B42ABy-e.js";import{B as v,C as N}from"./badge-BX8fJbc0.js";import{s as b,S as y,a as k,b as S,c as w,d as B,A as T,i as z,D,e as P,f as C,g as I,h as M}from"./select-Rv5xCkR_.js";import{u as E}from"./use-toast-58QX4mOB.js";import{h as R,j as A,i as $,U as o,S as G}from"./index-ByNaFnmF.js";import"./chevron-right-jr-OsRoB.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=g("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]),F=({basePrice:i,maxGroupSize:n})=>{const[s,a]=d.useState(),[t,x]=d.useState("1"),{toast:c}=E(),h=parseInt(n.split(" ")[0]),u=()=>{if(!s){c({title:"Select a Date",description:"Please select a travel date to continue.",variant:"destructive"});return}c({title:"Booking Initiated",description:`Your booking request for ${$(s,"PPP")} has been received.`})},p=()=>{const l=parseInt(t);let r=i*l;return l>=4&&(r=r*.9),r.toFixed(2)};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium",children:"Select Date"}),e.jsx(R,{mode:"single",selected:s,onSelect:a,disabled:l=>A(l,b()),className:"rounded-md border"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium",children:"Number of Travelers"}),e.jsxs(y,{value:t,onValueChange:x,children:[e.jsx(k,{children:e.jsx(S,{placeholder:"Select travelers"})}),e.jsx(w,{children:Array.from({length:h},(l,r)=>e.jsxs(B,{value:(r+1).toString(),children:[r+1," ",r===0?"Person":"People"]},r+1))})]})]}),e.jsxs("div",{className:"rounded-lg bg-gray-50 p-4",children:[e.jsxs("div",{className:"mb-2 flex justify-between",children:[e.jsx("span",{children:"Base Price:"}),e.jsxs("span",{children:["$",i,"/person"]})]}),e.jsxs("div",{className:"mb-2 flex justify-between",children:[e.jsx("span",{children:"Travelers:"}),e.jsxs("span",{children:["× ",t]})]}),parseInt(t)>=4&&e.jsxs("div",{className:"mb-2 flex justify-between text-green-600",children:[e.jsx("span",{children:"Group Discount:"}),e.jsx("span",{children:"-10%"})]}),e.jsx("div",{className:"mt-2 border-t pt-2",children:e.jsxs("div",{className:"flex justify-between font-bold",children:[e.jsx("span",{children:"Total:"}),e.jsxs("span",{children:["$",p()]})]})})]}),e.jsx(m,{className:"w-full",size:"lg",onClick:u,disabled:!s,children:"Book Now"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"* Free cancellation up to 24 hours before the tour"})]})]})})},H={1:{title:"Bali Paradise Explorer: A Journey Through the Island of Gods",subtitle:"Discover the magic of Bali through our carefully curated 10-day adventure",coverImage:"https://images.unsplash.com/photo-1537996194471-e657df975ab4",price:2499,rating:4.8,duration:"10 days",groupSize:"12 max",difficulty:"Easy",location:"Bali, Indonesia",sections:[{title:"Journey Overview",content:"Embark on a transformative journey through Bali, where ancient traditions meet natural wonders. Our 10-day adventure takes you from pristine beaches to mystical temples, through emerald rice terraces, and into the heart of Balinese culture.",image:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b"},{title:"Cultural Immersion",content:"Experience the rich tapestry of Balinese culture through traditional dance performances, temple ceremonies, and authentic cooking classes. Learn the art of offering-making and participate in ancient rituals guided by local spiritual leaders.",image:"https://images.unsplash.com/photo-1604841940360-c6461033e060"},{title:"Natural Wonders",content:"Trek through the stunning Tegalalang rice terraces, witness the sunrise from Mount Batur, and snorkel in the crystal-clear waters of Nusa Penida. Each day brings new adventures in Bali's diverse landscapes.",image:"https://images.unsplash.com/photo-1537953773345-d172ccf13cf1"}],highlights:["Sunrise trek to Mount Batur","Traditional blessing ceremony at Tirta Empul","Cooking class in Ubud","Snorkeling at Nusa Penida","Visit to ancient temples","Rice terrace walking tour"],includes:["Luxury villa accommodation","Daily breakfast and select meals","Professional English-speaking guide","All entrance fees","Private transportation","Airport transfers"]}},Y=function(){const{blogId:n}=j.useParams(),s=H[n];return s?e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsxs("div",{className:"relative h-[60vh] min-h-[500px]",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${s.coverImage})`},children:e.jsx("div",{className:"absolute inset-0 bg-black/40"})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"container mx-auto px-4 text-center text-white",children:[e.jsx(v,{className:"mb-4",children:s.difficulty}),e.jsx("h1",{className:"mb-4 text-4xl font-bold md:text-5xl lg:text-6xl",children:s.title}),e.jsx("p",{className:"mx-auto max-w-3xl text-xl text-white/90 md:text-2xl",children:s.subtitle})]})})]}),e.jsx("div",{className:"border-y bg-gray-50",children:e.jsx("div",{className:"container mx-auto px-4 py-6",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(N,{className:"size-5 text-primary"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Duration"}),e.jsx("p",{className:"font-medium",children:s.duration})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{className:"size-5 text-primary"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Group Size"}),e.jsx("p",{className:"font-medium",children:s.groupSize})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(f,{className:"size-5 text-primary"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Location"}),e.jsx("p",{className:"font-medium",children:s.location})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(G,{className:"size-5 text-yellow-400"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Rating"}),e.jsxs("p",{className:"font-medium",children:[s.rating," / 5.0"]})]})]})]})})}),e.jsx("div",{className:"container mx-auto px-4 py-12",children:e.jsxs("div",{className:"grid grid-cols-1 gap-12 lg:grid-cols-3",children:[e.jsxs("div",{className:"space-y-12 lg:col-span-2",children:[s.sections.map((a,t)=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:a.title}),e.jsx("img",{src:a.image,alt:a.title,className:"h-[400px] w-full rounded-lg object-cover"}),e.jsx("p",{className:"leading-relaxed text-gray-600",children:a.content})]},t)),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Tour Highlights"}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:s.highlights.map((a,t)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(T,{className:"size-5 text-primary"}),e.jsx("span",{children:a})]},t))})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"What's Included"}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:s.includes.map((a,t)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(z,{className:"size-5 text-primary"}),e.jsx("span",{children:a})]},t))})]})]}),e.jsx("div",{className:"lg:col-span-1",children:e.jsx("div",{className:"sticky top-24",children:e.jsxs("div",{className:"space-y-6 rounded-lg border bg-white p-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Starting from"}),e.jsxs("p",{className:"text-3xl font-bold",children:["$",s.price]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"per person"})]}),e.jsxs(D,{children:[e.jsx(P,{asChild:!0,children:e.jsx(m,{className:"w-full",size:"lg",children:"Book This Tour"})}),e.jsxs(C,{className:"max-w-3xl",children:[e.jsx(I,{children:e.jsx(M,{children:"Book Your Tour"})}),e.jsx(F,{basePrice:s.price,maxGroupSize:s.groupSize})]})]}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsxs("p",{className:"mb-2 flex items-center gap-2",children:[e.jsx(L,{className:"size-4"}),"Free cancellation up to 24h before the tour"]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(o,{className:"size-4"}),"Small groups or private tours available"]})]})]})})})]})})]}):e.jsx("div",{children:"Tour not found"})};export{Y as component};