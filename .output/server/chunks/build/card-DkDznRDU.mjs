import { jsx } from 'react/jsx-runtime';
import * as m$1 from 'react';
import { d } from '../../index.mjs';

const t = m$1.forwardRef(({ className: a, ...e }, r) => jsx("div", { ref: r, className: d("rounded-xl border bg-card text-card-foreground shadow", a), ...e }));
t.displayName = "Card";
const i = m$1.forwardRef(({ className: a, ...e }, r) => jsx("div", { ref: r, className: d("flex flex-col space-y-1.5 p-6", a), ...e }));
i.displayName = "CardHeader";
const c = m$1.forwardRef(({ className: a, ...e }, r) => jsx("div", { ref: r, className: d("font-semibold leading-none tracking-tight", a), ...e }));
c.displayName = "CardTitle";
const m = m$1.forwardRef(({ className: a, ...e }, r) => jsx("div", { ref: r, className: d("text-sm text-muted-foreground", a), ...e }));
m.displayName = "CardDescription";
const n = m$1.forwardRef(({ className: a, ...e }, r) => jsx("div", { ref: r, className: d("p-6 pt-0", a), ...e }));
n.displayName = "CardContent";
const f = m$1.forwardRef(({ className: a, ...e }, r) => jsx("div", { ref: r, className: d("flex items-center p-6 pt-0", a), ...e }));
f.displayName = "CardFooter";

export { c, f, i, m, n, t };
//# sourceMappingURL=card-DkDznRDU.mjs.map
