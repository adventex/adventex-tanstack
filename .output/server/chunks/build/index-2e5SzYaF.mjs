import g from 'tiny-invariant';
import { defaultTransformer, isRedirect, isNotFound, isPlainObject, encode } from '@tanstack/react-router';
import { e as eventHandler, k as kt, g as gt, s as so, P as Pt, b as ao, c as re } from '../../index.mjs';

const H = [];
function O(e, n) {
  const t = n || e || {};
  return typeof t.method > "u" && (t.method = "GET"), { options: t, middleware: (r) => O(void 0, Object.assign(t, { middleware: r })), validator: (r) => O(void 0, Object.assign(t, { validator: r })), handler: (...r) => {
    const [a, s] = r;
    Object.assign(t, { ...a, extractedFn: a, serverFn: s }), g(a.url, "createServerFn must be called with a function that is marked with the 'use server' pragma. Are you using the @tanstack/start-vite-plugin ?");
    const o = [...t.middleware || [], U(t)];
    return Object.assign(async (i) => _(o, "client", { ...a, method: t.method, data: i == null ? void 0 : i.data, headers: i == null ? void 0 : i.headers, context: Object.assign({}, a) }).then((d) => d.result), { ...a, __executeServer: (i) => {
      const d = i instanceof FormData ? P(i) : i;
      return _(o, "server", { ...a, ...d }).then((c) => ({ result: c.result, context: c.sendContext }));
    } });
  } };
}
function P(e) {
  const n = e.get("__TSR_CONTEXT");
  if (e.delete("__TSR_CONTEXT"), typeof n != "string") return { context: {}, data: e };
  try {
    return { context: defaultTransformer.parse(n), data: e };
  } catch {
    return { data: e };
  }
}
function q(e) {
  const n = /* @__PURE__ */ new Set(), t = [], r = (a) => {
    a.forEach((s) => {
      s.options.middleware && r(s.options.middleware), n.has(s) || (n.add(s), t.push(s));
    });
  };
  return r(e), t;
}
const j = (e, n, t) => e({ data: n.data, context: n.context, sendContext: n.sendContext, method: n.method, next: (r) => {
  var _a, _b;
  const a = { ...n.context, ...r == null ? void 0 : r.context }, s = { ...n.sendContext, ...(_a = r == null ? void 0 : r.sendContext) != null ? _a : {} }, o = re(n.headers, r == null ? void 0 : r.headers);
  return t({ method: n.method, data: n.data, context: a, sendContext: s, headers: o, result: (_b = r == null ? void 0 : r.result) != null ? _b : n.result });
} });
function k(e, n) {
  if (e == null) return {};
  if ("~standard" in e) {
    const t = e["~standard"].validate(n);
    if (t instanceof Promise) throw new Error("Async validation not supported");
    if (t.issues) throw new Error(JSON.stringify(t.issues, void 0, 2));
    return t.value;
  }
  if ("parse" in e) return e.parse(n);
  if (typeof e == "function") return e(n);
  throw new Error("Invalid validator type!");
}
async function _(e, n, t) {
  const r = q([...H, ...e]), a = async (s) => {
    const o = r.shift();
    if (!o) return s;
    o.options.validator && (n !== "client" || o.options.validateClient) && (s.data = await k(o.options.validator, s.data));
    const i = n === "client" ? o.options.client : o.options.server;
    return i ? j(i, s, async (d) => {
      if (n === "client" && o.options.clientAfter) {
        const c = await a(d);
        return j(o.options.clientAfter, c, (f) => f);
      }
      return a(d);
    }) : a(s);
  };
  return a({ ...t, headers: t.headers || {}, sendContext: t.sendContext || {}, context: t.context || {} });
}
function U(e) {
  return { _types: void 0, options: { validator: e.validator, validateClient: e.validateClient, client: async ({ next: n, sendContext: t, ...r }) => {
    var a;
    const s = await ((a = e.extractedFn) == null ? void 0 : a.call(e, { ...r, context: t }));
    return n(s);
  }, server: async ({ next: n, ...t }) => {
    var r;
    const a = await ((r = e.serverFn) == null ? void 0 : r.call(e, t));
    return n({ result: a });
  } } };
}
async function B(e, n, t) {
  var r;
  const a = n[0];
  if (isPlainObject(a) && a.method) {
    const c = a, f = c.data instanceof FormData ? "formData" : "payload", l = new Headers({ ...f === "payload" ? { "content-type": "application/json", accept: "application/json" } : {}, ...c.headers instanceof Headers ? Object.fromEntries(c.headers.entries()) : c.headers || {} });
    if (c.method === "GET") {
      const v = encode({ payload: defaultTransformer.stringify({ data: c.data, context: c.context }) });
      v && (e += `&${v}`);
    }
    const u = new Request(e, { method: c.method, headers: l, ...D(c) }), y = await t(u), h = await F(y);
    if ((r = h.headers.get("content-type")) != null && r.includes("application/json")) {
      const v = await h.text(), w = v ? defaultTransformer.parse(v) : void 0;
      if (isRedirect(w) || isNotFound(w)) throw w;
      return w;
    }
    return h;
  }
  const s = new Request(e, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(n) }), o = await F(await t(s)), i = o.headers.get("content-type"), d = await o.text();
  return i && i.includes("application/json") ? d ? JSON.parse(d) : void 0 : d;
}
function D(e) {
  var _a;
  return e.method === "POST" ? e.data instanceof FormData ? (e.data.set("__TSR_CONTEXT", defaultTransformer.stringify(e.context)), { body: e.data }) : { body: defaultTransformer.stringify({ data: (_a = e.data) != null ? _a : null, context: e.context }) } : {};
}
async function F(e) {
  if (!e.ok) {
    const n = e.headers.get("content-type"), t = n && n.includes("application/json"), r = await (async () => t ? await e.json() : await e.text())(), a = `Request failed with status ${e.status}`;
    throw t ? new Error(JSON.stringify({ message: a, body: r })) : new Error([a, `${JSON.stringify(r, null, 2)}`].join(`

`));
  }
  return e;
}
function G(e) {
  return e.replace(/^\/|\/$/g, "");
}
function L(e, n, t) {
  return `${e}/${G("/_server")}/?_serverFnId=${encodeURI(n)}&_serverFnName=${encodeURI(t)}`;
}
eventHandler(X);
async function X(e) {
  return R(kt(e));
}
async function R(e, n) {
  var t, r;
  const a = e.method, s = new URL(e.url, "http://localhost:3000"), o = Object.fromEntries(s.searchParams.entries()), i = o._serverFnId, d = o._serverFnName;
  if (!i || !d) throw new Error("Invalid request");
  g(typeof i == "string", "Invalid server action");
  const c = (r = await ((t = gt("server").chunks[i]) == null ? void 0 : t.import())) == null ? void 0 : r[d], f = await (async () => {
    try {
      const l = await (async () => {
        var y;
        if ((y = e.headers.get("Content-Type")) != null && y.includes("multipart/form-data")) return g(a.toLowerCase() !== "get", "GET requests with FormData payloads are not supported"), await e.formData();
        if (a.toLowerCase() === "get") return o.payload ? defaultTransformer.parse(o.payload) : void 0;
        const h = await e.text();
        return defaultTransformer.parse(h);
      })(), u = await c(l);
      return u instanceof Response ? u : isRedirect(u) || isNotFound(u) ? S(u) : new Response(u !== void 0 ? defaultTransformer.stringify(u) : void 0, { status: so(Pt()), headers: { "Content-Type": "application/json" } });
    } catch (l) {
      return l instanceof Response ? l : isRedirect(l) || isNotFound(l) ? S(l) : (console.error("Server Fn Error!"), console.error(l), console.info(), new Response(JSON.stringify(l), { status: 500, headers: { "Content-Type": "application/json" } }));
    }
  })();
  if (f.headers.get("Content-Type") === "application/json") {
    const u = await f.clone().text();
    u && JSON.stringify(JSON.parse(u));
  }
  return f;
}
function S(e) {
  const { headers: n, ...t } = e;
  return new Response(JSON.stringify(t), { status: 200, headers: { "Content-Type": "application/json", ...e.headers || {} } });
}
const T = "http://localhost:3000";
function Y(e, n, t) {
  const r = L(T, n, t);
  return Object.assign((...s) => (g(s.length === 1, "Server functions can only accept a single argument"), B(r, s, async (o) => {
    const i = Pt(), d = ao(i);
    return Object.entries(d).forEach(([c, f]) => {
      o.headers.has(c) || o.headers.append(c, f);
    }), R(o);
  })), { url: r.replace(T, ""), filename: n, functionId: t });
}

export { O, Y };
//# sourceMappingURL=index-2e5SzYaF.mjs.map
