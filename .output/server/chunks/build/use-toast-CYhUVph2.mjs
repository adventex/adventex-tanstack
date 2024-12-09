import * as m from 'react';

const d = 1, p = 1e6;
let i = 0;
function A() {
  return i = (i + 1) % Number.MAX_SAFE_INTEGER, i.toString();
}
const a = /* @__PURE__ */ new Map(), S = (t) => {
  if (a.has(t)) return;
  const s = setTimeout(() => {
    a.delete(t), n({ type: "REMOVE_TOAST", toastId: t });
  }, p);
  a.set(t, s);
}, f = (t, s) => {
  switch (s.type) {
    case "ADD_TOAST":
      return { ...t, toasts: [s.toast, ...t.toasts].slice(0, d) };
    case "UPDATE_TOAST":
      return { ...t, toasts: t.toasts.map((e) => e.id === s.toast.id ? { ...e, ...s.toast } : e) };
    case "DISMISS_TOAST": {
      const { toastId: e } = s;
      return e ? S(e) : t.toasts.forEach((o) => {
        S(o.id);
      }), { ...t, toasts: t.toasts.map((o) => o.id === e || e === void 0 ? { ...o, open: false } : o) };
    }
    case "REMOVE_TOAST":
      return s.toastId === void 0 ? { ...t, toasts: [] } : { ...t, toasts: t.toasts.filter((e) => e.id !== s.toastId) };
  }
}, r = [];
let T = { toasts: [] };
function n(t) {
  T = f(T, t), r.forEach((s) => {
    s(T);
  });
}
function O({ ...t }) {
  const s = A(), e = (u) => n({ type: "UPDATE_TOAST", toast: { ...u, id: s } }), o = () => n({ type: "DISMISS_TOAST", toastId: s });
  return n({ type: "ADD_TOAST", toast: { ...t, id: s, open: true, onOpenChange: (u) => {
    u || o();
  } } }), { id: s, dismiss: o, update: e };
}
function E() {
  const [t, s] = m.useState(T);
  return m.useEffect(() => (r.push(s), () => {
    const e = r.indexOf(s);
    e > -1 && r.splice(e, 1);
  }), [t]), { ...t, toast: O, dismiss: (e) => n({ type: "DISMISS_TOAST", toastId: e }) };
}

export { E };
//# sourceMappingURL=use-toast-CYhUVph2.mjs.map
