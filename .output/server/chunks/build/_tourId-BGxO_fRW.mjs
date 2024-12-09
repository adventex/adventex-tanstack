import { jsx, jsxs } from 'react/jsx-runtime';
import { Activity, DollarSign, Heart, MapPin, Star, Clock, Users } from 'lucide-react';
import * as m$1 from 'react';
import * as d from '@radix-ui/react-tabs';
import { d as d$1, E } from '../../index.mjs';
import { f } from './badge-DPD-9gux.mjs';
import { k, B, w, x, b as b$1, P, v, U, D, C } from './select-Bj-GuSd9.mjs';
import { isBefore, startOfToday, format } from 'date-fns';
import { E as E$1 } from './use-toast-CYhUVph2.mjs';
import { m as m$2 } from './calendar-BG4W8niy.mjs';
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
import '@tanstack/react-router';
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
import '@radix-ui/react-select';
import 'date-fns/locale';

const Y = d.Root, b = m$1.forwardRef(({ className: s, ...a }, r) => jsx(d.List, { ref: r, className: d$1("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", s), ...a }));
b.displayName = d.List.displayName;
const u = m$1.forwardRef(({ className: s, ...a }, r) => jsx(d.Trigger, { ref: r, className: d$1("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", s), ...a }));
u.displayName = d.Trigger.displayName;
const g = m$1.forwardRef(({ className: s, ...a }, r) => jsx(d.Content, { ref: r, className: d$1("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", s), ...a }));
g.displayName = d.Content.displayName;
const q = ({ tourData: s }) => {
  const [a, r] = m$1.useState(0);
  return jsxs("div", { className: "space-y-4", children: [jsx("div", { className: "relative aspect-[4/3] overflow-hidden rounded-lg", children: jsx("img", { src: s.images[a], alt: s.title, className: "size-full object-cover" }) }), jsx("div", { className: "grid grid-cols-4 gap-4", children: s.images.map((n, t) => jsx("button", { onClick: () => r(t), className: d$1("relative aspect-[4/3] overflow-hidden rounded-lg", a === t && "ring-2 ring-primary"), children: jsx("img", { src: n, alt: `Gallery ${t + 1}`, className: "size-full object-cover" }) }, t)) })] });
}, M = ({ basePrice: s, maxGroupSize: a }) => {
  const [r, n] = m$1.useState(), [t, x] = m$1.useState("1"), { toast: v$1 } = E$1(), y = parseInt(a.split(" ")[0]), w = () => {
    if (!r) {
      v$1({ title: "Select a Date", description: "Please select a travel date to continue.", variant: "destructive" });
      return;
    }
    v$1({ title: "Booking Initiated", description: `Your booking request for ${format(r, "PPP")} has been received.` });
  }, T = () => {
    const o = parseInt(t);
    let l = s * o;
    return o >= 4 && (l = l * 0.9), l.toFixed(2);
  };
  return jsx("div", { className: "space-y-4", children: jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [jsxs("div", { children: [jsx("label", { className: "mb-2 block text-sm font-medium", children: "Select Date" }), jsx(m$2, { mode: "single", selected: r, onSelect: n, disabled: (o) => isBefore(o, startOfToday()), className: "rounded-md border" })] }), jsxs("div", { className: "space-y-4", children: [jsxs("div", { children: [jsx("label", { className: "mb-2 block text-sm font-medium", children: "Number of Travelers" }), jsxs(P, { value: t, onValueChange: x, children: [jsx(v, { children: jsx(U, { placeholder: "Select travelers" }) }), jsx(D, { children: Array.from({ length: y }, (o, l) => jsxs(C, { value: (l + 1).toString(), children: [l + 1, " ", l === 0 ? "Person" : "People"] }, l + 1)) })] })] }), jsxs("div", { className: "rounded-lg bg-gray-50 p-4", children: [jsxs("div", { className: "mb-2 flex justify-between", children: [jsx("span", { children: "Base Price:" }), jsxs("span", { children: ["$", s, "/person"] })] }), jsxs("div", { className: "mb-2 flex justify-between", children: [jsx("span", { children: "Travelers:" }), jsxs("span", { children: ["\xD7 ", t] })] }), parseInt(t) >= 4 && jsxs("div", { className: "mb-2 flex justify-between text-green-600", children: [jsx("span", { children: "Group Discount:" }), jsx("span", { children: "-10%" })] }), jsx("div", { className: "mt-2 border-t pt-2", children: jsxs("div", { className: "flex justify-between font-bold", children: [jsx("span", { children: "Total:" }), jsxs("span", { children: ["$", T()] })] }) })] }), jsx(E, { className: "w-full", size: "lg", onClick: w, disabled: !r, children: "Book Now" }), jsx("p", { className: "text-sm text-muted-foreground", children: "* Free cancellation up to 24 hours before the tour" })] })] }) });
}, _ = ({ tourData: s }) => {
  const [a, r] = m$1.useState(false);
  return jsxs("div", { className: "space-y-6", children: [jsxs("div", { children: [jsxs("div", { className: "mb-2 flex items-center justify-between", children: [jsx(f, { children: s.difficulty }), jsx(E, { variant: "ghost", size: "icon", onClick: () => r(!a), children: jsx(Heart, { className: d$1("size-5", a && "fill-red-500 text-red-500") }) })] }), jsx("h1", { className: "mb-2 text-3xl font-bold", children: s.title }), jsxs("div", { className: "mb-4 flex items-center gap-2 text-muted-foreground", children: [jsx(MapPin, { className: "size-4" }), jsx("span", { children: s.location })] }), jsxs("div", { className: "flex items-center gap-4 text-sm", children: [jsxs("div", { className: "flex items-center", children: [jsx(Star, { className: "mr-1 size-4 text-yellow-400" }), jsx("span", { children: s.rating }), jsxs("span", { className: "ml-1 text-muted-foreground", children: ["(", s.reviewCount, " reviews)"] })] }), jsxs("div", { className: "flex items-center", children: [jsx(Clock, { className: "mr-1 size-4" }), jsx("span", { children: s.duration })] }), jsxs("div", { className: "flex items-center", children: [jsx(Users, { className: "mr-1 size-4" }), jsx("span", { children: s.groupSize })] })] })] }), jsxs("div", { className: "rounded-lg border bg-white p-6", children: [jsxs("div", { className: "mb-4 flex items-center justify-between", children: [jsxs("div", { children: [jsx("p", { className: "text-sm text-muted-foreground", children: "Price per person" }), jsxs("p", { className: "text-3xl font-bold", children: ["$", s.price] })] }), jsxs(k, { children: [jsx(B, { asChild: true, children: jsx(E, { size: "lg", className: "px-8", children: "Book Now" }) }), jsxs(w, { className: "max-w-3xl", children: [jsx(x, { children: jsx(b$1, { children: "Book Your Tour" }) }), jsx(M, { basePrice: s.price, maxGroupSize: s.groupSize })] })] })] }), jsx("p", { className: "text-sm text-muted-foreground", children: "* Price may vary depending on selected date" })] }), jsx("div", { className: "prose max-w-none", children: jsx("p", { children: s.description }) }), jsxs("div", { children: [jsx("h3", { className: "mb-3 font-semibold", children: "Tour Highlights" }), jsx("ul", { className: "grid grid-cols-1 gap-2 md:grid-cols-2", children: s.highlights.map((n, t) => jsxs("li", { className: "flex items-center gap-2", children: [jsx(Activity, { className: "size-4 text-primary" }), jsx("span", { children: n })] }, t)) })] })] });
}, m = { id: "1", title: "Bali Paradise Explorer", description: "Experience the magic of Bali through this carefully curated 10-day adventure that takes you from pristine beaches to ancient temples, lush rainforests, and vibrant cultural sites.", price: 2499, rating: 4.8, reviewCount: 124, duration: "10 days", groupSize: "12 max", difficulty: "Easy", location: "Bali, Indonesia", images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4", "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b", "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1", "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8"], highlights: ["Visit the iconic Tanah Lot temple at sunset", "Trek through the stunning Tegalalang rice terraces", "Snorkel in crystal-clear waters of Nusa Penida", "Experience traditional Balinese dance performances", "Stay in luxury villas with private pools"], itinerary: [{ day: 1, title: "Arrival in Denpasar", description: "Welcome to Bali! Transfer to your luxury villa in Seminyak, followed by a welcome dinner.", activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"] }, { day: 2, title: "Exploring Ubud", description: "Discover the cultural heart of Bali with visits to ancient temples and art galleries.", activities: ["Temple visits", "Art gallery tour", "Traditional dance show"] }, { day: 3, title: "Rice Terraces & Waterfalls", description: "Trek through the famous Tegalalang rice terraces and visit hidden waterfalls.", activities: ["Rice terrace trek", "Waterfall swimming", "Local lunch"] }], included: ["Luxury accommodation", "Daily breakfast and select meals", "Professional English-speaking guide", "All entrance fees", "Private transportation", "Airport transfers"], excluded: ["International flights", "Travel insurance", "Personal expenses", "Optional activities"] }, Be = function() {
  return jsx("div", { className: "min-h-screen bg-gray-50", children: jsxs("div", { className: "container mx-auto px-4 py-8", children: [jsxs("div", { className: "mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2", children: [jsx(q, { tourData: m }), jsx(_, { tourData: m })] }), jsxs(Y, { defaultValue: "itinerary", className: "mt-12", children: [jsxs(b, { className: "w-full justify-start", children: [jsx(u, { value: "itinerary", children: "Itinerary" }), jsx(u, { value: "included", children: "What's Included" }), jsx(u, { value: "reviews", children: "Reviews" })] }), jsx(g, { value: "itinerary", className: "mt-6", children: jsx("div", { className: "space-y-8", children: m.itinerary.map((a) => jsxs("div", { className: "relative border-l-2 border-gray-200 pb-8 pl-8 last:pb-0", children: [jsx("div", { className: "absolute left-[-9px] top-0 size-4 rounded-full bg-primary" }), jsxs("div", { children: [jsxs("h3", { className: "mb-2 font-semibold", children: ["Day ", a.day, ": ", a.title] }), jsx("p", { className: "mb-4 text-muted-foreground", children: a.description }), jsx("ul", { className: "space-y-2", children: a.activities.map((r, n) => jsxs("li", { className: "flex items-center gap-2", children: [jsx(Activity, { className: "size-4 text-primary" }), jsx("span", { children: r })] }, n)) })] })] }, a.day)) }) }), jsx(g, { value: "included", className: "mt-6", children: jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [jsxs("div", { children: [jsxs("h3", { className: "mb-4 flex items-center gap-2 font-semibold", children: [jsx(DollarSign, { className: "size-5 text-primary" }), "What's Included"] }), jsx("ul", { className: "space-y-2", children: m.included.map((a, r) => jsxs("li", { className: "flex items-center gap-2", children: [jsx(Activity, { className: "size-4 text-green-500" }), jsx("span", { children: a })] }, r)) })] }), jsxs("div", { children: [jsxs("h3", { className: "mb-4 flex items-center gap-2 font-semibold", children: [jsx(DollarSign, { className: "size-5 text-primary" }), "What's Not Included"] }), jsx("ul", { className: "space-y-2", children: m.excluded.map((a, r) => jsxs("li", { className: "flex items-center gap-2", children: [jsx(Activity, { className: "size-4 text-red-500" }), jsx("span", { children: a })] }, r)) })] })] }) }), jsx(g, { value: "reviews", className: "mt-6", children: jsx("div", { className: "py-12 text-center", children: jsx("p", { className: "text-muted-foreground", children: "Reviews coming soon..." }) }) })] })] }) });
};

export { Be as component };
//# sourceMappingURL=_tourId-BGxO_fRW.mjs.map
