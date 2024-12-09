import { jsxs, jsx } from 'react/jsx-runtime';
import { O, Y } from './index-2e5SzYaF.mjs';
import * as m$1 from 'react';
import { Search, Clock, Calendar } from 'lucide-react';
import { C as Ce, A, E } from '../../index.mjs';
import { Link } from '@tanstack/react-router';
import { f } from './badge-DPD-9gux.mjs';
import { t, i, n, f as f$1 } from './card-DkDznRDU.mjs';
import 'tiny-invariant';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-aspect-ratio';
import 'motion/react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import '@radix-ui/react-dialog';
import '@radix-ui/react-accordion';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-label';
import '@radix-ui/react-separator';
import '@radix-ui/react-slider';
import 'zod';
import 'node:async_hooks';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';
import '@radix-ui/react-navigation-menu';

const L = [{ id: "1", title: "\u0E2A\u0E33\u0E23\u0E27\u0E08\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E1A\u0E32\u0E2B\u0E25\u0E35: \u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E40\u0E01\u0E32\u0E30\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E17\u0E1E\u0E40\u0E08\u0E49\u0E32", excerpt: "\u0E04\u0E49\u0E19\u0E1E\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E21\u0E2B\u0E31\u0E28\u0E08\u0E23\u0E23\u0E22\u0E4C\u0E02\u0E2D\u0E07\u0E1A\u0E32\u0E2B\u0E25\u0E35\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E1C\u0E08\u0E0D\u0E20\u0E31\u0E22 10 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E04\u0E31\u0E14\u0E2A\u0E23\u0E23\u0E21\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1E\u0E34\u0E16\u0E35\u0E1E\u0E34\u0E16\u0E31\u0E19 \u0E1E\u0E32\u0E04\u0E38\u0E13\u0E44\u0E1B\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E0A\u0E32\u0E22\u0E2B\u0E32\u0E14\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E44\u0E1B\u0E08\u0E19\u0E16\u0E36\u0E07\u0E27\u0E31\u0E14\u0E42\u0E1A\u0E23\u0E32\u0E13", coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", category: "\u0E08\u0E38\u0E14\u0E2B\u0E21\u0E32\u0E22\u0E1B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07", readTime: "\u0E2D\u0E48\u0E32\u0E19 5 \u0E19\u0E32\u0E17\u0E35", publishDate: "2024-03-15", author: { name: "\u0E0B\u0E32\u0E23\u0E48\u0E32 \u0E08\u0E2D\u0E2B\u0E4C\u0E19\u0E2A\u0E31\u0E19", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" } }, { id: "2", title: "\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E0D\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E19: \u0E01\u0E32\u0E23\u0E1C\u0E2A\u0E21\u0E1C\u0E2A\u0E32\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E14\u0E31\u0E49\u0E07\u0E40\u0E14\u0E34\u0E21\u0E41\u0E25\u0E30\u0E2A\u0E21\u0E31\u0E22\u0E43\u0E2B\u0E21\u0E48", excerpt: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E32\u0E23\u0E1C\u0E2A\u0E21\u0E1C\u0E2A\u0E32\u0E19\u0E17\u0E35\u0E48\u0E25\u0E07\u0E15\u0E31\u0E27\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E1E\u0E13\u0E35\u0E42\u0E1A\u0E23\u0E32\u0E13\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E21\u0E2B\u0E31\u0E28\u0E08\u0E23\u0E23\u0E22\u0E4C\u0E2A\u0E21\u0E31\u0E22\u0E43\u0E2B\u0E21\u0E48\u0E43\u0E19\u0E14\u0E34\u0E19\u0E41\u0E14\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E2D\u0E38\u0E17\u0E31\u0E22", coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", category: "\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21", readTime: "\u0E2D\u0E48\u0E32\u0E19 4 \u0E19\u0E32\u0E17\u0E35", publishDate: "2024-03-14", author: { name: "\u0E44\u0E21\u0E40\u0E04\u0E34\u0E25 \u0E40\u0E0A\u0E19", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" } }, { id: "3", title: "\u0E40\u0E01\u0E32\u0E30\u0E01\u0E23\u0E35\u0E01: \u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E17\u0E30\u0E40\u0E25\u0E40\u0E21\u0E14\u0E34\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E40\u0E23\u0E40\u0E19\u0E35\u0E22\u0E19", excerpt: "\u0E01\u0E32\u0E23\u0E1C\u0E08\u0E0D\u0E20\u0E31\u0E22\u0E02\u0E49\u0E32\u0E21\u0E40\u0E01\u0E32\u0E30\u0E1C\u0E48\u0E32\u0E19\u0E19\u0E49\u0E33\u0E17\u0E30\u0E40\u0E25\u0E43\u0E2A\u0E02\u0E2D\u0E07\u0E17\u0E30\u0E40\u0E25\u0E2D\u0E35\u0E40\u0E08\u0E35\u0E22\u0E19 \u0E2A\u0E33\u0E23\u0E27\u0E08\u0E0B\u0E32\u0E01\u0E1B\u0E23\u0E31\u0E01\u0E2B\u0E31\u0E01\u0E1E\u0E31\u0E07\u0E42\u0E1A\u0E23\u0E32\u0E13\u0E41\u0E25\u0E30\u0E0A\u0E32\u0E22\u0E2B\u0E32\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E27\u0E22\u0E07\u0E32\u0E21", coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077", category: "\u0E01\u0E32\u0E23\u0E1C\u0E08\u0E0D\u0E20\u0E31\u0E22", readTime: "\u0E2D\u0E48\u0E32\u0E19 6 \u0E19\u0E32\u0E17\u0E35", publishDate: "2024-03-13", author: { name: "\u0E40\u0E2D\u0E47\u0E21\u0E21\u0E48\u0E32 \u0E27\u0E34\u0E25\u0E2A\u0E31\u0E19", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" } }], D = ({ blog: a }) => jsx(t, { className: "overflow-hidden transition-shadow hover:shadow-lg", children: jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [jsx("div", { className: "relative aspect-[16/9] md:aspect-auto", children: jsx("img", { src: a.coverImage, alt: a.title, className: "absolute inset-0 size-full object-cover" }) }), jsxs("div", { className: "flex flex-col p-6", children: [jsxs(i, { className: "p-0", children: [jsxs("div", { className: "mb-3 flex items-center gap-2", children: [jsx(f, { variant: "secondary", children: a.category }), jsxs("div", { className: "flex items-center text-sm text-muted-foreground", children: [jsx(Clock, { className: "mr-1 size-4" }), a.readTime] })] }), jsx("h2", { className: "mb-2 text-2xl font-bold", children: a.title })] }), jsxs(n, { className: "p-0", children: [jsx("p", { className: "mb-4 text-muted-foreground", children: a.excerpt }), jsxs("div", { className: "flex items-center gap-3", children: [jsx("img", { src: a.author.avatar, alt: a.author.name, className: "size-10 rounded-full object-cover" }), jsxs("div", { children: [jsx("p", { className: "font-medium", children: a.author.name }), jsxs("div", { className: "flex items-center text-sm text-muted-foreground", children: [jsx(Calendar, { className: "mr-1 size-4" }), new Intl.DateTimeFormat("th-TH", { month: "long", day: "numeric", year: "numeric" }).format(new Date(a.publishDate))] })] })] })] }), jsx(f$1, { className: "mt-6 p-0", children: jsx(E, { asChild: true, children: jsx(Link, { to: `/blogs/${a.id}`, children: "\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21" }) }) })] })] }) }), I = [{ id: "all", name: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14" }, { id: "destinations", name: "\u0E08\u0E38\u0E14\u0E2B\u0E21\u0E32\u0E22\u0E1B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07" }, { id: "learning", name: "\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49" }, { id: "culture", name: "\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21" }, { id: "tips", name: "\u0E40\u0E04\u0E25\u0E47\u0E14\u0E25\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27" }, { id: "food", name: "\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E01\u0E34\u0E19" }], T = ({ selectedCategory: a, onSelectCategory: i }) => jsxs("div", { className: "rounded-lg border bg-white p-6", children: [jsx("h2", { className: "mb-4 font-semibold", children: "\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48" }), jsx("ul", { className: "space-y-2", children: I.map((s) => jsx("li", { children: jsx(E, { variant: a === s.id ? "default" : "ghost", className: "w-full justify-start", onClick: () => i(s.id), children: s.name }) }, s.id)) })] });
async function z() {
  return L;
}
const m = O({ method: "GET" }).handler(Y(j, "c_3fv3ai", "$$function0"), () => z()), le = function() {
  const [i, s] = m$1.useState(""), [o, n] = m$1.useState("all"), d = Ce.useLoaderData().filter((r) => {
    const h = r.title.toLowerCase().includes(i.toLowerCase()) || r.excerpt.toLowerCase().includes(i.toLowerCase()), p = o === "all" || r.category.toLowerCase() === o.toLowerCase();
    return h && p;
  });
  return jsxs("article", { className: "min-h-screen bg-gray-50", children: [jsx("section", { className: "border-b bg-white", children: jsxs("div", { className: "container mx-auto px-4 py-16 text-center", children: [jsx("h1", { className: "mb-4 text-4xl font-bold", children: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E27\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E0A\u0E34\u0E07\u0E25\u0E36\u0E01\u0E01\u0E32\u0E23\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27" }), jsx("p", { className: "mx-auto mb-8 max-w-[53ch] text-lg text-muted-foreground", children: "\u0E04\u0E49\u0E19\u0E1E\u0E1A\u0E40\u0E04\u0E25\u0E47\u0E14\u0E25\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E0A\u0E34\u0E07\u0E25\u0E36\u0E01\u0E17\u0E32\u0E07\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21 \u0E41\u0E25\u0E30\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E41\u0E19\u0E30\u0E19\u0E33\u0E42\u0E14\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E04\u0E38\u0E13\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E1C\u0E08\u0E0D\u0E20\u0E31\u0E22\u0E04\u0E23\u0E31\u0E49\u0E07\u0E15\u0E48\u0E2D\u0E44\u0E1B" }), jsxs("div", { className: "relative mx-auto max-w-lg", children: [jsx(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" }), jsx(A, { placeholder: "\\u0E04\\u0E49\\u0E19\\u0E2B\\u0E32\\u0E1A\\u0E17\\u0E04\\u0E27\\u0E32\\u0E21...", className: "pl-9", value: i, onChange: (r) => s(r.target.value) })] })] }) }), jsx("section", { className: "container mx-auto px-4 py-12", children: jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-4", children: [jsx("aside", { className: "lg:col-span-1", children: jsx("div", { className: "sticky top-24", children: jsx(T, { selectedCategory: o, onSelectCategory: n }) }) }), jsxs("div", { className: "lg:col-span-3", children: [jsx("div", { className: "grid gap-8", children: d.map((r) => jsx(D, { blog: r }, r.id)) }), jsx("div", { className: "mt-12 text-center", children: jsx(E, { variant: "outline", size: "lg", children: "\u0E42\u0E2B\u0E25\u0E14\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21" }) })] })] }) })] });
}, me = async () => await m();
function j(a) {
  return m.__executeServer(a);
}

export { j as $$function0, le as component, me as loader };
//# sourceMappingURL=index-8ppc5UHZ.mjs.map
