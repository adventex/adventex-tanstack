import { jsx, jsxs } from 'react/jsx-runtime';
import * as m$2 from 'react';
import * as m$1 from '@radix-ui/react-dialog';
import { X, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { d } from '../../index.mjs';
import * as s from '@radix-ui/react-select';

const k = m$1.Root, B = m$1.Trigger, N = m$1.Portal, m = m$2.forwardRef(({ className: e, ...a }, t) => jsx(m$1.Overlay, { ref: t, className: d("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e), ...a }));
m.displayName = m$1.Overlay.displayName;
const w = m$2.forwardRef(({ className: e, children: a, ...t }, n) => jsxs(N, { children: [jsx(m, {}), jsxs(m$1.Content, { ref: n, className: d("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e), ...t, children: [a, jsxs(m$1.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] }));
w.displayName = m$1.Content.displayName;
const x = ({ className: e, ...a }) => jsx("div", { className: d("flex flex-col space-y-1.5 text-center sm:text-left", e), ...a });
x.displayName = "DialogHeader";
const b = m$2.forwardRef(({ className: e, ...a }, t) => jsx(m$1.Title, { ref: t, className: d("text-lg font-semibold leading-none tracking-tight", e), ...a }));
b.displayName = m$1.Title.displayName;
const S = m$2.forwardRef(({ className: e, ...a }, t) => jsx(m$1.Description, { ref: t, className: d("text-sm text-muted-foreground", e), ...a }));
S.displayName = m$1.Description.displayName;
const P = s.Root, U = s.Value, v = m$2.forwardRef(({ className: e, children: a, ...t }, n) => jsxs(s.Trigger, { ref: n, className: d("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e), ...t, children: [a, jsx(s.Icon, { asChild: true, children: jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })] }));
v.displayName = s.Trigger.displayName;
const p = m$2.forwardRef(({ className: e, ...a }, t) => jsx(s.ScrollUpButton, { ref: t, className: d("flex cursor-default items-center justify-center py-1", e), ...a, children: jsx(ChevronUp, { className: "h-4 w-4" }) }));
p.displayName = s.ScrollUpButton.displayName;
const f = m$2.forwardRef(({ className: e, ...a }, t) => jsx(s.ScrollDownButton, { ref: t, className: d("flex cursor-default items-center justify-center py-1", e), ...a, children: jsx(ChevronDown, { className: "h-4 w-4" }) }));
f.displayName = s.ScrollDownButton.displayName;
const D = m$2.forwardRef(({ className: e, children: a, position: t = "popper", ...n }, u) => jsx(s.Portal, { children: jsxs(s.Content, { ref: u, className: d("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e), position: t, ...n, children: [jsx(p, {}), jsx(s.Viewport, { className: d("p-1", t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: a }), jsx(f, {})] }) }));
D.displayName = s.Content.displayName;
const R = m$2.forwardRef(({ className: e, ...a }, t) => jsx(s.Label, { ref: t, className: d("px-2 py-1.5 text-sm font-semibold", e), ...a }));
R.displayName = s.Label.displayName;
const C = m$2.forwardRef(({ className: e, children: a, ...t }, n) => jsxs(s.Item, { ref: n, className: d("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), ...t, children: [jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(s.ItemIndicator, { children: jsx(Check, { className: "h-4 w-4" }) }) }), jsx(s.ItemText, { children: a })] }));
C.displayName = s.Item.displayName;
const T = m$2.forwardRef(({ className: e, ...a }, t) => jsx(s.Separator, { ref: t, className: d("-mx-1 my-1 h-px bg-muted", e), ...a }));
T.displayName = s.Separator.displayName;

export { B, C, D, P, U, b, k, v, w, x };
//# sourceMappingURL=select-Bj-GuSd9.mjs.map
