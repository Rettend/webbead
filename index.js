// node_modules/signal-polyfill/dist/index.js
var z = function(r, e) {
  return Object.is(r, e);
};
var C = function(r) {
  const e = i;
  return i = r, e;
};
var cr = function() {
  return i;
};
var ir = function() {
  return T;
};
var L = function(r) {
  if (T)
    throw new Error(typeof ngDevMode < "u" && ngDevMode ? "Assertion error: signal read during notification phase" : "");
  if (i === null)
    return;
  i.consumerOnSignalRead(r);
  const e = i.nextProducerIndex++;
  if (g(i), e < i.producerNode.length && i.producerNode[e] !== r && D(i)) {
    const t = i.producerNode[e];
    V(t, i.producerIndexOfThis[e]);
  }
  i.producerNode[e] !== r && (i.producerNode[e] = r, i.producerIndexOfThis[e] = D(i) ? K(r, i, e) : 0), i.producerLastReadVersion[e] = r.version;
};
var nr = function() {
  A++;
};
var H = function(r) {
  if (!(D(r) && !r.dirty) && !(!r.dirty && r.lastCleanEpoch === A)) {
    if (!r.producerMustRecompute(r) && !fr(r)) {
      r.dirty = false, r.lastCleanEpoch = A;
      return;
    }
    r.producerRecomputeValue(r), r.dirty = false, r.lastCleanEpoch = A;
  }
};
var J = function(r) {
  if (r.liveConsumerNode === undefined)
    return;
  const e = T;
  T = true;
  try {
    for (const t of r.liveConsumerNode)
      t.dirty || ar(t);
  } finally {
    T = e;
  }
};
var sr = function() {
  return (i == null ? undefined : i.consumerAllowSignalWrites) !== false;
};
var ar = function(r) {
  var e;
  r.dirty = true, J(r), (e = r.consumerMarkedDirty) == null || e.call(r, r);
};
var lr = function(r) {
  return r && (r.nextProducerIndex = 0), C(r);
};
var pr = function(r, e) {
  if (C(e), !(!r || r.producerNode === undefined || r.producerIndexOfThis === undefined || r.producerLastReadVersion === undefined)) {
    if (D(r))
      for (let t = r.nextProducerIndex;t < r.producerNode.length; t++)
        V(r.producerNode[t], r.producerIndexOfThis[t]);
    for (;r.producerNode.length > r.nextProducerIndex; )
      r.producerNode.pop(), r.producerLastReadVersion.pop(), r.producerIndexOfThis.pop();
  }
};
var fr = function(r) {
  g(r);
  for (let e = 0;e < r.producerNode.length; e++) {
    const t = r.producerNode[e], a = r.producerLastReadVersion[e];
    if (a !== t.version || (H(t), a !== t.version))
      return true;
  }
  return false;
};
var K = function(r, e, t) {
  var a;
  if (j(r), g(r), r.liveConsumerNode.length === 0) {
    (a = r.watched) == null || a.call(r.wrapper);
    for (let n = 0;n < r.producerNode.length; n++)
      r.producerIndexOfThis[n] = K(r.producerNode[n], r, n);
  }
  return r.liveConsumerIndexOfThis.push(t), r.liveConsumerNode.push(e) - 1;
};
var V = function(r, e) {
  var a;
  if (j(r), g(r), typeof ngDevMode < "u" && ngDevMode && e >= r.liveConsumerNode.length)
    throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${r.liveConsumerNode.length} consumers)`);
  if (r.liveConsumerNode.length === 1) {
    (a = r.unwatched) == null || a.call(r.wrapper);
    for (let n = 0;n < r.producerNode.length; n++)
      V(r.producerNode[n], r.producerIndexOfThis[n]);
  }
  const t = r.liveConsumerNode.length - 1;
  if (r.liveConsumerNode[e] = r.liveConsumerNode[t], r.liveConsumerIndexOfThis[e] = r.liveConsumerIndexOfThis[t], r.liveConsumerNode.length--, r.liveConsumerIndexOfThis.length--, e < r.liveConsumerNode.length) {
    const n = r.liveConsumerIndexOfThis[e], F = r.liveConsumerNode[e];
    g(F), F.producerIndexOfThis[n] = e;
  }
};
var D = function(r) {
  var e;
  return r.consumerIsAlwaysLive || (((e = r == null ? undefined : r.liveConsumerNode) == null ? undefined : e.length) ?? 0) > 0;
};
var g = function(r) {
  r.producerNode ?? (r.producerNode = []), r.producerIndexOfThis ?? (r.producerIndexOfThis = []), r.producerLastReadVersion ?? (r.producerLastReadVersion = []);
};
var j = function(r) {
  r.liveConsumerNode ?? (r.liveConsumerNode = []), r.liveConsumerIndexOfThis ?? (r.liveConsumerIndexOfThis = []);
};
var Q = function(r) {
  if (H(r), L(r), r.value === W)
    throw r.error;
  return r.value;
};
var dr = function(r) {
  const e = Object.create(hr);
  e.computation = r;
  const t = () => Q(e);
  return t[P] = e, t;
};
var mr = function() {
  throw new Error;
};
var wr = function() {
  vr();
};
var Nr = function(r) {
  const e = Object.create(yr);
  e.value = r;
  const t = () => (L(e), e.value);
  return t[P] = e, t;
};
var Cr = function() {
  return L(this), this.value;
};
var gr = function(r, e) {
  sr() || wr(), r.equal.call(r.wrapper, r.value, e) || (r.value = e, Ir(r));
};
var Ir = function(r) {
  r.version++, nr(), J(r);
};
var tr = Object.defineProperty;
var or = (r, e, t) => (e in r) ? tr(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var x = (r, e, t) => (or(r, typeof e != "symbol" ? e + "" : e, t), t);
var ur = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var R = (r, e) => {
  if (Object(e) !== e)
    throw TypeError('Cannot use the "in" operator on this value');
  return r.has(e);
};
var I = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
};
var M = (r, e, t) => (ur(r, e, "access private method"), t);
var i = null;
var T = false;
var A = 1;
var P = Symbol("SIGNAL");
var U = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: false,
  producerNode: undefined,
  producerLastReadVersion: undefined,
  producerIndexOfThis: undefined,
  nextProducerIndex: 0,
  liveConsumerNode: undefined,
  liveConsumerIndexOfThis: undefined,
  consumerAllowSignalWrites: false,
  consumerIsAlwaysLive: false,
  producerMustRecompute: () => false,
  producerRecomputeValue: () => {
  },
  consumerMarkedDirty: () => {
  },
  consumerOnSignalRead: () => {
  }
};
var k = Symbol("UNSET");
var q = Symbol("COMPUTING");
var W = Symbol("ERRORED");
var hr = {
  ...U,
  value: k,
  dirty: true,
  error: null,
  equal: z,
  producerMustRecompute(r) {
    return r.value === k || r.value === q;
  },
  producerRecomputeValue(r) {
    if (r.value === q)
      throw new Error("Detected cycle in computations.");
    const e = r.value;
    r.value = q;
    const t = lr(r);
    let a;
    try {
      a = r.computation.call(r.wrapper);
    } catch (n) {
      a = W, r.error = n;
    } finally {
      pr(r, t);
    }
    if (e !== k && e !== W && a !== W && r.equal.call(r.wrapper, e, a)) {
      r.value = e;
      return;
    }
    r.value = a, r.version++;
  }
};
var vr = mr;
var yr = {
  ...U,
  equal: z,
  value: undefined
};
var s = Symbol("node");
var w;
var v;
var N;
var B;
((r) => {
  var a, n, Tr, X, S, Sr;

  class e {
    constructor(h, f = {}) {
      I(this, n);
      x(this, a);
      const p = Nr(h)[P];
      if (this[s] = p, p.wrapper = this, f) {
        const m = f.equals;
        m && (p.equal = m), p.watched = f[r.subtle.watched], p.unwatched = f[r.subtle.unwatched];
      }
    }
    get() {
      if (!w(this))
        throw new TypeError("Wrong receiver type for Signal.State.prototype.get");
      return Cr.call(this[s]);
    }
    set(h) {
      if (!w(this))
        throw new TypeError("Wrong receiver type for Signal.State.prototype.set");
      if (ir())
        throw new Error("Writes to signals not permitted during Watcher callback");
      const f = this[s];
      gr(f, h);
    }
  }
  a = s, n = new WeakSet, Tr = function() {
  }, w = (h) => R(n, h), r.State = e;

  class t {
    constructor(h, f) {
      I(this, S);
      x(this, X);
      const p = dr(h)[P];
      if (p.consumerAllowSignalWrites = true, this[s] = p, p.wrapper = this, f) {
        const m = f.equals;
        m && (p.equal = m), p.watched = f[r.subtle.watched], p.unwatched = f[r.subtle.unwatched];
      }
    }
    get() {
      if (!v(this))
        throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");
      return Q(this[s]);
    }
  }
  X = s, S = new WeakSet, Sr = function() {
  }, v = (h) => R(S, h), r.Computed = t, ((d) => {
    var rr, E, Er, y, G;
    function h(c) {
      let u, o = null;
      try {
        o = C(null), u = c();
      } finally {
        C(o);
      }
      return u;
    }
    d.untrack = h;
    function f(c) {
      var u;
      if (!v(c) && !N(c))
        throw new TypeError("Called introspectSources without a Computed or Watcher argument");
      return ((u = c[s].producerNode) == null ? undefined : u.map((o) => o.wrapper)) ?? [];
    }
    d.introspectSources = f;
    function b(c) {
      var u;
      if (!v(c) && !w(c))
        throw new TypeError("Called introspectSinks without a Signal argument");
      return ((u = c[s].liveConsumerNode) == null ? undefined : u.map((o) => o.wrapper)) ?? [];
    }
    d.introspectSinks = b;
    function p(c) {
      if (!v(c) && !w(c))
        throw new TypeError("Called hasSinks without a Signal argument");
      const u = c[s].liveConsumerNode;
      return u ? u.length > 0 : false;
    }
    d.hasSinks = p;
    function m(c) {
      if (!v(c) && !N(c))
        throw new TypeError("Called hasSources without a Computed or Watcher argument");
      const u = c[s].producerNode;
      return u ? u.length > 0 : false;
    }
    d.hasSources = m;

    class Y {
      constructor(u) {
        I(this, E);
        I(this, y);
        x(this, rr);
        let o = Object.create(U);
        o.wrapper = this, o.consumerMarkedDirty = u, o.consumerIsAlwaysLive = true, o.consumerAllowSignalWrites = false, o.producerNode = [], this[s] = o;
      }
      watch(...u) {
        if (!N(this))
          throw new TypeError("Called unwatch without Watcher receiver");
        M(this, y, G).call(this, u);
        const o = this[s];
        o.dirty = false;
        const O = C(o);
        for (const l of u)
          L(l[s]);
        C(O);
      }
      unwatch(...u) {
        if (!N(this))
          throw new TypeError("Called unwatch without Watcher receiver");
        M(this, y, G).call(this, u);
        const o = this[s];
        g(o);
        let O = [];
        for (let l = 0;l < o.producerNode.length; l++)
          u.includes(o.producerNode[l].wrapper) && (V(o.producerNode[l], o.producerIndexOfThis[l]), O.push(l));
        for (const l of O) {
          const _ = o.producerNode.length - 1;
          if (o.producerNode[l] = o.producerNode[_], o.producerIndexOfThis[l] = o.producerIndexOfThis[_], o.producerNode.length--, o.producerIndexOfThis.length--, o.nextProducerIndex--, l < o.producerNode.length) {
            const er = o.producerIndexOfThis[l], $ = o.producerNode[l];
            j($), $.liveConsumerIndexOfThis[er] = l;
          }
        }
      }
      getPending() {
        if (!N(this))
          throw new TypeError("Called getPending without Watcher receiver");
        return this[s].producerNode.filter((o) => o.dirty).map((o) => o.wrapper);
      }
    }
    rr = s, E = new WeakSet, Er = function() {
    }, y = new WeakSet, G = function(u) {
      for (const o of u)
        if (!v(o) && !w(o))
          throw new TypeError("Called watch/unwatch without a Computed or State argument");
    }, N = (u) => R(E, u), d.Watcher = Y;
    function Z() {
      var c;
      return (c = cr()) == null ? undefined : c.wrapper;
    }
    d.currentComputed = Z, d.watched = Symbol("watched"), d.unwatched = Symbol("unwatched");
  })(r.subtle || (r.subtle = {}));
})(B || (B = {}));

// effect.js
var processPending = function() {
  needsEnqueue = true;
  for (const s2 of w2.getPending())
    s2.get();
  w2.watch();
};
function effect(callback) {
  let cleanup;
  const computed = new B.Computed(() => {
    typeof cleanup === "function" && cleanup();
    cleanup = callback();
  });
  w2.watch(computed);
  computed.get();
  return () => {
    w2.unwatch(computed);
    typeof cleanup === "function" && cleanup();
  };
}
var needsEnqueue = true;
var w2 = new B.subtle.Watcher(() => {
  if (needsEnqueue) {
    needsEnqueue = false;
    queueMicrotask(processPending);
  }
});

// index.ts
var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
var isNavVisible = new B.State(isDesktop);
document.getElementById("menu")?.addEventListener("click", () => {
  isNavVisible.set(!isNavVisible.get());
});
effect(() => {
  const nav = document.getElementById("nav");
  if (!nav)
    return;
  if (isNavVisible.get())
    nav.style.display = "flex";
  else
    nav.style.display = "none";
});
