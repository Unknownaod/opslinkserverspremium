"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [99], {
        7407: function(e, t, n) {
            n.r(t), n.d(t, {
                Accordion: function() {
                    return I
                },
                AccordionContent: function() {
                    return ee
                },
                AccordionHeader: function() {
                    return Q
                },
                AccordionItem: function() {
                    return X
                },
                AccordionTrigger: function() {
                    return J
                },
                Content: function() {
                    return el
                },
                Header: function() {
                    return ei
                },
                Item: function() {
                    return er
                },
                Root: function() {
                    return en
                },
                Trigger: function() {
                    return eo
                },
                createAccordionScope: function() {
                    return S
                }
            });
            var r = n(7294),
                i = n(5360),
                o = n(8771),
                l = n(8426),
                a = n(5893),
                u = n(6206),
                c = n(7342),
                s = n(5320),
                f = n(9981),
                d = n(9115),
                h = n(1276),
                p = "Collapsible",
                [g, m] = (0, i.b)(p),
                [b, k] = g(p),
                x = r.forwardRef((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        open: i,
                        defaultOpen: o,
                        disabled: l,
                        onOpenChange: u,
                        ...f
                    } = e, [d = !1, p] = (0, c.T)({
                        prop: i,
                        defaultProp: o,
                        onChange: u
                    });
                    return (0, a.jsx)(b, {
                        scope: n,
                        disabled: l,
                        contentId: (0, h.M)(),
                        open: d,
                        onOpenToggle: r.useCallback(() => p(e => !e), [p]),
                        children: (0, a.jsx)(s.WV.div, {
                            "data-state": D(d),
                            "data-disabled": l ? "" : void 0,
                            ...f,
                            ref: t
                        })
                    })
                });
            x.displayName = p;
            var y = "CollapsibleTrigger",
                v = r.forwardRef((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        ...r
                    } = e, i = k(y, n);
                    return (0, a.jsx)(s.WV.button, {
                        type: "button",
                        "aria-controls": i.contentId,
                        "aria-expanded": i.open || !1,
                        "data-state": D(i.open),
                        "data-disabled": i.disabled ? "" : void 0,
                        disabled: i.disabled,
                        ...r,
                        ref: t,
                        onClick: (0, u.M)(e.onClick, i.onOpenToggle)
                    })
                });
            v.displayName = y;
            var C = "CollapsibleContent",
                w = r.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        ...r
                    } = e, i = k(C, e.__scopeCollapsible);
                    return (0, a.jsx)(d.z, {
                        present: n || i.open,
                        children: ({
                            present: e
                        }) => (0, a.jsx)(j, { ...r,
                            ref: t,
                            present: e
                        })
                    })
                });
            w.displayName = C;
            var j = r.forwardRef((e, t) => {
                let {
                    __scopeCollapsible: n,
                    present: i,
                    children: l,
                    ...u
                } = e, c = k(C, n), [d, h] = r.useState(i), p = r.useRef(null), g = (0, o.e)(t, p), m = r.useRef(0), b = m.current, x = r.useRef(0), y = x.current, v = c.open || d, w = r.useRef(v), j = r.useRef();
                return r.useEffect(() => {
                    let e = requestAnimationFrame(() => w.current = !1);
                    return () => cancelAnimationFrame(e)
                }, []), (0, f.b)(() => {
                    let e = p.current;
                    if (e) {
                        j.current = j.current || {
                            transitionDuration: e.style.transitionDuration,
                            animationName: e.style.animationName
                        }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                        let t = e.getBoundingClientRect();
                        m.current = t.height, x.current = t.width, w.current || (e.style.transitionDuration = j.current.transitionDuration, e.style.animationName = j.current.animationName), h(i)
                    }
                }, [c.open, i]), (0, a.jsx)(s.WV.div, {
                    "data-state": D(c.open),
                    "data-disabled": c.disabled ? "" : void 0,
                    id: c.contentId,
                    hidden: !v,
                    ...u,
                    ref: g,
                    style: {
                        "--radix-collapsible-content-height": b ? `${b}px` : void 0,
                        "--radix-collapsible-content-width": y ? `${y}px` : void 0,
                        ...e.style
                    },
                    children: v && l
                })
            });

            function D(e) {
                return e ? "open" : "closed"
            }
            var A = r.createContext(void 0),
                L = "Accordion",
                R = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
                [O, F, M] = function(e) {
                    let t = e + "CollectionProvider",
                        [n, u] = (0, i.b)(t),
                        [c, s] = n(t, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }),
                        f = e => {
                            let {
                                scope: t,
                                children: n
                            } = e, i = r.useRef(null), o = r.useRef(new Map).current;
                            return (0, a.jsx)(c, {
                                scope: t,
                                itemMap: o,
                                collectionRef: i,
                                children: n
                            })
                        };
                    f.displayName = t;
                    let d = e + "CollectionSlot",
                        h = r.forwardRef((e, t) => {
                            let {
                                scope: n,
                                children: r
                            } = e, i = s(d, n), u = (0, o.e)(t, i.collectionRef);
                            return (0, a.jsx)(l.g7, {
                                ref: u,
                                children: r
                            })
                        });
                    h.displayName = d;
                    let p = e + "CollectionItemSlot",
                        g = "data-radix-collection-item",
                        m = r.forwardRef((e, t) => {
                            let {
                                scope: n,
                                children: i,
                                ...u
                            } = e, c = r.useRef(null), f = (0, o.e)(t, c), d = s(p, n);
                            return r.useEffect(() => (d.itemMap.set(c, {
                                ref: c,
                                ...u
                            }), () => void d.itemMap.delete(c))), (0, a.jsx)(l.g7, {
                                [g]: "",
                                ref: f,
                                children: i
                            })
                        });
                    return m.displayName = p, [{
                        Provider: f,
                        Slot: h,
                        ItemSlot: m
                    }, function(t) {
                        let n = s(e + "CollectionConsumer", t),
                            i = r.useCallback(() => {
                                let e = n.collectionRef.current;
                                if (!e) return [];
                                let t = Array.from(e.querySelectorAll(`[${g}]`)),
                                    r = Array.from(n.itemMap.values()),
                                    i = r.sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                                return i
                            }, [n.collectionRef, n.itemMap]);
                        return i
                    }, u]
                }(L),
                [z, S] = (0, i.b)(L, [M, m]),
                E = m(),
                I = r.forwardRef((e, t) => {
                    let {
                        type: n,
                        ...r
                    } = e;
                    return (0, a.jsx)(O.Provider, {
                        scope: e.__scopeAccordion,
                        children: "multiple" === n ? (0, a.jsx)(N, { ...r,
                            ref: t
                        }) : (0, a.jsx)(H, { ...r,
                            ref: t
                        })
                    })
                });
            I.displayName = L;
            var [_, T] = z(L), [P, B] = z(L, {
                collapsible: !1
            }), H = r.forwardRef((e, t) => {
                let {
                    value: n,
                    defaultValue: i,
                    onValueChange: o = () => {},
                    collapsible: l = !1,
                    ...u
                } = e, [s, f] = (0, c.T)({
                    prop: n,
                    defaultProp: i,
                    onChange: o
                });
                return (0, a.jsx)(_, {
                    scope: e.__scopeAccordion,
                    value: s ? [s] : [],
                    onItemOpen: f,
                    onItemClose: r.useCallback(() => l && f(""), [l, f]),
                    children: (0, a.jsx)(P, {
                        scope: e.__scopeAccordion,
                        collapsible: l,
                        children: (0, a.jsx)(V, { ...u,
                            ref: t
                        })
                    })
                })
            }), N = r.forwardRef((e, t) => {
                let {
                    value: n,
                    defaultValue: i,
                    onValueChange: o = () => {},
                    ...l
                } = e, [u = [], s] = (0, c.T)({
                    prop: n,
                    defaultProp: i,
                    onChange: o
                }), f = r.useCallback(e => s((t = []) => [...t, e]), [s]), d = r.useCallback(e => s((t = []) => t.filter(t => t !== e)), [s]);
                return (0, a.jsx)(_, {
                    scope: e.__scopeAccordion,
                    value: u,
                    onItemOpen: f,
                    onItemClose: d,
                    children: (0, a.jsx)(P, {
                        scope: e.__scopeAccordion,
                        collapsible: !0,
                        children: (0, a.jsx)(V, { ...l,
                            ref: t
                        })
                    })
                })
            }), [$, W] = z(L), V = r.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    disabled: i,
                    dir: l,
                    orientation: c = "vertical",
                    ...f
                } = e, d = r.useRef(null), h = (0, o.e)(d, t), p = F(n), g = function(e) {
                    let t = r.useContext(A);
                    return e || t || "ltr"
                }(l), m = "ltr" === g, b = (0, u.M)(e.onKeyDown, e => {
                    if (!R.includes(e.key)) return;
                    let t = e.target,
                        n = p().filter(e => !e.ref.current ? .disabled),
                        r = n.findIndex(e => e.ref.current === t),
                        i = n.length;
                    if (-1 === r) return;
                    e.preventDefault();
                    let o = r,
                        l = i - 1,
                        a = () => {
                            (o = r + 1) > l && (o = 0)
                        },
                        u = () => {
                            (o = r - 1) < 0 && (o = l)
                        };
                    switch (e.key) {
                        case "Home":
                            o = 0;
                            break;
                        case "End":
                            o = l;
                            break;
                        case "ArrowRight":
                            "horizontal" === c && (m ? a() : u());
                            break;
                        case "ArrowDown":
                            "vertical" === c && a();
                            break;
                        case "ArrowLeft":
                            "horizontal" === c && (m ? u() : a());
                            break;
                        case "ArrowUp":
                            "vertical" === c && u()
                    }
                    let s = o % i;
                    n[s].ref.current ? .focus()
                });
                return (0, a.jsx)($, {
                    scope: n,
                    disabled: i,
                    direction: l,
                    orientation: c,
                    children: (0, a.jsx)(O.Slot, {
                        scope: n,
                        children: (0, a.jsx)(s.WV.div, { ...f,
                            "data-orientation": c,
                            ref: h,
                            onKeyDown: i ? void 0 : b
                        })
                    })
                })
            }), q = "AccordionItem", [U, Z] = z(q), X = r.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    value: r,
                    ...i
                } = e, o = W(q, n), l = T(q, n), u = E(n), c = (0, h.M)(), s = r && l.value.includes(r) || !1, f = o.disabled || e.disabled;
                return (0, a.jsx)(U, {
                    scope: n,
                    open: s,
                    disabled: f,
                    triggerId: c,
                    children: (0, a.jsx)(x, {
                        "data-orientation": o.orientation,
                        "data-state": et(s),
                        ...u,
                        ...i,
                        ref: t,
                        disabled: f,
                        open: s,
                        onOpenChange: e => {
                            e ? l.onItemOpen(r) : l.onItemClose(r)
                        }
                    })
                })
            });
            X.displayName = q;
            var K = "AccordionHeader",
                Q = r.forwardRef((e, t) => {
                    let {
                        __scopeAccordion: n,
                        ...r
                    } = e, i = W(L, n), o = Z(K, n);
                    return (0, a.jsx)(s.WV.h3, {
                        "data-orientation": i.orientation,
                        "data-state": et(o.open),
                        "data-disabled": o.disabled ? "" : void 0,
                        ...r,
                        ref: t
                    })
                });
            Q.displayName = K;
            var G = "AccordionTrigger",
                J = r.forwardRef((e, t) => {
                    let {
                        __scopeAccordion: n,
                        ...r
                    } = e, i = W(L, n), o = Z(G, n), l = B(G, n), u = E(n);
                    return (0, a.jsx)(O.ItemSlot, {
                        scope: n,
                        children: (0, a.jsx)(v, {
                            "aria-disabled": o.open && !l.collapsible || void 0,
                            "data-orientation": i.orientation,
                            id: o.triggerId,
                            ...u,
                            ...r,
                            ref: t
                        })
                    })
                });
            J.displayName = G;
            var Y = "AccordionContent",
                ee = r.forwardRef((e, t) => {
                    let {
                        __scopeAccordion: n,
                        ...r
                    } = e, i = W(L, n), o = Z(Y, n), l = E(n);
                    return (0, a.jsx)(w, {
                        role: "region",
                        "aria-labelledby": o.triggerId,
                        "data-orientation": i.orientation,
                        ...l,
                        ...r,
                        ref: t,
                        style: {
                            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                            ...e.style
                        }
                    })
                });

            function et(e) {
                return e ? "open" : "closed"
            }
            ee.displayName = Y;
            var en = I,
                er = X,
                ei = Q,
                eo = J,
                el = ee
        },
        8024: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = n(7294),
                i = n(1292),
                o = Object.defineProperty,
                l = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable,
                c = (e, t, n) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                s = (e, t) => {
                    for (var n in t || (t = {})) a.call(t, n) && c(e, n, t[n]);
                    if (l)
                        for (var n of l(t)) u.call(t, n) && c(e, n, t[n]);
                    return e
                };
            let f = (e, t) => {
                    let n = r.useContext(i.s),
                        o = s(s({}, n), e);
                    return r.createElement("svg", s({
                        width: "1.5em",
                        height: "1.5em",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, o), r.createElement("path", {
                        d: "M9 6L20 6",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.createElement("path", {
                        d: "M5 6.01L5.01 5.99889",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.createElement("path", {
                        d: "M5 12.01L5.01 11.9989",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.createElement("path", {
                        d: "M3.80005 17.8L4.60005 18.6L6.60004 16.6",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.createElement("path", {
                        d: "M9 12L20 12",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), r.createElement("path", {
                        d: "M9 18L20 18",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                },
                d = (0, r.forwardRef)(f);
            var h = d
        },
        3550: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = n(7294),
                i = n(1292),
                o = Object.defineProperty,
                l = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable,
                c = (e, t, n) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                s = (e, t) => {
                    for (var n in t || (t = {})) a.call(t, n) && c(e, n, t[n]);
                    if (l)
                        for (var n of l(t)) u.call(t, n) && c(e, n, t[n]);
                    return e
                };
            let f = (e, t) => {
                    let n = r.useContext(i.s),
                        o = s(s({}, n), e);
                    return r.createElement("svg", s({
                        width: "1.5em",
                        height: "1.5em",
                        strokeWidth: 1.5,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "currentColor",
                        ref: t
                    }, o), r.createElement("path", {
                        d: "M6 9L12 15L18 9",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                },
                d = (0, r.forwardRef)(f);
            var h = d
        },
        6199: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return e_
                }
            });
            var r = n(4663),
                i = n(2703);
            let o = {
                    tokenize: function(e, t, n) {
                        let r = 0;
                        return function t(o) {
                            return (87 === o || 119 === o) && r < 3 ? (r++, e.consume(o), t) : 46 === o && 3 === r ? (e.consume(o), i) : n(o)
                        };

                        function i(e) {
                            return null === e ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                l = {
                    tokenize: function(e, t, n) {
                        let r, o, l;
                        return a;

                        function a(t) {
                            return 46 === t || 95 === t ? e.check(u, s, c)(t) : null === t || (0, i.z3)(t) || (0, i.B8)(t) || 45 !== t && (0, i.Xh)(t) ? s(t) : (l = !0, e.consume(t), a)
                        }

                        function c(t) {
                            return 95 === t ? r = !0 : (o = r, r = void 0), e.consume(t), a
                        }

                        function s(e) {
                            return o || r || !l ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                a = {
                    tokenize: function(e, t) {
                        let n = 0,
                            r = 0;
                        return o;

                        function o(a) {
                            return 40 === a ? (n++, e.consume(a), o) : 41 === a && r < n ? l(a) : 33 === a || 34 === a || 38 === a || 39 === a || 41 === a || 42 === a || 44 === a || 46 === a || 58 === a || 59 === a || 60 === a || 63 === a || 93 === a || 95 === a || 126 === a ? e.check(u, t, l)(a) : null === a || (0, i.z3)(a) || (0, i.B8)(a) ? t(a) : (e.consume(a), o)
                        }

                        function l(t) {
                            return 41 === t && r++, e.consume(t), o
                        }
                    },
                    partial: !0
                },
                u = {
                    tokenize: function(e, t, n) {
                        return r;

                        function r(a) {
                            return 33 === a || 34 === a || 39 === a || 41 === a || 42 === a || 44 === a || 46 === a || 58 === a || 59 === a || 63 === a || 95 === a || 126 === a ? (e.consume(a), r) : 38 === a ? (e.consume(a), l) : 93 === a ? (e.consume(a), o) : 60 === a || null === a || (0, i.z3)(a) || (0, i.B8)(a) ? t(a) : n(a)
                        }

                        function o(e) {
                            return null === e || 40 === e || 91 === e || (0, i.z3)(e) || (0, i.B8)(e) ? t(e) : r(e)
                        }

                        function l(t) {
                            return (0, i.jv)(t) ? function t(o) {
                                return 59 === o ? (e.consume(o), r) : (0, i.jv)(o) ? (e.consume(o), t) : n(o)
                            }(t) : n(t)
                        }
                    },
                    partial: !0
                },
                c = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.consume(t), r
                        };

                        function r(e) {
                            return (0, i.H$)(e) ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                s = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return 87 !== t && 119 !== t || !m.call(r, r.previous) || y(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(o, e.attempt(l, e.attempt(a, i), n), n)(t))
                        };

                        function i(n) {
                            return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
                        }
                    },
                    previous: m
                },
                f = {
                    tokenize: function(e, t, n) {
                        let r = this,
                            o = "",
                            u = !1;
                        return function(t) {
                            return (72 === t || 104 === t) && b.call(r, r.previous) && !y(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), o += String.fromCodePoint(t), e.consume(t), c) : n(t)
                        };

                        function c(t) {
                            if ((0, i.jv)(t) && o.length < 5) return o += String.fromCodePoint(t), e.consume(t), c;
                            if (58 === t) {
                                let n = o.toLowerCase();
                                if ("http" === n || "https" === n) return e.consume(t), s
                            }
                            return n(t)
                        }

                        function s(t) {
                            return 47 === t ? (e.consume(t), u) ? f : (u = !0, s) : n(t)
                        }

                        function f(t) {
                            return null === t || (0, i.Av)(t) || (0, i.z3)(t) || (0, i.B8)(t) || (0, i.Xh)(t) ? n(t) : e.attempt(l, e.attempt(a, d), n)(t)
                        }

                        function d(n) {
                            return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
                        }
                    },
                    previous: b
                },
                d = {
                    tokenize: function(e, t, n) {
                        let r, o;
                        let l = this;
                        return function(t) {
                            return !x(t) || !k.call(l, l.previous) || y(l.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
                                return x(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), a) : n(r)
                            }(t))
                        };

                        function a(t) {
                            return 46 === t ? e.check(c, s, u)(t) : 45 === t || 95 === t || (0, i.H$)(t) ? (o = !0, e.consume(t), a) : s(t)
                        }

                        function u(t) {
                            return e.consume(t), r = !0, a
                        }

                        function s(a) {
                            return o && r && (0, i.jv)(l.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(a)) : n(a)
                        }
                    },
                    previous: k
                },
                h = {},
                p = {
                    text: h
                },
                g = 48;
            for (; g < 123;) h[g] = d, 58 == ++g ? g = 65 : 91 === g && (g = 97);

            function m(e) {
                return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || (0, i.z3)(e)
            }

            function b(e) {
                return !(0, i.jv)(e)
            }

            function k(e) {
                return !(47 === e || x(e))
            }

            function x(e) {
                return 43 === e || 45 === e || 46 === e || 95 === e || (0, i.H$)(e)
            }

            function y(e) {
                let t = e.length,
                    n = !1;
                for (; t--;) {
                    let r = e[t][1];
                    if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
                        n = !0;
                        break
                    }
                    if (r._gfmAutolinkLiteralWalkedInto) {
                        n = !1;
                        break
                    }
                }
                return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
            }
            h[43] = d, h[45] = d, h[46] = d, h[95] = d, h[72] = [d, f], h[104] = [d, f], h[87] = [d, s], h[119] = [d, s];
            var v = n(3402),
                C = n(2761),
                w = n(1098);
            let j = {
                tokenize: function(e, t, n) {
                    let r = this;
                    return (0, C.f)(e, function(e) {
                        let i = r.events[r.events.length - 1];
                        return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e)
                    }, "gfmFootnoteDefinitionIndent", 5)
                },
                partial: !0
            };

            function D(e, t, n) {
                let r;
                let i = this,
                    o = i.events.length,
                    l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
                for (; o--;) {
                    let e = i.events[o][1];
                    if ("labelImage" === e.type) {
                        r = e;
                        break
                    }
                    if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break
                }
                return function(o) {
                    if (!r || !r._balanced) return n(o);
                    let a = (0, w.d)(i.sliceSerialize({
                        start: r.end,
                        end: i.now()
                    }));
                    return 94 === a.codePointAt(0) && l.includes(a.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(o), e.exit("gfmFootnoteCallLabelMarker"), t(o)) : n(o)
                }
            }

            function A(e, t) {
                let n = e.length;
                for (; n--;)
                    if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
                        e[n][1];
                        break
                    }
                e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
                let r = {
                        type: "gfmFootnoteCall",
                        start: Object.assign({}, e[n + 3][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end)
                    },
                    i = {
                        type: "gfmFootnoteCallMarker",
                        start: Object.assign({}, e[n + 3][1].end),
                        end: Object.assign({}, e[n + 3][1].end)
                    };
                i.end.column++, i.end.offset++, i.end._bufferIndex++;
                let o = {
                        type: "gfmFootnoteCallString",
                        start: Object.assign({}, i.end),
                        end: Object.assign({}, e[e.length - 1][1].start)
                    },
                    l = {
                        type: "chunkString",
                        contentType: "string",
                        start: Object.assign({}, o.start),
                        end: Object.assign({}, o.end)
                    },
                    a = [e[n + 1], e[n + 2],
                        ["enter", r, t], e[n + 3], e[n + 4],
                        ["enter", i, t],
                        ["exit", i, t],
                        ["enter", o, t],
                        ["enter", l, t],
                        ["exit", l, t],
                        ["exit", o, t], e[e.length - 2], e[e.length - 1],
                        ["exit", r, t]
                    ];
                return e.splice(n, e.length - n + 1, ...a), e
            }

            function L(e, t, n) {
                let r;
                let o = this,
                    l = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []),
                    a = 0;
                return function(t) {
                    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), u
                };

                function u(t) {
                    return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", c)
                }

                function c(u) {
                    if (a > 999 || 93 === u && !r || null === u || 91 === u || (0, i.z3)(u)) return n(u);
                    if (93 === u) {
                        e.exit("chunkString");
                        let r = e.exit("gfmFootnoteCallString");
                        return l.includes((0, w.d)(o.sliceSerialize(r))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(u)
                    }
                    return (0, i.z3)(u) || (r = !0), a++, e.consume(u), 92 === u ? s : c
                }

                function s(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, c) : c(t)
                }
            }

            function R(e, t, n) {
                let r, o;
                let l = this,
                    a = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []),
                    u = 0;
                return function(t) {
                    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), c
                };

                function c(t) {
                    return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", s) : n(t)
                }

                function s(t) {
                    if (u > 999 || 93 === t && !o || null === t || 91 === t || (0, i.z3)(t)) return n(t);
                    if (93 === t) {
                        e.exit("chunkString");
                        let n = e.exit("gfmFootnoteDefinitionLabelString");
                        return r = (0, w.d)(l.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d
                    }
                    return (0, i.z3)(t) || (o = !0), u++, e.consume(t), 92 === t ? f : s
                }

                function f(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, s) : s(t)
                }

                function d(t) {
                    return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), a.includes(r) || a.push(r), (0, C.f)(e, h, "gfmFootnoteDefinitionWhitespace")) : n(t)
                }

                function h(e) {
                    return t(e)
                }
            }

            function O(e, t, n) {
                return e.check(v.w, t, e.attempt(j, t, n))
            }

            function F(e) {
                e.exit("gfmFootnoteDefinition")
            }
            var M = n(1905),
                z = n(2987),
                S = n(3233);
            class E {
                constructor() {
                    this.map = []
                }
                add(e, t, n) {
                    ! function(e, t, n, r) {
                        let i = 0;
                        if (0 !== n || 0 !== r.length) {
                            for (; i < e.map.length;) {
                                if (e.map[i][0] === t) {
                                    e.map[i][1] += n, e.map[i][2].push(...r);
                                    return
                                }
                                i += 1
                            }
                            e.map.push([t, n, r])
                        }
                    }(this, e, t, n)
                }
                consume(e) {
                    if (this.map.sort((e, t) => e[0] - t[0]), 0 === this.map.length) return;
                    let t = this.map.length,
                        n = [];
                    for (; t > 0;) t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1])), n.push(this.map[t][2]), e.length = this.map[t][0];
                    n.push([...e]), e.length = 0;
                    let r = n.pop();
                    for (; r;) e.push(...r), r = n.pop();
                    this.map.length = 0
                }
            }
            let I = {
                flow: {
                    null: {
                        tokenize: function(e, t, n) {
                            let r;
                            let o = this,
                                l = 0,
                                a = 0;
                            return function(e) {
                                let t = o.events.length - 1;
                                for (; t > -1;) {
                                    let e = o.events[t][1].type;
                                    if ("lineEnding" === e || "linePrefix" === e) t--;
                                    else break
                                }
                                let r = t > -1 ? o.events[t][1].type : null,
                                    i = "tableHead" === r || "tableRow" === r ? x : u;
                                return i === x && o.parser.lazy[o.now().line] ? n(e) : i(e)
                            };

                            function u(t) {
                                return e.enter("tableHead"), e.enter("tableRow"), 124 === t || (r = !0, a += 1), c(t)
                            }

                            function c(t) {
                                return null === t ? n(t) : (0, i.Ch)(t) ? a > 1 ? (a = 0, o.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), d) : n(t) : (0, i.xz)(t) ? (0, C.f)(e, c, "whitespace")(t) : (a += 1, r && (r = !1, l += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, c) : (e.enter("data"), s(t))
                            }

                            function s(t) {
                                return null === t || 124 === t || (0, i.z3)(t) ? (e.exit("data"), c(t)) : (e.consume(t), 92 === t ? f : s)
                            }

                            function f(t) {
                                return 92 === t || 124 === t ? (e.consume(t), s) : s(t)
                            }

                            function d(t) {
                                return (o.interrupt = !1, o.parser.lazy[o.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), r = !1, (0, i.xz)(t)) ? (0, C.f)(e, h, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : h(t)
                            }

                            function h(t) {
                                return 45 === t || 58 === t ? g(t) : 124 === t ? (r = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), p) : n(t)
                            }

                            function p(t) {
                                return (0, i.xz)(t) ? (0, C.f)(e, g, "whitespace")(t) : g(t)
                            }

                            function g(t) {
                                return 58 === t ? (a += 1, r = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), m) : 45 === t ? (a += 1, m(t)) : null === t || (0, i.Ch)(t) ? k(t) : n(t)
                            }

                            function m(t) {
                                return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
                                    return 45 === n ? (e.consume(n), t) : 58 === n ? (r = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), b) : (e.exit("tableDelimiterFiller"), b(n))
                                }(t)) : n(t)
                            }

                            function b(t) {
                                return (0, i.xz)(t) ? (0, C.f)(e, k, "whitespace")(t) : k(t)
                            }

                            function k(o) {
                                return 124 === o ? h(o) : null === o || (0, i.Ch)(o) ? r && l === a ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(o)) : n(o) : n(o)
                            }

                            function x(t) {
                                return e.enter("tableRow"), y(t)
                            }

                            function y(n) {
                                return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), y) : null === n || (0, i.Ch)(n) ? (e.exit("tableRow"), t(n)) : (0, i.xz)(n) ? (0, C.f)(e, y, "whitespace")(n) : (e.enter("data"), v(n))
                            }

                            function v(t) {
                                return null === t || 124 === t || (0, i.z3)(t) ? (e.exit("data"), y(t)) : (e.consume(t), 92 === t ? w : v)
                            }

                            function w(t) {
                                return 92 === t || 124 === t ? (e.consume(t), v) : v(t)
                            }
                        },
                        resolveAll: function(e, t) {
                            let n, r, i, o = -1,
                                l = !0,
                                a = 0,
                                u = [0, 0, 0, 0],
                                c = [0, 0, 0, 0],
                                s = !1,
                                f = 0,
                                d = new E;
                            for (; ++o < e.length;) {
                                let h = e[o],
                                    p = h[1];
                                "enter" === h[0] ? "tableHead" === p.type ? (s = !1, 0 !== f && (T(d, t, f, n, r), r = void 0, f = 0), n = {
                                    type: "table",
                                    start: Object.assign({}, p.start),
                                    end: Object.assign({}, p.end)
                                }, d.add(o, 0, [
                                    ["enter", n, t]
                                ])) : "tableRow" === p.type || "tableDelimiterRow" === p.type ? (l = !0, i = void 0, u = [0, 0, 0, 0], c = [0, o + 1, 0, 0], s && (s = !1, r = {
                                    type: "tableBody",
                                    start: Object.assign({}, p.start),
                                    end: Object.assign({}, p.end)
                                }, d.add(o, 0, [
                                    ["enter", r, t]
                                ])), a = "tableDelimiterRow" === p.type ? 2 : r ? 3 : 1) : a && ("data" === p.type || "tableDelimiterMarker" === p.type || "tableDelimiterFiller" === p.type) ? (l = !1, 0 === c[2] && (0 !== u[1] && (c[0] = c[1], i = _(d, t, u, a, void 0, i), u = [0, 0, 0, 0]), c[2] = o)) : "tableCellDivider" === p.type && (l ? l = !1 : (0 !== u[1] && (c[0] = c[1], i = _(d, t, u, a, void 0, i)), c = [(u = c)[1], o, 0, 0])) : "tableHead" === p.type ? (s = !0, f = o) : "tableRow" === p.type || "tableDelimiterRow" === p.type ? (f = o, 0 !== u[1] ? (c[0] = c[1], i = _(d, t, u, a, o, i)) : 0 !== c[1] && (i = _(d, t, c, a, o, i)), a = 0) : a && ("data" === p.type || "tableDelimiterMarker" === p.type || "tableDelimiterFiller" === p.type) && (c[3] = o)
                            }
                            for (0 !== f && T(d, t, f, n, r), d.consume(t.events), o = -1; ++o < t.events.length;) {
                                let e = t.events[o];
                                "enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
                                    let n = !1,
                                        r = [];
                                    for (; t < e.length;) {
                                        let i = e[t];
                                        if (n) {
                                            if ("enter" === i[0]) "tableContent" === i[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
                                            else if ("tableContent" === i[1].type) {
                                                if ("tableDelimiterMarker" === e[t - 1][1].type) {
                                                    let e = r.length - 1;
                                                    r[e] = "left" === r[e] ? "center" : "right"
                                                }
                                            } else if ("tableDelimiterRow" === i[1].type) break
                                        } else "enter" === i[0] && "tableDelimiterRow" === i[1].type && (n = !0);
                                        t += 1
                                    }
                                    return r
                                }(t.events, o))
                            }
                            return e
                        }
                    }
                }
            };

            function _(e, t, n, r, i, o) {
                0 !== n[0] && (o.end = Object.assign({}, P(t.events, n[0])), e.add(n[0], 0, [
                    ["exit", o, t]
                ]));
                let l = P(t.events, n[1]);
                if (o = {
                        type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
                        start: Object.assign({}, l),
                        end: Object.assign({}, l)
                    }, e.add(n[1], 0, [
                        ["enter", o, t]
                    ]), 0 !== n[2]) {
                    let i = P(t.events, n[2]),
                        o = P(t.events, n[3]),
                        l = {
                            type: "tableContent",
                            start: Object.assign({}, i),
                            end: Object.assign({}, o)
                        };
                    if (e.add(n[2], 0, [
                            ["enter", l, t]
                        ]), 2 !== r) {
                        let r = t.events[n[2]],
                            i = t.events[n[3]];
                        if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
                            let t = n[2] + 1,
                                r = n[3] - n[2] - 1;
                            e.add(t, r, [])
                        }
                    }
                    e.add(n[3] + 1, 0, [
                        ["exit", l, t]
                    ])
                }
                return void 0 !== i && (o.end = Object.assign({}, P(t.events, i)), e.add(i, 0, [
                    ["exit", o, t]
                ]), o = void 0), o
            }

            function T(e, t, n, r, i) {
                let o = [],
                    l = P(t.events, n);
                i && (i.end = Object.assign({}, l), o.push(["exit", i, t])), r.end = Object.assign({}, l), o.push(["exit", r, t]), e.add(n + 1, 0, o)
            }

            function P(e, t) {
                let n = e[t],
                    r = "enter" === n[0] ? "start" : "end";
                return n[1][r]
            }
            let B = {
                text: {
                    91: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return function(t) {
                                return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), o) : n(t)
                            };

                            function o(t) {
                                return (0, i.z3)(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), l) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), l) : n(t)
                            }

                            function l(t) {
                                return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(t)
                            }

                            function a(r) {
                                return (0, i.Ch)(r) ? t(r) : (0, i.xz)(r) ? e.check({
                                    tokenize: H
                                }, t, n)(r) : n(r)
                            }
                        }
                    }
                }
            };

            function H(e, t, n) {
                return (0, C.f)(e, function(e) {
                    return null === e ? n(e) : t(e)
                }, "whitespace")
            }

            function N(e, t) {
                let n = String(e);
                if ("string" != typeof t) throw TypeError("Expected character");
                let r = 0,
                    i = n.indexOf(t);
                for (; - 1 !== i;) r++, i = n.indexOf(t, i + t.length);
                return r
            }
            var $ = n(557),
                W = n(6093);
            let V = {}.hasOwnProperty,
                q = function(e, t, n, r) {
                    let i, o;
                    "string" == typeof t || t instanceof RegExp ? (o = [
                        [t, n]
                    ], i = r) : (o = t, i = n), i || (i = {});
                    let l = (0, W.O)(i.ignore || []),
                        a = function(e) {
                            let t = [];
                            if ("object" != typeof e) throw TypeError("Expected array or object as schema");
                            if (Array.isArray(e)) {
                                let n = -1;
                                for (; ++n < e.length;) t.push([U(e[n][0]), Z(e[n][1])])
                            } else {
                                let n;
                                for (n in e) V.call(e, n) && t.push([U(n), Z(e[n])])
                            }
                            return t
                        }(o),
                        u = -1;
                    for (; ++u < a.length;)(0, $.S4)(e, "text", c);
                    return e;

                    function c(e, t) {
                        let n, r = -1;
                        for (; ++r < t.length;) {
                            let e = t[r];
                            if (l(e, n ? n.children.indexOf(e) : void 0, n)) return;
                            n = e
                        }
                        if (n) return function(e, t) {
                            let n = t[t.length - 1],
                                r = a[u][0],
                                i = a[u][1],
                                o = 0,
                                l = n.children.indexOf(e),
                                c = !1,
                                s = [];
                            r.lastIndex = 0;
                            let f = r.exec(e.value);
                            for (; f;) {
                                let n = f.index,
                                    l = {
                                        index: f.index,
                                        input: f.input,
                                        stack: [...t, e]
                                    },
                                    a = i(...f, l);
                                if ("string" == typeof a && (a = a.length > 0 ? {
                                        type: "text",
                                        value: a
                                    } : void 0), !1 !== a && (o !== n && s.push({
                                        type: "text",
                                        value: e.value.slice(o, n)
                                    }), Array.isArray(a) ? s.push(...a) : a && s.push(a), o = n + f[0].length, c = !0), !r.global) break;
                                f = r.exec(e.value)
                            }
                            return c ? (o < e.value.length && s.push({
                                type: "text",
                                value: e.value.slice(o)
                            }), n.children.splice(l, 1, ...s)) : s = [e], l + s.length
                        }(e, t)
                    }
                };

            function U(e) {
                return "string" == typeof e ? RegExp(function(e) {
                    if ("string" != typeof e) throw TypeError("Expected a string");
                    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
                }(e), "g") : e
            }

            function Z(e) {
                return "function" == typeof e ? e : () => e
            }
            let X = "phrasing",
                K = ["autolink", "link", "image", "label"],
                Q = {
                    transforms: [function(e) {
                        q(e, [
                            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Y],
                            [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, ee]
                        ], {
                            ignore: ["link", "linkReference"]
                        })
                    }],
                    enter: {
                        literalAutolink: function(e) {
                            this.enter({
                                type: "link",
                                title: null,
                                url: "",
                                children: []
                            }, e)
                        },
                        literalAutolinkEmail: J,
                        literalAutolinkHttp: J,
                        literalAutolinkWww: J
                    },
                    exit: {
                        literalAutolink: function(e) {
                            this.exit(e)
                        },
                        literalAutolinkEmail: function(e) {
                            this.config.exit.autolinkEmail.call(this, e)
                        },
                        literalAutolinkHttp: function(e) {
                            this.config.exit.autolinkProtocol.call(this, e)
                        },
                        literalAutolinkWww: function(e) {
                            this.config.exit.data.call(this, e);
                            let t = this.stack[this.stack.length - 1];
                            t.url = "http://" + this.sliceSerialize(e)
                        }
                    }
                },
                G = {
                    unsafe: [{
                        character: "@",
                        before: "[+\\-.\\w]",
                        after: "[\\-.\\w]",
                        inConstruct: X,
                        notInConstruct: K
                    }, {
                        character: ".",
                        before: "[Ww]",
                        after: "[\\-.\\w]",
                        inConstruct: X,
                        notInConstruct: K
                    }, {
                        character: ":",
                        before: "[ps]",
                        after: "\\/",
                        inConstruct: X,
                        notInConstruct: K
                    }]
                };

            function J(e) {
                this.config.enter.autolinkProtocol.call(this, e)
            }

            function Y(e, t, n, r, i) {
                let o = "";
                if (!et(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), ! function(e) {
                        let t = e.split(".");
                        return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
                    }(n))) return !1;
                let l = function(e) {
                    let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
                    if (!t) return [e, void 0];
                    e = e.slice(0, t.index);
                    let n = t[0],
                        r = n.indexOf(")"),
                        i = N(e, "("),
                        o = N(e, ")");
                    for (; - 1 !== r && i > o;) e += n.slice(0, r + 1), r = (n = n.slice(r + 1)).indexOf(")"), o++;
                    return [e, n]
                }(n + r);
                if (!l[0]) return !1;
                let a = {
                    type: "link",
                    title: null,
                    url: o + t + l[0],
                    children: [{
                        type: "text",
                        value: t + l[0]
                    }]
                };
                return l[1] ? [a, {
                    type: "text",
                    value: l[1]
                }] : a
            }

            function ee(e, t, n, r) {
                return !(!et(r, !0) || /[-\d_]$/.test(n)) && {
                    type: "link",
                    title: null,
                    url: "mailto:" + t + "@" + n,
                    children: [{
                        type: "text",
                        value: t + "@" + n
                    }]
                }
            }

            function et(e, t) {
                let n = e.input.charCodeAt(e.index - 1);
                return (0 === e.index || (0, i.B8)(n) || (0, i.Xh)(n)) && (!t || 47 !== n)
            }
            var en = n(7881);

            function er(e) {
                return e.label || !e.identifier ? e.label || "" : (0, en.v)(e.identifier)
            }
            let ei = /\r?\n|\r/g;

            function eo(e) {
                if (!e._compiled) {
                    let t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
                    e._compiled = RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g")
                }
                return e._compiled
            }

            function el(e, t, n) {
                if ("string" == typeof t && (t = [t]), !t || 0 === t.length) return n;
                let r = -1;
                for (; ++r < t.length;)
                    if (e.includes(t[r])) return !0;
                return !1
            }

            function ea(e, t, n) {
                let r = (n.before || "") + (t || "") + (n.after || ""),
                    i = [],
                    o = [],
                    l = {},
                    a = -1;
                for (; ++a < e.unsafe.length;) {
                    var u;
                    let t;
                    let n = e.unsafe[a];
                    if (!el(u = e.stack, n.inConstruct, !0) || el(u, n.notInConstruct, !1)) continue;
                    let o = eo(n);
                    for (; t = o.exec(r);) {
                        let e = "before" in n || Boolean(n.atBreak),
                            r = "after" in n,
                            o = t.index + (e ? t[1].length : 0);
                        i.includes(o) ? (l[o].before && !e && (l[o].before = !1), l[o].after && !r && (l[o].after = !1)) : (i.push(o), l[o] = {
                            before: e,
                            after: r
                        })
                    }
                }
                i.sort(eu);
                let c = n.before ? n.before.length : 0,
                    s = r.length - (n.after ? n.after.length : 0);
                for (a = -1; ++a < i.length;) {
                    let e = i[a];
                    !(e < c) && !(e >= s) && (!(e + 1 < s) || i[a + 1] !== e + 1 || !l[e].after || l[e + 1].before || l[e + 1].after) && (i[a - 1] !== e - 1 || !l[e].before || l[e - 1].before || l[e - 1].after) && (c !== e && o.push(ec(r.slice(c, e), "\\")), c = e, !/[!-/:-@[-`{-~]/.test(r.charAt(e)) || n.encode && n.encode.includes(r.charAt(e)) ? (o.push("&#x" + r.charCodeAt(e).toString(16).toUpperCase() + ";"), c++) : o.push("\\"))
                }
                return o.push(ec(r.slice(c, s), n.after)), o.join("")
            }

            function eu(e, t) {
                return e - t
            }

            function ec(e, t) {
                let n;
                let r = /\\(?=[!-/:-@[-`{-~])/g,
                    i = [],
                    o = [],
                    l = e + t,
                    a = -1,
                    u = 0;
                for (; n = r.exec(l);) i.push(n.index);
                for (; ++a < i.length;) u !== i[a] && o.push(e.slice(u, i[a])), o.push("\\"), u = i[a];
                return o.push(e.slice(u)), o.join("")
            }

            function es(e) {
                let t = e || {},
                    n = t.now || {},
                    r = t.lineShift || 0,
                    i = n.line || 1,
                    o = n.column || 1;
                return {
                    move: function(e) {
                        let t = e || "",
                            n = t.split(/\r?\n|\r/g),
                            l = n[n.length - 1];
                        return i += n.length - 1, o = 1 === n.length ? o + l.length : 1 + l.length + r, t
                    },
                    current: function() {
                        return {
                            now: {
                                line: i,
                                column: o
                            },
                            lineShift: r
                        }
                    },
                    shift: function(e) {
                        r += e
                    }
                }
            }

            function ef(e) {
                this.enter({
                    type: "footnoteDefinition",
                    identifier: "",
                    label: "",
                    children: []
                }, e)
            }

            function ed() {
                this.buffer()
            }

            function eh(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                n.label = t, n.identifier = (0, w.d)(this.sliceSerialize(e)).toLowerCase()
            }

            function ep(e) {
                this.exit(e)
            }

            function eg(e) {
                this.enter({
                    type: "footnoteReference",
                    identifier: "",
                    label: ""
                }, e)
            }

            function em() {
                this.buffer()
            }

            function eb(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                n.label = t, n.identifier = (0, w.d)(this.sliceSerialize(e)).toLowerCase()
            }

            function ek(e) {
                this.exit(e)
            }

            function ex(e, t, n, r) {
                let i = es(r),
                    o = i.move("[^"),
                    l = n.enter("footnoteReference"),
                    a = n.enter("reference");
                return o += i.move(ea(n, er(e), { ...i.current(),
                    before: o,
                    after: "]"
                })), a(), l(), o += i.move("]")
            }

            function ey(e, t, n, r) {
                let i = es(r),
                    o = i.move("[^"),
                    l = n.enter("footnoteDefinition"),
                    a = n.enter("label");
                return o += i.move(ea(n, er(e), { ...i.current(),
                    before: o,
                    after: "]"
                })), a(), o += i.move("]:" + (e.children && e.children.length > 0 ? " " : "")), i.shift(4), o += i.move(function(e, t) {
                    let n;
                    let r = [],
                        i = 0,
                        o = 0;
                    for (; n = ei.exec(e);) l(e.slice(i, n.index)), r.push(n[0]), i = n.index + n[0].length, o++;
                    return l(e.slice(i)), r.join("");

                    function l(e) {
                        r.push(t(e, o, !e))
                    }
                }(function(e, t, n) {
                    let r = t.indexStack,
                        i = e.children || [],
                        o = t.createTracker(n),
                        l = [],
                        a = -1;
                    for (r.push(-1); ++a < i.length;) {
                        let n = i[a];
                        r[r.length - 1] = a, l.push(o.move(t.handle(n, e, t, {
                            before: "\n",
                            after: "\n",
                            ...o.current()
                        }))), "list" !== n.type && (t.bulletLastUsed = void 0), a < i.length - 1 && l.push(o.move(function(e, t, n, r) {
                            let i = r.join.length;
                            for (; i--;) {
                                let o = r.join[i](e, t, n, r);
                                if (!0 === o || 1 === o) break;
                                if ("number" == typeof o) return "\n".repeat(1 + o);
                                if (!1 === o) return "\n\n<!---->\n\n"
                            }
                            return "\n\n"
                        }(n, i[a + 1], e, t)))
                    }
                    return r.pop(), l.join("")
                }(e, n, i.current()), ev)), l(), o
            }

            function ev(e, t, n) {
                return 0 === t ? e : (n ? "" : "    ") + e
            }

            function eC(e, t, n) {
                let r = t.indexStack,
                    i = e.children || [],
                    o = [],
                    l = -1,
                    a = n.before;
                r.push(-1);
                let u = t.createTracker(n);
                for (; ++l < i.length;) {
                    let c;
                    let s = i[l];
                    if (r[r.length - 1] = l, l + 1 < i.length) {
                        let n = t.handle.handlers[i[l + 1].type];
                        n && n.peek && (n = n.peek), c = n ? n(i[l + 1], e, t, {
                            before: "",
                            after: "",
                            ...u.current()
                        }).charAt(0) : ""
                    } else c = n.after;
                    o.length > 0 && ("\r" === a || "\n" === a) && "html" === s.type && (o[o.length - 1] = o[o.length - 1].replace(/(\r?\n|\r)$/, " "), a = " ", (u = t.createTracker(n)).move(o.join(""))), o.push(u.move(t.handle(s, e, t, { ...u.current(),
                        before: a,
                        after: c
                    }))), a = o[o.length - 1].slice(-1)
                }
                return r.pop(), o.join("")
            }
            ex.peek = function() {
                return "["
            }, eD.peek = function() {
                return "~"
            };
            let ew = {
                    canContainEols: ["delete"],
                    enter: {
                        strikethrough: function(e) {
                            this.enter({
                                type: "delete",
                                children: []
                            }, e)
                        }
                    },
                    exit: {
                        strikethrough: function(e) {
                            this.exit(e)
                        }
                    }
                },
                ej = {
                    unsafe: [{
                        character: "~",
                        inConstruct: "phrasing",
                        notInConstruct: ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"]
                    }],
                    handlers: {
                        delete: eD
                    }
                };

            function eD(e, t, n, r) {
                let i = es(r),
                    o = n.enter("strikethrough"),
                    l = i.move("~~");
                return l += eC(e, n, { ...i.current(),
                    before: l,
                    after: "~"
                }) + i.move("~~"), o(), l
            }

            function eA(e, t, n) {
                let r = e.value || "",
                    i = "`",
                    o = -1;
                for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
                for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length;) {
                    let e;
                    let t = n.unsafe[o],
                        i = eo(t);
                    if (t.atBreak)
                        for (; e = i.exec(r);) {
                            let t = e.index;
                            10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--, r = r.slice(0, t) + " " + r.slice(e.index + 1)
                        }
                }
                return i + r + i
            }

            function eL(e) {
                return e.length
            }

            function eR(e) {
                let t = "string" == typeof e ? e.codePointAt(0) : 0;
                return 67 === t || 99 === t ? 99 : 76 === t || 108 === t ? 108 : 82 === t || 114 === t ? 114 : 0
            }
            eA.peek = function() {
                return "`"
            };
            let eO = {
                enter: {
                    table: function(e) {
                        let t = e._align;
                        this.enter({
                            type: "table",
                            align: t.map(e => "none" === e ? null : e),
                            children: []
                        }, e), this.setData("inTable", !0)
                    },
                    tableData: eM,
                    tableHeader: eM,
                    tableRow: function(e) {
                        this.enter({
                            type: "tableRow",
                            children: []
                        }, e)
                    }
                },
                exit: {
                    codeText: function(e) {
                        let t = this.resume();
                        this.getData("inTable") && (t = t.replace(/\\([\\|])/g, ez));
                        let n = this.stack[this.stack.length - 1];
                        n.value = t, this.exit(e)
                    },
                    table: function(e) {
                        this.exit(e), this.setData("inTable")
                    },
                    tableData: eF,
                    tableHeader: eF,
                    tableRow: eF
                }
            };

            function eF(e) {
                this.exit(e)
            }

            function eM(e) {
                this.enter({
                    type: "tableCell",
                    children: []
                }, e)
            }

            function ez(e, t) {
                return "|" === t ? t : e
            }
            let eS = {
                    exit: {
                        taskListCheckValueChecked: eI,
                        taskListCheckValueUnchecked: eI,
                        paragraph: function(e) {
                            let t = this.stack[this.stack.length - 2];
                            if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
                                let e = this.stack[this.stack.length - 1],
                                    n = e.children[0];
                                if (n && "text" === n.type) {
                                    let r;
                                    let i = t.children,
                                        o = -1;
                                    for (; ++o < i.length;) {
                                        let e = i[o];
                                        if ("paragraph" === e.type) {
                                            r = e;
                                            break
                                        }
                                    }
                                    r === e && (n.value = n.value.slice(1), 0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)))
                                }
                            }
                            this.exit(e)
                        }
                    }
                },
                eE = {
                    unsafe: [{
                        atBreak: !0,
                        character: "-",
                        after: "[:|-]"
                    }],
                    handlers: {
                        listItem: function(e, t, n, r) {
                            let i = e.children[0],
                                o = "boolean" == typeof e.checked && i && "paragraph" === i.type,
                                l = "[" + (e.checked ? "x" : " ") + "] ",
                                a = es(r);
                            o && a.move(l);
                            let u = function(e, t, n, r) {
                                let i = function(e) {
                                        let t = e.options.listItemIndent || "tab";
                                        if (1 === t || "1" === t) return "one";
                                        if ("tab" !== t && "one" !== t && "mixed" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
                                        return t
                                    }(n),
                                    o = n.bulletCurrent || function(e) {
                                        let t = e.options.bullet || "*";
                                        if ("*" !== t && "+" !== t && "-" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
                                        return t
                                    }(n);
                                t && "list" === t.type && t.ordered && (o = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + o);
                                let l = o.length + 1;
                                ("tab" === i || "mixed" === i && (t && "list" === t.type && t.spread || e.spread)) && (l = 4 * Math.ceil(l / 4));
                                let a = n.createTracker(r);
                                a.move(o + " ".repeat(l - o.length)), a.shift(l);
                                let u = n.enter("listItem"),
                                    c = n.indentLines(n.containerFlow(e, a.current()), function(e, t, n) {
                                        return t ? (n ? "" : " ".repeat(l)) + e : (n ? o : o + " ".repeat(l - o.length)) + e
                                    });
                                return u(), c
                            }(e, t, n, { ...r,
                                ...a.current()
                            });
                            return o && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function(e) {
                                return e + l
                            })), u
                        }
                    }
                };

            function eI(e) {
                let t = this.stack[this.stack.length - 2];
                t.checked = "taskListCheckValueChecked" === e.type
            }

            function e_(e = {}) {
                let t = this.data();

                function n(e, n) {
                    let r = t[e] ? t[e] : t[e] = [];
                    r.push(n)
                }
                n("micromarkExtensions", (0, r.W)([p, {
                    document: {
                        91: {
                            tokenize: R,
                            continuation: {
                                tokenize: O
                            },
                            exit: F
                        }
                    },
                    text: {
                        91: {
                            tokenize: L
                        },
                        93: {
                            add: "after",
                            tokenize: D,
                            resolveTo: A
                        }
                    }
                }, function(e) {
                    let t = (e || {}).singleTilde,
                        n = {
                            tokenize: function(e, n, r) {
                                let i = this.previous,
                                    o = this.events,
                                    l = 0;
                                return function(a) {
                                    return 126 === i && "characterEscape" !== o[o.length - 1][1].type ? r(a) : (e.enter("strikethroughSequenceTemporary"), function o(a) {
                                        let u = (0, z.r)(i);
                                        if (126 === a) return l > 1 ? r(a) : (e.consume(a), l++, o);
                                        if (l < 2 && !t) return r(a);
                                        let c = e.exit("strikethroughSequenceTemporary"),
                                            s = (0, z.r)(a);
                                        return c._open = !s || 2 === s && Boolean(u), c._close = !u || 2 === u && Boolean(s), n(a)
                                    }(a))
                                }
                            },
                            resolveAll: function(e, t) {
                                let n = -1;
                                for (; ++n < e.length;)
                                    if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
                                        let r = n;
                                        for (; r--;)
                                            if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
                                                e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
                                                let i = {
                                                        type: "strikethrough",
                                                        start: Object.assign({}, e[r][1].start),
                                                        end: Object.assign({}, e[n][1].end)
                                                    },
                                                    o = {
                                                        type: "strikethroughText",
                                                        start: Object.assign({}, e[r][1].end),
                                                        end: Object.assign({}, e[n][1].start)
                                                    },
                                                    l = [
                                                        ["enter", i, t],
                                                        ["enter", e[r][1], t],
                                                        ["exit", e[r][1], t],
                                                        ["enter", o, t]
                                                    ],
                                                    a = t.parser.constructs.insideSpan.null;
                                                a && (0, M.d)(l, l.length, 0, (0, S.C)(a, e.slice(r + 1, n), t)), (0, M.d)(l, l.length, 0, [
                                                    ["exit", o, t],
                                                    ["enter", e[n][1], t],
                                                    ["exit", e[n][1], t],
                                                    ["exit", i, t]
                                                ]), (0, M.d)(e, r - 1, n - r + 3, l), n = r + l.length - 2;
                                                break
                                            }
                                    }
                                for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
                                return e
                            }
                        };
                    return null == t && (t = !0), {
                        text: {
                            126: n
                        },
                        insideSpan: {
                            null: [n]
                        },
                        attentionMarkers: {
                            null: [126]
                        }
                    }
                }(e), I, B])), n("fromMarkdownExtensions", [Q, {
                    enter: {
                        gfmFootnoteDefinition: ef,
                        gfmFootnoteDefinitionLabelString: ed,
                        gfmFootnoteCall: eg,
                        gfmFootnoteCallString: em
                    },
                    exit: {
                        gfmFootnoteDefinition: ep,
                        gfmFootnoteDefinitionLabelString: eh,
                        gfmFootnoteCall: ek,
                        gfmFootnoteCallString: eb
                    }
                }, ew, eO, eS]), n("toMarkdownExtensions", {
                    extensions: [G, {
                        unsafe: [{
                            character: "[",
                            inConstruct: ["phrasing", "label", "reference"]
                        }],
                        handlers: {
                            footnoteDefinition: ey,
                            footnoteReference: ex
                        }
                    }, ej, function(e) {
                        let t = e || {},
                            n = t.tableCellPadding,
                            r = t.tablePipeAlign,
                            i = t.stringLength,
                            o = n ? " " : "|";
                        return {
                            unsafe: [{
                                character: "\r",
                                inConstruct: "tableCell"
                            }, {
                                character: "\n",
                                inConstruct: "tableCell"
                            }, {
                                atBreak: !0,
                                character: "|",
                                after: "[	 :-]"
                            }, {
                                character: "|",
                                inConstruct: "tableCell"
                            }, {
                                atBreak: !0,
                                character: ":",
                                after: "-"
                            }, {
                                atBreak: !0,
                                character: "-",
                                after: "[:|-]"
                            }],
                            handlers: {
                                table: function(e, t, n, r) {
                                    return a(function(e, t, n) {
                                        let r = e.children,
                                            i = -1,
                                            o = [],
                                            l = t.enter("table");
                                        for (; ++i < r.length;) o[i] = u(r[i], t, n);
                                        return l(), o
                                    }(e, n, r), e.align)
                                },
                                tableRow: function(e, t, n, r) {
                                    let i = u(e, n, r),
                                        o = a([i]);
                                    return o.slice(0, o.indexOf("\n"))
                                },
                                tableCell: l,
                                inlineCode: function(e, t, n) {
                                    let r = eA(e, t, n);
                                    return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r
                                }
                            }
                        };

                        function l(e, t, n, r) {
                            let i = n.enter("tableCell"),
                                l = n.enter("phrasing"),
                                a = eC(e, n, { ...r,
                                    before: o,
                                    after: o
                                });
                            return l(), i(), a
                        }

                        function a(e, t) {
                            return function(e, t = {}) {
                                let n = (t.align || []).concat(),
                                    r = t.stringLength || eL,
                                    i = [],
                                    o = [],
                                    l = [],
                                    a = [],
                                    u = 0,
                                    c = -1;
                                for (; ++c < e.length;) {
                                    let n = [],
                                        i = [],
                                        f = -1;
                                    for (e[c].length > u && (u = e[c].length); ++f < e[c].length;) {
                                        var s;
                                        let o = null == (s = e[c][f]) ? "" : String(s);
                                        if (!1 !== t.alignDelimiters) {
                                            let e = r(o);
                                            i[f] = e, (void 0 === a[f] || e > a[f]) && (a[f] = e)
                                        }
                                        n.push(o)
                                    }
                                    o[c] = n, l[c] = i
                                }
                                let f = -1;
                                if ("object" == typeof n && "length" in n)
                                    for (; ++f < u;) i[f] = eR(n[f]);
                                else {
                                    let e = eR(n);
                                    for (; ++f < u;) i[f] = e
                                }
                                f = -1;
                                let d = [],
                                    h = [];
                                for (; ++f < u;) {
                                    let e = i[f],
                                        n = "",
                                        r = "";
                                    99 === e ? (n = ":", r = ":") : 108 === e ? n = ":" : 114 === e && (r = ":");
                                    let o = !1 === t.alignDelimiters ? 1 : Math.max(1, a[f] - n.length - r.length),
                                        l = n + "-".repeat(o) + r;
                                    !1 !== t.alignDelimiters && ((o = n.length + o + r.length) > a[f] && (a[f] = o), h[f] = o), d[f] = l
                                }
                                o.splice(1, 0, d), l.splice(1, 0, h), c = -1;
                                let p = [];
                                for (; ++c < o.length;) {
                                    let e = o[c],
                                        n = l[c];
                                    f = -1;
                                    let r = [];
                                    for (; ++f < u;) {
                                        let o = e[f] || "",
                                            l = "",
                                            c = "";
                                        if (!1 !== t.alignDelimiters) {
                                            let e = a[f] - (n[f] || 0),
                                                t = i[f];
                                            114 === t ? l = " ".repeat(e) : 99 === t ? e % 2 ? (l = " ".repeat(e / 2 + .5), c = " ".repeat(e / 2 - .5)) : c = l = " ".repeat(e / 2) : c = " ".repeat(e)
                                        }!1 === t.delimiterStart || f || r.push("|"), !1 !== t.padding && !(!1 === t.alignDelimiters && "" === o) && (!1 !== t.delimiterStart || f) && r.push(" "), !1 !== t.alignDelimiters && r.push(l), r.push(o), !1 !== t.alignDelimiters && r.push(c), !1 !== t.padding && r.push(" "), (!1 !== t.delimiterEnd || f !== u - 1) && r.push("|")
                                    }
                                    p.push(!1 === t.delimiterEnd ? r.join("").replace(/ +$/, "") : r.join(""))
                                }
                                return p.join("\n")
                            }(e, {
                                align: t,
                                alignDelimiters: r,
                                padding: n,
                                stringLength: i
                            })
                        }

                        function u(e, t, n) {
                            let r = e.children,
                                i = -1,
                                o = [],
                                a = t.enter("tableRow");
                            for (; ++i < r.length;) o[i] = l(r[i], e, t, n);
                            return a(), o
                        }
                    }(e), eE]
                })
            }
        }
    }
]);