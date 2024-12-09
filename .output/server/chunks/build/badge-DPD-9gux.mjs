import { jsx } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import { d } from '../../index.mjs';

const s = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80", secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80", outline: "text-foreground" } }, defaultVariants: { variant: "default" } });
function f({ className: r, variant: e, ...t }) {
  return jsx("div", { className: d(s({ variant: e }), r), ...t });
}

export { f };
//# sourceMappingURL=badge-DPD-9gux.mjs.map
