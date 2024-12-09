import { jsxs, jsx } from 'react/jsx-runtime';
import { Clock, Users, MapPin, Star, Activity, DollarSign, CalendarRange } from 'lucide-react';
import { f } from './badge-DPD-9gux.mjs';
import { $ as $e, E } from '../../index.mjs';
import { k, B, w, x, b, P, v, U, D, C } from './select-Bj-GuSd9.mjs';
import * as m from 'react';
import { isBefore, startOfToday, format } from 'date-fns';
import { E as E$1 } from './use-toast-CYhUVph2.mjs';
import { m as m$1 } from './calendar-BG4W8niy.mjs';
import 'class-variance-authority';
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

const M = ({ basePrice: n, maxGroupSize: c }) => {
  const [t, r] = m.useState(), [i, p] = m.useState("1"), { toast: o } = E$1(), u = parseInt(c.split(" ")[0]), g = () => {
    if (!t) {
      o({ title: "Select a Date", description: "Please select a travel date to continue.", variant: "destructive" });
      return;
    }
    o({ title: "Booking Initiated", description: `Your booking request for ${format(t, "PPP")} has been received.` });
  }, f = () => {
    const l = parseInt(i);
    let s = n * l;
    return l >= 4 && (s = s * 0.9), s.toFixed(2);
  };
  return jsx("div", { className: "space-y-4", children: jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [jsxs("div", { children: [jsx("label", { className: "mb-2 block text-sm font-medium", children: "Select Date" }), jsx(m$1, { mode: "single", selected: t, onSelect: r, disabled: (l) => isBefore(l, startOfToday()), className: "rounded-md border" })] }), jsxs("div", { className: "space-y-4", children: [jsxs("div", { children: [jsx("label", { className: "mb-2 block text-sm font-medium", children: "Number of Travelers" }), jsxs(P, { value: i, onValueChange: p, children: [jsx(v, { children: jsx(U, { placeholder: "Select travelers" }) }), jsx(D, { children: Array.from({ length: u }, (l, s) => jsxs(C, { value: (s + 1).toString(), children: [s + 1, " ", s === 0 ? "Person" : "People"] }, s + 1)) })] })] }), jsxs("div", { className: "rounded-lg bg-gray-50 p-4", children: [jsxs("div", { className: "mb-2 flex justify-between", children: [jsx("span", { children: "Base Price:" }), jsxs("span", { children: ["$", n, "/person"] })] }), jsxs("div", { className: "mb-2 flex justify-between", children: [jsx("span", { children: "Travelers:" }), jsxs("span", { children: ["\xD7 ", i] })] }), parseInt(i) >= 4 && jsxs("div", { className: "mb-2 flex justify-between text-green-600", children: [jsx("span", { children: "Group Discount:" }), jsx("span", { children: "-10%" })] }), jsx("div", { className: "mt-2 border-t pt-2", children: jsxs("div", { className: "flex justify-between font-bold", children: [jsx("span", { children: "Total:" }), jsxs("span", { children: ["$", f()] })] }) })] }), jsx(E, { className: "w-full", size: "lg", onClick: g, disabled: !t, children: "Book Now" }), jsx("p", { className: "text-sm text-muted-foreground", children: "* Free cancellation up to 24 hours before the tour" })] })] }) });
}, O = { 1: { title: "Bali Paradise Explorer: A Journey Through the Island of Gods", subtitle: "Discover the magic of Bali through our carefully curated 10-day adventure", coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", price: 2499, rating: 4.8, duration: "10 days", groupSize: "12 max", difficulty: "Easy", location: "Bali, Indonesia", sections: [{ title: "Journey Overview", content: "Embark on a transformative journey through Bali, where ancient traditions meet natural wonders. Our 10-day adventure takes you from pristine beaches to mystical temples, through emerald rice terraces, and into the heart of Balinese culture.", image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b" }, { title: "Cultural Immersion", content: "Experience the rich tapestry of Balinese culture through traditional dance performances, temple ceremonies, and authentic cooking classes. Learn the art of offering-making and participate in ancient rituals guided by local spiritual leaders.", image: "https://images.unsplash.com/photo-1604841940360-c6461033e060" }, { title: "Natural Wonders", content: "Trek through the stunning Tegalalang rice terraces, witness the sunrise from Mount Batur, and snorkel in the crystal-clear waters of Nusa Penida. Each day brings new adventures in Bali's diverse landscapes.", image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1" }], highlights: ["Sunrise trek to Mount Batur", "Traditional blessing ceremony at Tirta Empul", "Cooking class in Ubud", "Snorkeling at Nusa Penida", "Visit to ancient temples", "Rice terrace walking tour"], includes: ["Luxury villa accommodation", "Daily breakfast and select meals", "Professional English-speaking guide", "All entrance fees", "Private transportation", "Airport transfers"] } }, be = function() {
  const { blogId: c } = $e.useParams(), t = O[c];
  return t ? jsxs("div", { className: "min-h-screen bg-white", children: [jsxs("div", { className: "relative h-[60vh] min-h-[500px]", children: [jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url(${t.coverImage})` }, children: jsx("div", { className: "absolute inset-0 bg-black/40" }) }), jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: jsxs("div", { className: "container mx-auto px-4 text-center text-white", children: [jsx(f, { className: "mb-4", children: t.difficulty }), jsx("h1", { className: "mb-4 text-4xl font-bold md:text-5xl lg:text-6xl", children: t.title }), jsx("p", { className: "mx-auto max-w-3xl text-xl text-white/90 md:text-2xl", children: t.subtitle })] }) })] }), jsx("div", { className: "border-y bg-gray-50", children: jsx("div", { className: "container mx-auto px-4 py-6", children: jsxs("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(Clock, { className: "size-5 text-primary" }), jsxs("div", { children: [jsx("p", { className: "text-sm text-muted-foreground", children: "Duration" }), jsx("p", { className: "font-medium", children: t.duration })] })] }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(Users, { className: "size-5 text-primary" }), jsxs("div", { children: [jsx("p", { className: "text-sm text-muted-foreground", children: "Group Size" }), jsx("p", { className: "font-medium", children: t.groupSize })] })] }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(MapPin, { className: "size-5 text-primary" }), jsxs("div", { children: [jsx("p", { className: "text-sm text-muted-foreground", children: "Location" }), jsx("p", { className: "font-medium", children: t.location })] })] }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(Star, { className: "size-5 text-yellow-400" }), jsxs("div", { children: [jsx("p", { className: "text-sm text-muted-foreground", children: "Rating" }), jsxs("p", { className: "font-medium", children: [t.rating, " / 5.0"] })] })] })] }) }) }), jsx("div", { className: "container mx-auto px-4 py-12", children: jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-3", children: [jsxs("div", { className: "space-y-12 lg:col-span-2", children: [t.sections.map((r, i) => jsxs("div", { className: "space-y-6", children: [jsx("h2", { className: "text-2xl font-bold", children: r.title }), jsx("img", { src: r.image, alt: r.title, className: "h-[400px] w-full rounded-lg object-cover" }), jsx("p", { className: "leading-relaxed text-gray-600", children: r.content })] }, i)), jsxs("div", { className: "space-y-6", children: [jsx("h2", { className: "text-2xl font-bold", children: "Tour Highlights" }), jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: t.highlights.map((r, i) => jsxs("div", { className: "flex items-center gap-2", children: [jsx(Activity, { className: "size-5 text-primary" }), jsx("span", { children: r })] }, i)) })] }), jsxs("div", { className: "space-y-6", children: [jsx("h2", { className: "text-2xl font-bold", children: "What's Included" }), jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: t.includes.map((r, i) => jsxs("div", { className: "flex items-center gap-2", children: [jsx(DollarSign, { className: "size-5 text-primary" }), jsx("span", { children: r })] }, i)) })] })] }), jsx("div", { className: "lg:col-span-1", children: jsx("div", { className: "sticky top-24", children: jsxs("div", { className: "space-y-6 rounded-lg border bg-white p-6", children: [jsxs("div", { className: "text-center", children: [jsx("p", { className: "text-sm text-muted-foreground", children: "Starting from" }), jsxs("p", { className: "text-3xl font-bold", children: ["$", t.price] }), jsx("p", { className: "text-sm text-muted-foreground", children: "per person" })] }), jsxs(k, { children: [jsx(B, { asChild: true, children: jsx(E, { className: "w-full", size: "lg", children: "Book This Tour" }) }), jsxs(w, { className: "max-w-3xl", children: [jsx(x, { children: jsx(b, { children: "Book Your Tour" }) }), jsx(M, { basePrice: t.price, maxGroupSize: t.groupSize })] })] }), jsxs("div", { className: "text-sm text-muted-foreground", children: [jsxs("p", { className: "mb-2 flex items-center gap-2", children: [jsx(CalendarRange, { className: "size-4" }), "Free cancellation up to 24h before the tour"] }), jsxs("p", { className: "flex items-center gap-2", children: [jsx(Users, { className: "size-4" }), "Small groups or private tours available"] })] })] }) }) })] }) })] }) : jsx("div", { children: "Tour not found" });
};

export { be as component };
//# sourceMappingURL=_blogId-BxHXRZr1.mjs.map
