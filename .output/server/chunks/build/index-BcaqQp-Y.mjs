import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as m$1 from 'react';
import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { t, n, i, c, m as m$2, f as f$1 } from './card-DkDznRDU.mjs';
import { motion } from 'motion/react';
import { d, E as E$1, Z, A } from '../../index.mjs';
import { ArrowLeft, ArrowRight, Star, Clock, Users, CalendarIcon, Search } from 'lucide-react';
import { f } from './badge-DPD-9gux.mjs';
import { w } from './blur-fade-CEpGLh_7.mjs';
import te from 'embla-carousel-autoplay';
import re from 'embla-carousel-react';
import { addDays, format } from 'date-fns';
import { th } from 'date-fns/locale';
import { m as m$3 } from './calendar-BG4W8niy.mjs';
import * as y from '@radix-ui/react-popover';
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
import 'tiny-invariant';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-aspect-ratio';
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

const E = ({ text: a, colors: r = { first: "#9E7AFF", second: "#FE8BBB" }, className: s, sparklesCount: l = 10, ...o }) => {
  const [d$1, h] = useState([]);
  return useEffect(() => {
    const c = () => {
      const u = `${Math.random() * 100}%`, f = `${Math.random() * 100}%`, M = Math.random() > 0.5 ? r.first : r.second, N = Math.random() * 2, b = Math.random() * 1 + 0.3, v = Math.random() * 10 + 5;
      return { id: `${u}-${f}-${Date.now()}`, x: u, y: f, color: M, delay: N, scale: b, lifespan: v };
    }, k = () => {
      const u = Array.from({ length: l }, c);
      h(u);
    }, i = () => {
      h((u) => u.map((f) => f.lifespan <= 0 ? c() : { ...f, lifespan: f.lifespan - 0.1 }));
    };
    k();
    const j = setInterval(i, 100);
    return () => clearInterval(j);
  }, [r.first, r.second]), jsx("div", { className: d("text-6xl font-bold", s), ...o, style: { "--sparkles-first-color": `${r.first}`, "--sparkles-second-color": `${r.second}` }, children: jsxs("span", { className: "relative inline-block", children: [d$1.map((c) => jsx(ne, { ...c }, c.id)), jsx("strong", { children: a })] }) });
}, ne = ({ id: a, x: r, y: s, color: l, delay: o, scale: d }) => jsx(motion.svg, { className: "pointer-events-none absolute z-20", initial: { opacity: 0, left: r, top: s }, animate: { opacity: [0, 1, 0], scale: [0, d, 0], rotate: [75, 120, 150] }, transition: { duration: 0.8, repeat: 1 / 0, delay: o }, width: "21", height: "21", viewBox: "0 0 21 21", children: jsx("path", { d: "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z", fill: l }) }, a), m = [{ name: "HARBIN", image: "/images/city/harbin.jpg", href: "/destinations/harbin", description: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E40\u0E17\u0E28\u0E01\u0E32\u0E25\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E25\u0E01\u0E41\u0E25\u0E30\u0E14\u0E34\u0E19\u0E41\u0E14\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E19\u0E32\u0E27\u0E40\u0E22\u0E47\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E0A\u0E21\u0E1B\u0E23\u0E30\u0E15\u0E34\u0E21\u0E32\u0E01\u0E23\u0E23\u0E21\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E27\u0E22\u0E07\u0E32\u0E21\u0E15\u0E23\u0E30\u0E01\u0E32\u0E23\u0E15\u0E32" }, { name: "SHANGHAI", image: "/images/city/shanghai.jpg", href: "/destinations/shanghai", description: "\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22\u0E17\u0E35\u0E48\u0E1C\u0E2A\u0E21\u0E1C\u0E2A\u0E32\u0E19\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01\u0E41\u0E25\u0E30\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01 \u0E40\u0E21\u0E37\u0E2D\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E15\u0E36\u0E01\u0E23\u0E30\u0E1F\u0E49\u0E32\u0E41\u0E25\u0E30\u0E22\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E25\u0E01" }, { name: "CHENGDU", image: "/images/city/chengdu.jpg", href: "/destinations/chengdu", description: "\u0E1A\u0E49\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E35\u0E41\u0E1E\u0E19\u0E14\u0E49\u0E32\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E41\u0E25\u0E30\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E40\u0E2A\u0E09\u0E27\u0E19\u0E23\u0E2A\u0E08\u0E31\u0E14\u0E08\u0E49\u0E32\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E27\u0E34\u0E16\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E2D\u0E19\u0E04\u0E25\u0E32\u0E22\u0E41\u0E25\u0E30\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E2D\u0E01\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C" }, { name: "BEIJING", image: "/images/city/beijing.jpg", href: "/destinations/beijing", description: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2B\u0E25\u0E27\u0E07\u0E40\u0E01\u0E48\u0E32\u0E41\u0E01\u0E48\u0E17\u0E35\u0E48\u0E40\u0E15\u0E47\u0E21\u0E44\u0E1B\u0E14\u0E49\u0E27\u0E22\u0E21\u0E23\u0E14\u0E01\u0E17\u0E32\u0E07\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21 \u0E01\u0E33\u0E41\u0E1E\u0E07\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E08\u0E35\u0E19 \u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E27\u0E31\u0E07\u0E15\u0E49\u0E2D\u0E07\u0E2B\u0E49\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E2D\u0E31\u0E19\u0E22\u0E32\u0E27\u0E19\u0E32\u0E19" }, { name: "GUANGZHOU", image: "/images/city/guangzhou.jpg", href: "/destinations/guangzhou", description: "\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E2A\u0E39\u0E48\u0E08\u0E35\u0E19\u0E15\u0E2D\u0E19\u0E43\u0E15\u0E49\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E01\u0E27\u0E32\u0E07\u0E15\u0E38\u0E49\u0E07\u0E23\u0E2A\u0E40\u0E25\u0E34\u0E28 \u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E04\u0E36\u0E01\u0E04\u0E31\u0E01 \u0E41\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E1C\u0E2A\u0E21\u0E1C\u0E2A\u0E32\u0E19" }, { name: "CHONGQING", image: "/images/city/chongqing.jpg", href: "/destinations/chongqing", description: "\u0E19\u0E04\u0E23\u0E20\u0E39\u0E40\u0E02\u0E32\u0E17\u0E35\u0E48\u0E21\u0E35\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E21\u0E49\u0E2D\u0E44\u0E1F\u0E41\u0E25\u0E30\u0E25\u0E48\u0E2D\u0E07\u0E40\u0E23\u0E37\u0E2D\u0E41\u0E21\u0E48\u0E19\u0E49\u0E33\u0E41\u0E22\u0E07\u0E0B\u0E35 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E27\u0E34\u0E27\u0E15\u0E36\u0E01\u0E23\u0E30\u0E1F\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E31\u0E49\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E48\u0E32\u0E21\u0E01\u0E25\u0E32\u0E07\u0E20\u0E39\u0E21\u0E34\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E2D\u0E01\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C" }], oe = () => jsxs("section", { className: "py-12", children: [jsxs("div", { className: "mb-8 grid gap-8 text-center", children: [jsx(E, { text: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21", className: "text-6xl font-medium leading-none" }), jsx("p", { className: "mx-auto max-w-2xl text-pretty text-lg text-muted-foreground", children: "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E19\u0E31\u0E01\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E08\u0E35\u0E19\u0E21\u0E35\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21 \u0E17\u0E35\u0E48\u0E08\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E22\u0E34\u0E48\u0E07\u0E43\u0E2B\u0E0D\u0E48\u0E41\u0E25\u0E30\u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07" })] }), jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-6", children: [jsxs("div", { className: "grid gap-4 md:col-span-6", children: [jsx(Link, { to: m[0].href, children: jsx(t, { className: "group overflow-hidden", children: jsxs(n, { className: "relative aspect-[16/9] p-0 sm:aspect-[3/2]", children: [jsx("img", { src: m[0].image, alt: m[0].name, className: "size-full object-cover transition-transform duration-300 group-hover:scale-105" }), jsx("div", { className: "absolute inset-0 bg-black/40" }), jsx("div", { className: "absolute inset-x-0 bottom-0 p-4 text-white", children: jsx("h3", { className: "mb-1 font-semibold", children: m[0].name }) })] }) }) }), jsx("div", { className: "grid grid-cols-2 gap-4", children: m.slice(1, 3).map((a) => jsx(Link, { href: a.href, children: jsx(t, { className: "group overflow-hidden", children: jsx(n, { className: "relative p-0", children: jsxs("div", { className: "relative aspect-square", children: [jsx("img", { src: a.image, alt: a.name, className: "size-full object-cover transition-transform duration-300 group-hover:scale-105" }), jsx("div", { className: "absolute inset-0 bg-black/40" }), jsx("div", { className: "absolute inset-x-0 bottom-0 p-4 text-white", children: jsx("h3", { className: "mb-1 font-semibold", children: a.name }) })] }) }) }) }, a.name)) })] }), jsxs("div", { className: "grid h-full grid-cols-2 gap-4 md:col-span-6", children: [jsx(Link, { href: m[3].href, className: "h-full", children: jsx(t, { className: "group h-full overflow-hidden", children: jsx(n, { className: "relative h-full p-0", children: jsxs("div", { className: "relative h-full", children: [jsx("img", { src: m[3].image, alt: m[3].name, className: "size-full object-cover transition-transform duration-300 group-hover:scale-105" }), jsx("div", { className: "absolute inset-0 bg-black/40" }), jsx("div", { className: "absolute inset-x-0 bottom-0 p-4 text-white", children: jsx("h3", { className: "mb-1 font-semibold", children: m[3].name }) })] }) }) }) }), jsx("div", { className: "grid h-full gap-4", children: [m[4], m[5]].map((a) => jsx(Link, { href: a.href, className: "h-full", children: jsx(t, { className: "group h-full overflow-hidden", children: jsx(n, { className: "relative h-full p-0", children: jsxs("div", { className: "relative h-full", children: [jsx("img", { src: a.image, alt: a.name, className: "size-full object-cover transition-transform duration-300 group-hover:scale-105" }), jsx("div", { className: "absolute inset-0 bg-black/40" }), jsx("div", { className: "absolute inset-x-0 bottom-0 p-4 text-white", children: jsx("h3", { className: "mb-1 font-semibold", children: a.name }) })] }) }) }) }, a.name)) })] })] })] }), ce = [{ id: 1, title: "\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E27\u0E23\u0E4C", description: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", price: 2499, rating: 4.8, duration: "10 days", groupSize: "12 max", featured: true }, { id: 2, title: "\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E27\u0E23\u0E4C", description: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", price: 3299, rating: 4.9, duration: "12 days", groupSize: "10 max", featured: true }, { id: 3, title: "\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E27\u0E23\u0E4C", description: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077", price: 1999, rating: 4.7, duration: "8 days", groupSize: "15 max", featured: true }], de = () => jsxs("section", { children: [jsxs("div", { className: "mb-8 grid gap-8 text-center", children: [jsx(E, { text: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E22\u0E2D\u0E14\u0E2E\u0E34\u0E15", className: "text-6xl font-medium leading-none" }), jsx("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E19\u0E31\u0E01\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E08\u0E35\u0E19\u0E21\u0E35\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21 \u0E17\u0E35\u0E48\u0E08\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E22\u0E34\u0E48\u0E07\u0E43\u0E2B\u0E0D\u0E48\u0E41\u0E25\u0E30\u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07" })] }), jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3", children: ce.map((a) => jsxs(t, { className: "group transition-shadow hover:shadow-lg", children: [jsxs("div", { className: "relative overflow-hidden", children: [jsx("img", { src: a.image, alt: a.title, className: "h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" }), jsx(f, { className: "absolute right-4 top-4", children: "\u0E22\u0E2D\u0E14\u0E2E\u0E34\u0E15" })] }), jsxs(i, { children: [jsx(c, { className: "text-xl", children: a.title }), jsx(m$2, { children: a.description })] }), jsxs(n, { children: [jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-3 sm:gap-4", children: [jsxs("div", { className: "flex items-center", children: [jsx(Star, { className: "mr-1 size-4 text-yellow-400" }), jsx("span", { children: a.rating })] }), jsxs("div", { className: "flex items-center", children: [jsx(Clock, { className: "mr-1 size-4" }), jsx("span", { children: a.duration })] }), jsxs("div", { className: "flex items-center", children: [jsx(Users, { className: "mr-1 size-4" }), jsx("span", { children: a.groupSize })] })] }), jsxs("p", { className: "text-xl font-bold sm:text-2xl", children: ["\u0E3F", a.price, jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "/\u0E04\u0E19" })] })] }), jsx(f$1, { children: jsx(E$1, { className: "w-full", children: "\u0E08\u0E2D\u0E07\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08" }) })] }, a.id)) })] }), me = () => {
  const a = Array.from({ length: 9 }, (r, s) => ({ url: `https://picsum.photos/seed/${s + 1}/${s % 2 === 0 ? "800/600" : "600/800"}`, isLandscape: s % 2 === 0 }));
  return jsxs("section", { children: [jsx("div", { className: "mb-12 text-center", children: jsx("h2", { className: "mb-4 text-3xl font-bold", children: "\u0E41\u0E01\u0E25\u0E25\u0E2D\u0E23\u0E35\u0E48" }) }), jsx("div", { className: "columns-2 gap-4 sm:columns-3", children: a.map(({ url: r, isLandscape: s }, l) => jsx(w, { delay: 0.25 + l * 0.05, inView: true, children: jsx("img", { className: "mb-4 size-full rounded-lg object-contain", src: r, height: s ? 600 : 800, width: s ? 800 : 600, alt: `Travel moment ${l + 1}` }) }, r)) })] });
}, D = m$1.createContext(null);
function S() {
  const a = m$1.useContext(D);
  if (!a) throw new Error("useCarousel must be used within a <Carousel />");
  return a;
}
const F = m$1.forwardRef(({ orientation: a = "horizontal", opts: r, setApi: s, plugins: l, className: o, children: d$1, ...h }, c) => {
  const [k, i] = re({ ...r, axis: a === "horizontal" ? "x" : "y" }, l), [j, u] = m$1.useState(false), [f, M] = m$1.useState(false), N = m$1.useCallback((g) => {
    g && (u(g.canScrollPrev()), M(g.canScrollNext()));
  }, []), b = m$1.useCallback(() => {
    i == null ? void 0 : i.scrollPrev();
  }, [i]), v = m$1.useCallback(() => {
    i == null ? void 0 : i.scrollNext();
  }, [i]), A = m$1.useCallback((g) => {
    g.key === "ArrowLeft" ? (g.preventDefault(), b()) : g.key === "ArrowRight" && (g.preventDefault(), v());
  }, [b, v]);
  return m$1.useEffect(() => {
    !i || !s || s(i);
  }, [i, s]), m$1.useEffect(() => {
    if (i) return N(i), i.on("reInit", N), i.on("select", N), () => {
      i == null ? void 0 : i.off("select", N);
    };
  }, [i, N]), jsx(D.Provider, { value: { carouselRef: k, api: i, opts: r, orientation: a || ((r == null ? void 0 : r.axis) === "y" ? "vertical" : "horizontal"), scrollPrev: b, scrollNext: v, canScrollPrev: j, canScrollNext: f }, children: jsx("div", { ref: c, onKeyDownCapture: A, className: d("relative", o), role: "region", "aria-roledescription": "carousel", ...h, children: d$1 }) });
});
F.displayName = "Carousel";
const R = m$1.forwardRef(({ className: a, ...r }, s) => {
  const { carouselRef: l, orientation: o } = S();
  return jsx("div", { ref: l, className: "overflow-hidden", children: jsx("div", { ref: s, className: d("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", a), ...r }) });
});
R.displayName = "CarouselContent";
const W = m$1.forwardRef(({ className: a, ...r }, s) => {
  const { orientation: l } = S();
  return jsx("div", { ref: s, role: "group", "aria-roledescription": "slide", className: d("min-w-0 shrink-0 grow-0 basis-full", l === "horizontal" ? "pl-4" : "pt-4", a), ...r });
});
W.displayName = "CarouselItem";
const he = m$1.forwardRef(({ className: a, variant: r = "outline", size: s = "icon", ...l }, o) => {
  const { orientation: d$1, scrollPrev: h, canScrollPrev: c } = S();
  return jsxs(E$1, { ref: o, variant: r, size: s, className: d("absolute h-8 w-8 rounded-full", d$1 === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", a), disabled: !c, onClick: h, ...l, children: [jsx(ArrowLeft, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Previous slide" })] });
});
he.displayName = "CarouselPrevious";
const pe = m$1.forwardRef(({ className: a, variant: r = "outline", size: s = "icon", ...l }, o) => {
  const { orientation: d$1, scrollNext: h, canScrollNext: c } = S();
  return jsxs(E$1, { ref: o, variant: r, size: s, className: d("absolute h-8 w-8 rounded-full", d$1 === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", a), disabled: !c, onClick: h, ...l, children: [jsx(ArrowRight, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Next slide" })] });
});
pe.displayName = "CarouselNext";
function ue() {
  const [a, r] = m$1.useState(), [s, l] = m$1.useState(0), o = m$1.useRef(te({ delay: 2e3, stopOnInteraction: true }));
  m$1.useEffect(() => {
    a && a.on("select", () => {
      l(a.selectedScrollSnap());
    });
  }, [a]);
  const d$1 = ["https://cdn.weon.website/WOW/8546/MainSlider/33027.jpg?v=23", "https://cdn.weon.website/WOW/8546/MainSlider/33329.jpg?v=46", "https://cdn.weon.website/WOW/8546/MainSlider/32655.jpg?v=18", "https://cdn.weon.website/WOW/8546/MainSlider/33027.jpg?v=23", "https://cdn.weon.website/WOW/8546/MainSlider/33329.jpg?v=46", "https://cdn.weon.website/WOW/8546/MainSlider/32655.jpg?v=18"];
  return jsx("section", { children: jsx(F, { plugins: [o.current], onMouseEnter: o.current.stop, onMouseLeave: o.current.reset, setApi: r, children: jsx(R, { children: d$1.map((h, c) => jsxs(W, { className: "relative", children: [jsx("img", { src: h, alt: `Slide ${c + 1}`, className: "size-full rounded-lg object-contain", loading: c === 0 ? "eager" : "lazy" }), jsx("div", { className: "absolute bottom-2 left-1/2 flex -translate-x-1/2 justify-center gap-2", children: d$1.map((k, i) => jsx("button", { onClick: () => a == null ? void 0 : a.scrollTo(i), className: d("h-2 rounded-full transition-all", s === i ? "w-8 bg-white" : "w-2 bg-white/50"), "aria-label": `Go to slide ${i + 1}` }, i)) })] }, c)) }) }) });
}
const fe = y.Root, ge = y.Trigger, T = m$1.forwardRef(({ className: a, align: r = "center", sideOffset: s = 4, ...l }, o) => jsx(y.Portal, { children: jsx(y.Content, { ref: o, align: r, sideOffset: s, className: d("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a), ...l }) }));
T.displayName = y.Content.displayName;
function Ne({ borderRadius: a = 8, borderWidth: r = 1, duration: s = 14, color: l = "#000000", className: o, children: d$1 }) {
  return jsxs("div", { style: { "--border-radius": `${a}px` }, className: d("relative min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] bg-white p-3 text-black dark:bg-black dark:text-white", o), children: [jsx("div", { style: { "--border-width": `${r}px`, "--border-radius": `${a}px`, "--duration": `${s}s`, "--mask-linear-gradient": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", "--background-radial-gradient": `radial-gradient(transparent,transparent, ${l instanceof Array ? l.join(",") : l},transparent,transparent)` }, className: 'before:bg-shine-size pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:![mask-composite:exclude] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine' }), d$1] });
}
const be = () => {
  const [a, r] = m$1.useState({ from: /* @__PURE__ */ new Date(), to: addDays(/* @__PURE__ */ new Date(), 20) }), s = (l) => format(l, "dd MMMM", { locale: th });
  return jsx(Ne, { className: "relative z-10 size-full overflow-hidden rounded-lg border bg-background p-4 sm:p-6 md:p-8", color: ["#A07CFE", "#FE8FB5", "#FFBE7B"], children: jsxs("div", { className: "grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [jsxs("div", { className: "space-y-2", children: [jsx(Z, { className: "block text-sm font-medium", children: "\u0E1B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07" }), jsx(A, { placeholder: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E1B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07", className: "w-full bg-white/90" })] }), jsxs("div", { className: "space-y-2", children: [jsx(Z, { className: "block text-sm font-medium", children: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E27\u0E23\u0E4C" }), jsx(A, { placeholder: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E27\u0E23\u0E4C", className: "w-full bg-white/90" })] }), jsxs("div", { className: "space-y-2", children: [jsx(Z, { className: "block text-sm font-medium", children: "\u0E27\u0E31\u0E19\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07" }), jsx("div", { className: "grid gap-2", children: jsxs(fe, { children: [jsx(ge, { asChild: true, children: jsxs(E$1, { id: "date", variant: "outline", className: d("w-full justify-start text-left font-normal", !a && "text-muted-foreground"), children: [jsx(CalendarIcon, {}), (a == null ? void 0 : a.from) ? a.to ? jsxs(Fragment, { children: [s(a.from), " - ", s(a.to)] }) : s(a.from) : jsx("span", { children: "\u0E40\u0E25\u0E37\u0E2D\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48" })] }) }), jsx(T, { className: "w-auto p-0", align: "start", children: jsx(m$3, { initialFocus: true, mode: "range", defaultMonth: a == null ? void 0 : a.from, selected: a, onSelect: r, numberOfMonths: 2, locale: th }) })] }) })] }), jsx("div", { className: "flex items-end", children: jsxs(E$1, { className: "w-full", size: "lg", children: [jsx(Search, { className: "mr-2 size-4" }), " \u0E04\u0E49\u0E19\u0E2B\u0E32"] }) })] }) });
}, ve = [{ id: 1, name: "Park Taeyang", role: "", text: "\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E19\u0E35\u0E49\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E21\u0E32\u0E01 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E21\u0E35\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E27\u0E22\u0E07\u0E32\u0E21\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22\u0E43\u0E2B\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E01 \u0E41\u0E25\u0E30\u0E22\u0E31\u0E07\u0E0A\u0E48\u0E27\u0E22\u0E09\u0E31\u0E19\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E08\u0E38\u0E14\u0E2B\u0E21\u0E32\u0E22\u0E1B\u0E25\u0E32\u0E22\u0E17\u0E32\u0E07\u0E17\u0E35\u0E48\u0E19\u0E48\u0E32\u0E2A\u0E19\u0E43\u0E08\u0E44\u0E14\u0E49\u0E14\u0E35\u0E21\u0E32\u0E01 \u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E01\u0E47\u0E14\u0E35\u0E21\u0E32\u0E01 \u0E09\u0E31\u0E19\u0E08\u0E36\u0E07\u0E0A\u0E2D\u0E1A\u0E43\u0E0A\u0E49 Adventex \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E09\u0E31\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E01\u0E31\u0E1A\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E23\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", rating: 5 }, { id: 2, name: "Alex Thompson", role: "", text: "\u0E09\u0E31\u0E19\u0E43\u0E0A\u0E49 Adventex \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1C\u0E08\u0E0D\u0E20\u0E31\u0E22\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19 \u0E41\u0E25\u0E30\u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E1B\u0E23\u0E30\u0E17\u0E31\u0E1A\u0E43\u0E08\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E43\u0E2A\u0E48\u0E43\u0E08\u0E43\u0E19\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E21\u0E32\u0E01 \u0E44\u0E01\u0E14\u0E4C\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19\u0E17\u0E35\u0E48\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19\u0E14\u0E49\u0E27\u0E22\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E07\u0E43\u0E2B\u0E25\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E48\u0E07\u0E1B\u0E31\u0E19\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", rating: 5 }, { id: 3, name: "Sofia Martinez", role: "", text: "\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E2B\u0E49 Adventex \u0E41\u0E15\u0E01\u0E15\u0E48\u0E32\u0E07\u0E04\u0E37\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E21\u0E38\u0E48\u0E07\u0E21\u0E31\u0E48\u0E19\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E17\u0E49\u0E08\u0E23\u0E34\u0E07 \u0E17\u0E38\u0E01\u0E17\u0E23\u0E34\u0E1B\u0E17\u0E35\u0E48\u0E09\u0E31\u0E19\u0E08\u0E2D\u0E07\u0E01\u0E31\u0E1A\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E2A\u0E23\u0E23\u0E21\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E14\u0E35 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E09\u0E31\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E37\u0E48\u0E21\u0E14\u0E48\u0E33\u0E44\u0E1B\u0E01\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E1E\u0E13\u0E35\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E15\u0E47\u0E21\u0E17\u0E35\u0E48 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E17\u0E31\u0E49\u0E07\u0E44\u0E14\u0E49\u0E1E\u0E31\u0E01\u0E43\u0E19\u0E17\u0E35\u0E48\u0E1E\u0E31\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E14\u0E27\u0E01\u0E2A\u0E1A\u0E32\u0E22.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80", rating: 5 }], xe = () => jsxs("section", { children: [jsxs("div", { className: "mb-12", children: [jsx("p", { className: "mb-4 font-semibold uppercase tracking-wide text-primary", children: "\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32\u0E1E\u0E39\u0E14" }), jsxs("h2", { className: "mb-6 text-4xl font-bold md:text-5xl", children: ["\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32", jsx("br", {}), "\u0E1E\u0E39\u0E14\u0E16\u0E36\u0E07\u0E40\u0E23\u0E32\u0E22\u0E31\u0E07\u0E44\u0E07\u0E1A\u0E49\u0E32\u0E07"] })] }), jsx("div", { className: "grid gap-8 md:grid-cols-3", children: ve.map((a, r) => jsx(w, { delay: 0.1 * r, children: jsxs("div", { className: "relative rounded-2xl bg-white p-6 shadow-lg", children: [jsx("div", { className: "absolute -right-2 -top-2 size-4 text-primary", children: jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "size-full", children: jsx("path", { d: "M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z" }) }) }), jsx("div", { className: "absolute -left-2 -top-2 size-4 text-teal-500", children: jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "size-full", children: jsx("path", { d: "M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z" }) }) }), jsxs("div", { className: "relative", children: [jsx("div", { className: "mb-6", children: jsxs("p", { className: "leading-relaxed text-gray-600", children: ['"', a.text, '"'] }) }), jsxs("div", { className: "flex items-center gap-4", children: [jsxs("div", { className: "relative", children: [jsx("div", { className: "size-16 overflow-hidden rounded-full", children: jsx("img", { src: a.image, alt: a.name, className: "size-full object-cover" }) }), jsx("div", { className: "absolute -bottom-2 -right-2 rounded-full bg-teal-500 p-1.5", children: jsx("svg", { className: "size-4 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" }) }) })] }), jsxs("div", { children: [jsx("h4", { className: "text-lg font-semibold", children: a.name }), jsx("p", { className: "text-gray-500", children: a.role }), jsx("div", { className: "mt-1 flex gap-0.5", children: [...Array(a.rating)].map((s, l) => jsx(Star, { className: "size-4 fill-yellow-400 text-yellow-400" }, l)) })] })] })] })] }) }, a.id)) })] }), ra = function() {
  return jsxs("article", { className: "container mx-auto grid gap-8 px-4 py-8 lg:gap-16", children: [jsx(ue, {}), jsx(be, {}), jsx(oe, {}), jsx(de, {}), jsx(xe, {}), jsx(me, {})] });
};

export { ra as component };
//# sourceMappingURL=index-BcaqQp-Y.mjs.map
