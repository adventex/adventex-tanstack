import { jsx, jsxs } from 'react/jsx-runtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useForm, FormProvider, Controller, useFormContext } from 'react-hook-form';
import B from 'react-qr-code';
import * as l from 'zod';
import { E as E$1 } from './use-toast-CYhUVph2.mjs';
import { d as d$1, Z, A, E as E$2 } from '../../index.mjs';
import * as m from 'react';
import { Slot } from '@radix-ui/react-slot';
import { w } from './blur-fade-CEpGLh_7.mjs';
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
import 'class-variance-authority';
import '@radix-ui/react-dialog';
import '@radix-ui/react-accordion';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-label';
import '@radix-ui/react-separator';
import '@radix-ui/react-slider';
import 'node:async_hooks';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';
import '@radix-ui/react-navigation-menu';

const T = FormProvider, N = m.createContext({}), x = ({ ...t }) => jsx(N.Provider, { value: { name: t.name }, children: jsx(Controller, { ...t }) }), v = () => {
  const t = m.useContext(N), i = m.useContext(y), { getFieldState: o, formState: s } = useFormContext(), r = o(t.name, s);
  if (!t) throw new Error("useFormField should be used within <FormField>");
  const { id: a } = i;
  return { id: a, name: t.name, formItemId: `${a}-form-item`, formDescriptionId: `${a}-form-item-description`, formMessageId: `${a}-form-item-message`, ...r };
}, y = m.createContext({}), c = m.forwardRef(({ className: t, ...i }, o) => {
  const s = m.useId();
  return jsx(y.Provider, { value: { id: s }, children: jsx("div", { ref: o, className: d$1("space-y-2", t), ...i }) });
});
c.displayName = "FormItem";
const d = m.forwardRef(({ className: t, ...i }, o) => {
  const { error: s, formItemId: r } = v();
  return jsx(Z, { ref: o, className: d$1(s && "text-destructive", t), htmlFor: r, ...i });
});
d.displayName = "FormLabel";
const p = m.forwardRef(({ ...t }, i) => {
  const { error: o, formItemId: s, formDescriptionId: r, formMessageId: a } = v();
  return jsx(Slot, { ref: i, id: s, "aria-describedby": o ? `${r} ${a}` : `${r}`, "aria-invalid": !!o, ...t });
});
p.displayName = "FormControl";
const E = m.forwardRef(({ className: t, ...i }, o) => {
  const { formDescriptionId: s } = v();
  return jsx("p", { ref: o, id: s, className: d$1("text-[0.8rem] text-muted-foreground", t), ...i });
});
E.displayName = "FormDescription";
const h = m.forwardRef(({ className: t, children: i, ...o }, s) => {
  const { error: r, formMessageId: a } = v(), f = r ? String(r == null ? void 0 : r.message) : i;
  return f ? jsx("p", { ref: s, id: a, className: d$1("text-[0.8rem] font-medium text-destructive", t), ...o, children: f }) : null;
});
h.displayName = "FormMessage";
const F = m.forwardRef(({ className: t, ...i }, o) => jsx("textarea", { className: d$1("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), ref: o, ...i }));
F.displayName = "Textarea";
const Q = l.object({ name: l.string().min(2, "\u0E0A\u0E37\u0E48\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 2 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23"), email: l.string().email("\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"), subject: l.string().min(5, "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 5 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23"), message: l.string().min(10, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 10 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23") }), W = [{ icon: Mail, title: "\u0E2D\u0E35\u0E40\u0E21\u0E25", details: ["info@adventex.com", "support@adventex.com"] }, { icon: Phone, title: "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C", details: ["+66 81 234 5678", "+66 81 234 5679"] }, { icon: MapPin, title: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48", details: ["121/2 \u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 3 \u0E15.\u0E40\u0E27\u0E35\u0E22\u0E07", "\u0E2D.\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E41\u0E2A\u0E19 \u0E08.\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E23\u0E32\u0E22 57120"] }], _ = [{ icon: "/images/shared/facebook.svg", title: "Adventexeducation", url: "https://facebook.com/yourusername", color: "#1877F2" }, { icon: "/images/shared/instagram.svg", title: "Adventexeducation", url: "https://instagram.com/yourusername", color: "#E4405F" }, { icon: "/images/shared/line.svg", title: "Adventexeducation", url: "https://line.me/ti/p/yourusername", color: "#00C300" }, { icon: "/images/shared/tiktok.svg", title: "Adventexeducation", url: "https://tiktok.com/yourusername", color: "#000000" }], be = function() {
  const { toast: i } = E$1(), o = useForm({ resolver: zodResolver(Q) }), s = (r) => {
    console.log({ data: r }), i({ title: "\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08", description: "\u0E40\u0E23\u0E32\u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E01\u0E25\u0E31\u0E1A\u0E42\u0E14\u0E22\u0E40\u0E23\u0E47\u0E27\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14" }), o.reset();
  };
  return jsx("article", { className: "container mx-auto px-4 py-8", children: jsxs("div", { className: "grid gap-16 lg:grid-cols-3", children: [jsxs("div", { className: "space-y-8", children: [W.map((r, a) => jsx(w, { delay: 0.1 * a, children: jsxs("div", { className: "flex gap-4", children: [jsx("div", { className: "shrink-0", children: jsx("div", { className: "flex size-12 items-center justify-center rounded-full bg-primary/10", children: jsx(r.icon, { className: "size-6 text-primary" }) }) }), jsxs("div", { children: [jsx("h3", { className: "mb-2 font-semibold", children: r.title }), r.details.map((f, I) => jsx("p", { className: "text-muted-foreground", children: f }, I))] })] }) }, a)), jsx(w, { delay: 0.4, children: jsxs("div", { className: "mt-8", children: [jsx("h3", { className: "mb-4 font-semibold", children: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32\u0E1C\u0E48\u0E32\u0E19\u0E42\u0E0B\u0E40\u0E0A\u0E35\u0E22\u0E25" }), jsx("div", { className: "flex flex-col gap-4", children: _.map((r, a) => jsxs("a", { href: r.url, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 rounded-lg px-4 py-2 transition-colors hover:opacity-80", style: { backgroundColor: `${r.color}15`, color: r.color }, children: [jsx("img", { src: r.icon, alt: r.title, className: "size-4", width: 20, height: 20 }), jsx("span", { children: r.title })] }, a)) })] }) }), jsx(w, { delay: 0.5, children: jsxs("div", { className: "mt-8", children: [jsx("h3", { className: "mb-4 font-semibold", children: "\u0E2A\u0E41\u0E01\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D" }), jsx("div", { className: "rounded-xl bg-white p-4", children: jsx(B, { value: "https://adventex.com/contact", size: 100, style: { height: "auto", maxWidth: "100%", width: "100%" }, viewBox: "0 0 256 256" }) })] }) })] }), jsx("div", { className: "lg:col-span-2", children: jsx(w, { delay: 0.3, children: jsx("div", { className: "rounded-xl border bg-white p-6", children: jsx(T, { ...o, children: jsxs("form", { onSubmit: o.handleSubmit(s), className: "space-y-6", children: [jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [jsx(x, { control: o.control, name: "name", render: ({ field: r }) => jsxs(c, { children: [jsx(d, { children: "\u0E0A\u0E37\u0E48\u0E2D" }), jsx(p, { children: jsx(A, { placeholder: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D", ...r }) }), jsx(h, {})] }) }), jsx(x, { control: o.control, name: "email", render: ({ field: r }) => jsxs(c, { children: [jsx(d, { children: "\u0E2D\u0E35\u0E40\u0E21\u0E25" }), jsx(p, { children: jsx(A, { placeholder: "example@email.com", ...r }) }), jsx(h, {})] }) })] }), jsx(x, { control: o.control, name: "subject", render: ({ field: r }) => jsxs(c, { children: [jsx(d, { children: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D" }), jsx(p, { children: jsx(A, { placeholder: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D", ...r }) }), jsx(h, {})] }) }), jsx(x, { control: o.control, name: "message", render: ({ field: r }) => jsxs(c, { children: [jsx(d, { children: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21" }), jsx(p, { children: jsx(F, { placeholder: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D...", className: "min-h-[150px]", ...r }) }), jsx(h, {})] }) }), jsxs(E$2, { type: "submit", className: "w-full", children: [jsx(Send, { className: "mr-2 size-4" }), "\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21"] })] }) }) }) }) })] }) });
};

export { be as component };
//# sourceMappingURL=contact-jtLj_M2M.mjs.map
