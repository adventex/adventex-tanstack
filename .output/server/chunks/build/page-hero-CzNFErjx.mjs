import { jsx, jsxs } from 'react/jsx-runtime';
import * as m$1 from 'react';
import { d as d$1 } from '../../index.mjs';

const n = ({ children: e, className: a, ref: r, ...o }) => jsx("section", { ref: r, className: d$1("relative mb-8", a), ...o, children: e });
n.displayName = "PageHero";
const c = ({ children: e, className: a, ...r }) => jsx("div", { className: "overflow-hidden", children: jsx("div", { className: d$1("flex flex-col", a), ...r, children: e }) });
c.displayName = "PageHeroContent";
const m = ({ children: e, className: a, ...r }) => jsx("div", { className: d$1("min-w-0 shrink-0 grow-0 basis-full", a), ...r, children: e });
m.displayName = "PageHeroItem";
const g = ({ src: e, alt: a, className: r, ...o }) => jsx("div", { className: "min-w-0 shrink-0 grow-0 basis-full", children: jsx("img", { src: e, alt: a, className: d$1("size-full rounded-lg object-contain", r), ...o }) });
g.displayName = "PageHeroImage";
const d = ({ children: e, className: a, ...r }) => jsx("div", { className: d$1("p-4", a), ...r, children: e });
d.displayName = "PageHeroText";
const p = ({ children: e, className: a, ...r }) => jsx("h1", { className: d$1("mb-4 text-4xl font-bold", a), ...r, children: e });
p.displayName = "PageHeroTitle";
const N = ({ children: e, className: a, ...r }) => jsx("p", { className: d$1("max-w-[50ch] pb-4 text-lg font-light leading-relaxed text-gray-600", a), ...r, children: e });
N.displayName = "PageHeroDescription";
const P = () => jsxs(m$1.Fragment, { children: [jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.1),transparent_50%)]" }), jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.05),transparent_50%)]" })] });
P.displayName = "PageHeroFooter";

export { N, P, c, d, g, m, n, p };
//# sourceMappingURL=page-hero-CzNFErjx.mjs.map
