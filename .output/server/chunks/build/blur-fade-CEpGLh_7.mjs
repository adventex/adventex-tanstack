import { jsx } from 'react/jsx-runtime';
import * as m from 'react';
import { useInView, AnimatePresence, motion } from 'motion/react';

const w = ({ children: t, className: a, variant: r, duration: s = 0.4, delay: o = 0, yOffset: e = 6, inView: l = false, inViewMargin: d = "-50px", blur: c = "6px" }) => {
  const i = m.useRef(null), m$1 = useInView(i, { once: true, margin: d }), u = !l || m$1, p = { hidden: { y: e, opacity: 0, filter: `blur(${c})` }, visible: { y: -e, opacity: 1, filter: "blur(0px)" } }, f = r || p;
  return jsx(AnimatePresence, { children: jsx(motion.div, { ref: i, initial: "hidden", animate: u ? "visible" : "hidden", exit: "hidden", variants: f, transition: { delay: 0.04 + o, duration: s, ease: "easeOut" }, className: a, children: t }) });
};

export { w };
//# sourceMappingURL=blur-fade-CEpGLh_7.mjs.map
