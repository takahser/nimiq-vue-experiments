require = (function() {
  return function r(e, t, n) {
    function o(c, a) {
      if (!t[c]) {
        if (!e[c]) {
          var s = 'function' == typeof require && require;
          if (!a && s) return s(c, !0);
          if (i) return i(c, !0);
          var u = new Error("Cannot find module '" + c + "'");
          throw ((u.code = 'MODULE_NOT_FOUND'), u);
        }
        var f = (t[c] = { exports: {} });
        e[c][0].call(
          f.exports,
          function(t) {
            return o(e[c][1][t] || t);
          },
          f,
          f.exports,
          r,
          e,
          t,
          n
        );
      }
      return t[c].exports;
    }
    for (
      var i = 'function' == typeof require && require, c = 0;
      c < n.length;
      c++
    )
      o(n[c]);
    return o;
  };
})()(
  {
    1: [
      function(e, t, r) {
        t.exports = {
          default: e('core-js/library/fn/object/define-property'),
          __esModule: !0
        };
      },
      { 'core-js/library/fn/object/define-property': 3 }
    ],
    2: [
      function(e, t, r) {
        t.exports = {
          default: e('core-js/library/fn/promise'),
          __esModule: !0
        };
      },
      { 'core-js/library/fn/promise': 4 }
    ],
    3: [
      function(e, t, r) {
        e('../../modules/es6.object.define-property');
        var n = e('../../modules/_core').Object;
        t.exports = function defineProperty(e, t, r) {
          return n.defineProperty(e, t, r);
        };
      },
      {
        '../../modules/_core': 12,
        '../../modules/es6.object.define-property': 67
      }
    ],
    4: [
      function(e, t, r) {
        e('../modules/es6.object.to-string');
        e('../modules/es6.string.iterator');
        e('../modules/web.dom.iterable');
        e('../modules/es6.promise');
        e('../modules/es7.promise.finally');
        e('../modules/es7.promise.try');
        t.exports = e('../modules/_core').Promise;
      },
      {
        '../modules/_core': 12,
        '../modules/es6.object.to-string': 68,
        '../modules/es6.promise': 69,
        '../modules/es6.string.iterator': 70,
        '../modules/es7.promise.finally': 71,
        '../modules/es7.promise.try': 72,
        '../modules/web.dom.iterable': 73
      }
    ],
    5: [
      function(e, t, r) {
        t.exports = function(e) {
          if ('function' != typeof e)
            throw TypeError(e + ' is not a function!');
          return e;
        };
      },
      {}
    ],
    6: [
      function(e, t, r) {
        t.exports = function() {};
      },
      {}
    ],
    7: [
      function(e, t, r) {
        t.exports = function(e, t, r, n) {
          if (!(e instanceof t) || (n !== undefined && n in e))
            throw TypeError(r + ': incorrect invocation!');
          return e;
        };
      },
      {}
    ],
    8: [
      function(e, t, r) {
        var n = e('./_is-object');
        t.exports = function(e) {
          if (!n(e)) throw TypeError(e + ' is not an object!');
          return e;
        };
      },
      { './_is-object': 29 }
    ],
    9: [
      function(e, t, r) {
        var n = e('./_to-iobject'),
          o = e('./_to-length'),
          i = e('./_to-absolute-index');
        t.exports = function(e) {
          return function(t, r, c) {
            var a,
              s = n(t),
              u = o(s.length),
              f = i(c, u);
            if (e && r != r) {
              for (; u > f; ) if ((a = s[f++]) != a) return !0;
            } else
              for (; u > f; f++)
                if ((e || f in s) && s[f] === r) return e || f || 0;
            return !e && -1;
          };
        };
      },
      { './_to-absolute-index': 57, './_to-iobject': 59, './_to-length': 60 }
    ],
    10: [
      function(e, t, r) {
        var n = e('./_cof'),
          o = e('./_wks')('toStringTag'),
          i =
            'Arguments' ==
            n(
              (function() {
                return arguments;
              })()
            );
        t.exports = function(e) {
          var t, r, c;
          return e === undefined
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (r = (function(e, t) {
                try {
                  return e[t];
                } catch (r) {}
              })((t = Object(e)), o))
            ? r
            : i
            ? n(t)
            : 'Object' == (c = n(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : c;
        };
      },
      { './_cof': 11, './_wks': 64 }
    ],
    11: [
      function(e, t, r) {
        var n = {}.toString;
        t.exports = function(e) {
          return n.call(e).slice(8, -1);
        };
      },
      {}
    ],
    12: [
      function(e, t, r) {
        var n = (t.exports = { version: '2.5.5' });
        'number' == typeof __e && (__e = n);
      },
      {}
    ],
    13: [
      function(e, t, r) {
        var n = e('./_a-function');
        t.exports = function(e, t, r) {
          n(e);
          if (t === undefined) return e;
          switch (r) {
            case 1:
              return function(r) {
                return e.call(t, r);
              };
            case 2:
              return function(r, n) {
                return e.call(t, r, n);
              };
            case 3:
              return function(r, n, o) {
                return e.call(t, r, n, o);
              };
          }
          return function() {
            return e.apply(t, arguments);
          };
        };
      },
      { './_a-function': 5 }
    ],
    14: [
      function(e, t, r) {
        t.exports = function(e) {
          if (e == undefined) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      {}
    ],
    15: [
      function(e, t, r) {
        t.exports = !e('./_fails')(function() {
          return (
            7 !=
            Object.defineProperty({}, 'a', {
              get: function() {
                return 7;
              }
            }).a
          );
        });
      },
      { './_fails': 19 }
    ],
    16: [
      function(e, t, r) {
        var n = e('./_is-object'),
          o = e('./_global').document,
          i = n(o) && n(o.createElement);
        t.exports = function(e) {
          return i ? o.createElement(e) : {};
        };
      },
      { './_global': 21, './_is-object': 29 }
    ],
    17: [
      function(e, t, r) {
        t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
          ','
        );
      },
      {}
    ],
    18: [
      function(e, t, r) {
        var n = e('./_global'),
          o = e('./_core'),
          i = e('./_ctx'),
          c = e('./_hide'),
          a = e('./_has'),
          s = function(e, t, r) {
            var u,
              f,
              l,
              _ = e & s.F,
              p = e & s.G,
              d = e & s.S,
              h = e & s.P,
              v = e & s.B,
              m = e & s.W,
              y = p ? o : o[t] || (o[t] = {}),
              g = y.prototype,
              b = p ? n : d ? n[t] : (n[t] || {}).prototype;
            p && (r = t);
            for (u in r)
              if (!(f = !_ && b && b[u] !== undefined) || !a(y, u)) {
                l = f ? b[u] : r[u];
                y[u] =
                  p && 'function' != typeof b[u]
                    ? r[u]
                    : v && f
                    ? i(l, n)
                    : m && b[u] == l
                    ? (function(e) {
                        var t = function(t, r, n) {
                          if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e();
                              case 1:
                                return new e(t);
                              case 2:
                                return new e(t, r);
                            }
                            return new e(t, r, n);
                          }
                          return e.apply(this, arguments);
                        };
                        t.prototype = e.prototype;
                        return t;
                      })(l)
                    : h && 'function' == typeof l
                    ? i(Function.call, l)
                    : l;
                if (h) {
                  (y.virtual || (y.virtual = {}))[u] = l;
                  e & s.R && g && !g[u] && c(g, u, l);
                }
              }
          };
        s.F = 1;
        s.G = 2;
        s.S = 4;
        s.P = 8;
        s.B = 16;
        s.W = 32;
        s.U = 64;
        s.R = 128;
        t.exports = s;
      },
      {
        './_core': 12,
        './_ctx': 13,
        './_global': 21,
        './_has': 22,
        './_hide': 23
      }
    ],
    19: [
      function(e, t, r) {
        t.exports = function(e) {
          try {
            return !!e();
          } catch (t) {
            return !0;
          }
        };
      },
      {}
    ],
    20: [
      function(e, t, r) {
        var n = e('./_ctx'),
          o = e('./_iter-call'),
          i = e('./_is-array-iter'),
          c = e('./_an-object'),
          a = e('./_to-length'),
          s = e('./core.get-iterator-method'),
          u = {},
          f = {};
        (r = t.exports = function(e, t, r, l, _) {
          var p,
            d,
            h,
            v,
            m = _
              ? function() {
                  return e;
                }
              : s(e),
            y = n(r, l, t ? 2 : 1),
            g = 0;
          if ('function' != typeof m) throw TypeError(e + ' is not iterable!');
          if (i(m)) {
            for (p = a(e.length); p > g; g++)
              if (
                (v = t ? y(c((d = e[g]))[0], d[1]) : y(e[g])) === u ||
                v === f
              )
                return v;
          } else
            for (h = m.call(e); !(d = h.next()).done; )
              if ((v = o(h, y, d.value, t)) === u || v === f) return v;
        }).BREAK = u;
        r.RETURN = f;
      },
      {
        './_an-object': 8,
        './_ctx': 13,
        './_is-array-iter': 28,
        './_iter-call': 30,
        './_to-length': 60,
        './core.get-iterator-method': 65
      }
    ],
    21: [
      function(e, t, r) {
        var n = (t.exports =
          'undefined' != typeof window && window.Math == Math
            ? window
            : 'undefined' != typeof self && self.Math == Math
            ? self
            : Function('return this')());
        'number' == typeof __g && (__g = n);
      },
      {}
    ],
    22: [
      function(e, t, r) {
        var n = {}.hasOwnProperty;
        t.exports = function(e, t) {
          return n.call(e, t);
        };
      },
      {}
    ],
    23: [
      function(e, t, r) {
        var n = e('./_object-dp'),
          o = e('./_property-desc');
        t.exports = e('./_descriptors')
          ? function(e, t, r) {
              return n.f(e, t, o(1, r));
            }
          : function(e, t, r) {
              e[t] = r;
              return e;
            };
      },
      { './_descriptors': 15, './_object-dp': 40, './_property-desc': 47 }
    ],
    24: [
      function(e, t, r) {
        var n = e('./_global').document;
        t.exports = n && n.documentElement;
      },
      { './_global': 21 }
    ],
    25: [
      function(e, t, r) {
        t.exports =
          !e('./_descriptors') &&
          !e('./_fails')(function() {
            return (
              7 !=
              Object.defineProperty(e('./_dom-create')('div'), 'a', {
                get: function() {
                  return 7;
                }
              }).a
            );
          });
      },
      { './_descriptors': 15, './_dom-create': 16, './_fails': 19 }
    ],
    26: [
      function(e, t, r) {
        t.exports = function(e, t, r) {
          var n = r === undefined;
          switch (t.length) {
            case 0:
              return n ? e() : e.call(r);
            case 1:
              return n ? e(t[0]) : e.call(r, t[0]);
            case 2:
              return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
            case 3:
              return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
            case 4:
              return n
                ? e(t[0], t[1], t[2], t[3])
                : e.call(r, t[0], t[1], t[2], t[3]);
          }
          return e.apply(r, t);
        };
      },
      {}
    ],
    27: [
      function(e, t, r) {
        var n = e('./_cof');
        t.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function(e) {
              return 'String' == n(e) ? e.split('') : Object(e);
            };
      },
      { './_cof': 11 }
    ],
    28: [
      function(e, t, r) {
        var n = e('./_iterators'),
          o = e('./_wks')('iterator'),
          i = Array.prototype;
        t.exports = function(e) {
          return e !== undefined && (n.Array === e || i[o] === e);
        };
      },
      { './_iterators': 35, './_wks': 64 }
    ],
    29: [
      function(e, t, r) {
        t.exports = function(e) {
          return 'object' == typeof e ? null !== e : 'function' == typeof e;
        };
      },
      {}
    ],
    30: [
      function(e, t, r) {
        var n = e('./_an-object');
        t.exports = function(e, t, r, o) {
          try {
            return o ? t(n(r)[0], r[1]) : t(r);
          } catch (c) {
            var i = e['return'];
            i !== undefined && n(i.call(e));
            throw c;
          }
        };
      },
      { './_an-object': 8 }
    ],
    31: [
      function(e, t, r) {
        'use strict';
        var n = e('./_object-create'),
          o = e('./_property-desc'),
          i = e('./_set-to-string-tag'),
          c = {};
        e('./_hide')(c, e('./_wks')('iterator'), function() {
          return this;
        });
        t.exports = function(e, t, r) {
          e.prototype = n(c, { next: o(1, r) });
          i(e, t + ' Iterator');
        };
      },
      {
        './_hide': 23,
        './_object-create': 39,
        './_property-desc': 47,
        './_set-to-string-tag': 51,
        './_wks': 64
      }
    ],
    32: [
      function(e, t, r) {
        'use strict';
        var n = e('./_library'),
          o = e('./_export'),
          i = e('./_redefine'),
          c = e('./_hide'),
          a = e('./_iterators'),
          s = e('./_iter-create'),
          u = e('./_set-to-string-tag'),
          f = e('./_object-gpo'),
          l = e('./_wks')('iterator'),
          _ = !([].keys && 'next' in [].keys()),
          p = function() {
            return this;
          };
        t.exports = function(e, t, r, d, h, v, m) {
          s(r, t, d);
          var y,
            g,
            b,
            w = function(e) {
              if (!_ && e in N) return N[e];
              switch (e) {
                case 'keys':
                  return function keys() {
                    return new r(this, e);
                  };
                case 'values':
                  return function values() {
                    return new r(this, e);
                  };
              }
              return function entries() {
                return new r(this, e);
              };
            },
            x = t + ' Iterator',
            j = 'values' == h,
            k = !1,
            N = e.prototype,
            P = N[l] || N['@@iterator'] || (h && N[h]),
            E = P || w(h),
            S = h ? (j ? w('entries') : E) : undefined,
            q = ('Array' == t && N.entries) || P;
          if (q && (b = f(q.call(new e()))) !== Object.prototype && b.next) {
            u(b, x, !0);
            n || 'function' == typeof b[l] || c(b, l, p);
          }
          if (j && P && 'values' !== P.name) {
            k = !0;
            E = function values() {
              return P.call(this);
            };
          }
          (n && !m) || (!_ && !k && N[l]) || c(N, l, E);
          a[t] = E;
          a[x] = p;
          if (h) {
            y = {
              values: j ? E : w('values'),
              keys: v ? E : w('keys'),
              entries: S
            };
            if (m) for (g in y) g in N || i(N, g, y[g]);
            else o(o.P + o.F * (_ || k), t, y);
          }
          return y;
        };
      },
      {
        './_export': 18,
        './_hide': 23,
        './_iter-create': 31,
        './_iterators': 35,
        './_library': 36,
        './_object-gpo': 42,
        './_redefine': 49,
        './_set-to-string-tag': 51,
        './_wks': 64
      }
    ],
    33: [
      function(e, t, r) {
        var n = e('./_wks')('iterator'),
          o = !1;
        try {
          var i = [7][n]();
          i['return'] = function() {
            o = !0;
          };
          Array.from(i, function() {
            throw 2;
          });
        } catch (c) {}
        t.exports = function(e, t) {
          if (!t && !o) return !1;
          var r = !1;
          try {
            var i = [7],
              a = i[n]();
            a.next = function() {
              return { done: (r = !0) };
            };
            i[n] = function() {
              return a;
            };
            e(i);
          } catch (c) {}
          return r;
        };
      },
      { './_wks': 64 }
    ],
    34: [
      function(e, t, r) {
        t.exports = function(e, t) {
          return { value: t, done: !!e };
        };
      },
      {}
    ],
    35: [
      function(e, t, r) {
        t.exports = {};
      },
      {}
    ],
    36: [
      function(e, t, r) {
        t.exports = !0;
      },
      {}
    ],
    37: [
      function(e, t, r) {
        var n = e('./_global'),
          o = e('./_task').set,
          i = n.MutationObserver || n.WebKitMutationObserver,
          c = n.process,
          a = n.Promise,
          s = 'process' == e('./_cof')(c);
        t.exports = function() {
          var e,
            t,
            r,
            u = function() {
              var n, o;
              s && (n = c.domain) && n.exit();
              for (; e; ) {
                o = e.fn;
                e = e.next;
                try {
                  o();
                } catch (i) {
                  e ? r() : (t = undefined);
                  throw i;
                }
              }
              t = undefined;
              n && n.enter();
            };
          if (s)
            r = function() {
              c.nextTick(u);
            };
          else if (!i || (n.navigator && n.navigator.standalone))
            if (a && a.resolve) {
              var f = a.resolve();
              r = function() {
                f.then(u);
              };
            } else
              r = function() {
                o.call(n, u);
              };
          else {
            var l = !0,
              _ = document.createTextNode('');
            new i(u).observe(_, { characterData: !0 });
            r = function() {
              _.data = l = !l;
            };
          }
          return function(n) {
            var o = { fn: n, next: undefined };
            t && (t.next = o);
            if (!e) {
              e = o;
              r();
            }
            t = o;
          };
        };
      },
      { './_cof': 11, './_global': 21, './_task': 56 }
    ],
    38: [
      function(e, t, r) {
        'use strict';
        var n = e('./_a-function');
        t.exports.f = function(e) {
          return new function PromiseCapability(e) {
            var t, r;
            this.promise = new e(function(e, n) {
              if (t !== undefined || r !== undefined)
                throw TypeError('Bad Promise constructor');
              t = e;
              r = n;
            });
            this.resolve = n(t);
            this.reject = n(r);
          }(e);
        };
      },
      { './_a-function': 5 }
    ],
    39: [
      function(e, t, r) {
        var n = e('./_an-object'),
          o = e('./_object-dps'),
          i = e('./_enum-bug-keys'),
          c = e('./_shared-key')('IE_PROTO'),
          a = function() {},
          s = function() {
            var t,
              r = e('./_dom-create')('iframe'),
              n = i.length;
            r.style.display = 'none';
            e('./_html').appendChild(r);
            r.src = 'javascript:';
            (t = r.contentWindow.document).open();
            t.write('<script>document.F=Object</script>');
            t.close();
            s = t.F;
            for (; n--; ) delete s.prototype[i[n]];
            return s();
          };
        t.exports =
          Object.create ||
          function create(e, t) {
            var r;
            if (null !== e) {
              a.prototype = n(e);
              r = new a();
              a.prototype = null;
              r[c] = e;
            } else r = s();
            return t === undefined ? r : o(r, t);
          };
      },
      {
        './_an-object': 8,
        './_dom-create': 16,
        './_enum-bug-keys': 17,
        './_html': 24,
        './_object-dps': 41,
        './_shared-key': 52
      }
    ],
    40: [
      function(e, t, r) {
        var n = e('./_an-object'),
          o = e('./_ie8-dom-define'),
          i = e('./_to-primitive'),
          c = Object.defineProperty;
        r.f = e('./_descriptors')
          ? Object.defineProperty
          : function defineProperty(e, t, r) {
              n(e);
              t = i(t, !0);
              n(r);
              if (o)
                try {
                  return c(e, t, r);
                } catch (a) {}
              if ('get' in r || 'set' in r)
                throw TypeError('Accessors not supported!');
              'value' in r && (e[t] = r.value);
              return e;
            };
      },
      {
        './_an-object': 8,
        './_descriptors': 15,
        './_ie8-dom-define': 25,
        './_to-primitive': 62
      }
    ],
    41: [
      function(e, t, r) {
        var n = e('./_object-dp'),
          o = e('./_an-object'),
          i = e('./_object-keys');
        t.exports = e('./_descriptors')
          ? Object.defineProperties
          : function defineProperties(e, t) {
              o(e);
              for (var r, c = i(t), a = c.length, s = 0; a > s; )
                n.f(e, (r = c[s++]), t[r]);
              return e;
            };
      },
      {
        './_an-object': 8,
        './_descriptors': 15,
        './_object-dp': 40,
        './_object-keys': 44
      }
    ],
    42: [
      function(e, t, r) {
        var n = e('./_has'),
          o = e('./_to-object'),
          i = e('./_shared-key')('IE_PROTO'),
          c = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function(e) {
            e = o(e);
            return n(e, i)
              ? e[i]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? c
              : null;
          };
      },
      { './_has': 22, './_shared-key': 52, './_to-object': 61 }
    ],
    43: [
      function(e, t, r) {
        var n = e('./_has'),
          o = e('./_to-iobject'),
          i = e('./_array-includes')(!1),
          c = e('./_shared-key')('IE_PROTO');
        t.exports = function(e, t) {
          var r,
            a = o(e),
            s = 0,
            u = [];
          for (r in a) r != c && n(a, r) && u.push(r);
          for (; t.length > s; ) n(a, (r = t[s++])) && (~i(u, r) || u.push(r));
          return u;
        };
      },
      {
        './_array-includes': 9,
        './_has': 22,
        './_shared-key': 52,
        './_to-iobject': 59
      }
    ],
    44: [
      function(e, t, r) {
        var n = e('./_object-keys-internal'),
          o = e('./_enum-bug-keys');
        t.exports =
          Object.keys ||
          function keys(e) {
            return n(e, o);
          };
      },
      { './_enum-bug-keys': 17, './_object-keys-internal': 43 }
    ],
    45: [
      function(e, t, r) {
        t.exports = function(e) {
          try {
            return { e: !1, v: e() };
          } catch (t) {
            return { e: !0, v: t };
          }
        };
      },
      {}
    ],
    46: [
      function(e, t, r) {
        var n = e('./_an-object'),
          o = e('./_is-object'),
          i = e('./_new-promise-capability');
        t.exports = function(e, t) {
          n(e);
          if (o(t) && t.constructor === e) return t;
          var r = i.f(e);
          (0, r.resolve)(t);
          return r.promise;
        };
      },
      { './_an-object': 8, './_is-object': 29, './_new-promise-capability': 38 }
    ],
    47: [
      function(e, t, r) {
        t.exports = function(e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
          };
        };
      },
      {}
    ],
    48: [
      function(e, t, r) {
        var n = e('./_hide');
        t.exports = function(e, t, r) {
          for (var o in t) r && e[o] ? (e[o] = t[o]) : n(e, o, t[o]);
          return e;
        };
      },
      { './_hide': 23 }
    ],
    49: [
      function(e, t, r) {
        t.exports = e('./_hide');
      },
      { './_hide': 23 }
    ],
    50: [
      function(e, t, r) {
        'use strict';
        var n = e('./_global'),
          o = e('./_core'),
          i = e('./_object-dp'),
          c = e('./_descriptors'),
          a = e('./_wks')('species');
        t.exports = function(e) {
          var t = 'function' == typeof o[e] ? o[e] : n[e];
          c &&
            t &&
            !t[a] &&
            i.f(t, a, {
              configurable: !0,
              get: function() {
                return this;
              }
            });
        };
      },
      {
        './_core': 12,
        './_descriptors': 15,
        './_global': 21,
        './_object-dp': 40,
        './_wks': 64
      }
    ],
    51: [
      function(e, t, r) {
        var n = e('./_object-dp').f,
          o = e('./_has'),
          i = e('./_wks')('toStringTag');
        t.exports = function(e, t, r) {
          e &&
            !o((e = r ? e : e.prototype), i) &&
            n(e, i, { configurable: !0, value: t });
        };
      },
      { './_has': 22, './_object-dp': 40, './_wks': 64 }
    ],
    52: [
      function(e, t, r) {
        var n = e('./_shared')('keys'),
          o = e('./_uid');
        t.exports = function(e) {
          return n[e] || (n[e] = o(e));
        };
      },
      { './_shared': 53, './_uid': 63 }
    ],
    53: [
      function(e, t, r) {
        var n = e('./_global'),
          o = n['__core-js_shared__'] || (n['__core-js_shared__'] = {});
        t.exports = function(e) {
          return o[e] || (o[e] = {});
        };
      },
      { './_global': 21 }
    ],
    54: [
      function(e, t, r) {
        var n = e('./_an-object'),
          o = e('./_a-function'),
          i = e('./_wks')('species');
        t.exports = function(e, t) {
          var r,
            c = n(e).constructor;
          return c === undefined || (r = n(c)[i]) == undefined ? t : o(r);
        };
      },
      { './_a-function': 5, './_an-object': 8, './_wks': 64 }
    ],
    55: [
      function(e, t, r) {
        var n = e('./_to-integer'),
          o = e('./_defined');
        t.exports = function(e) {
          return function(t, r) {
            var i,
              c,
              a = String(o(t)),
              s = n(r),
              u = a.length;
            return s < 0 || s >= u
              ? e
                ? ''
                : undefined
              : (i = a.charCodeAt(s)) < 55296 ||
                i > 56319 ||
                s + 1 === u ||
                (c = a.charCodeAt(s + 1)) < 56320 ||
                c > 57343
              ? e
                ? a.charAt(s)
                : i
              : e
              ? a.slice(s, s + 2)
              : c - 56320 + ((i - 55296) << 10) + 65536;
          };
        };
      },
      { './_defined': 14, './_to-integer': 58 }
    ],
    56: [
      function(e, t, r) {
        var n,
          o,
          i,
          c = e('./_ctx'),
          a = e('./_invoke'),
          s = e('./_html'),
          u = e('./_dom-create'),
          f = e('./_global'),
          l = f.process,
          _ = f.setImmediate,
          p = f.clearImmediate,
          d = f.MessageChannel,
          h = f.Dispatch,
          v = 0,
          m = {},
          y = function() {
            var e = +this;
            if (m.hasOwnProperty(e)) {
              var t = m[e];
              delete m[e];
              t();
            }
          },
          g = function(e) {
            y.call(e.data);
          };
        if (!_ || !p) {
          _ = function setImmediate(e) {
            for (var t = [], r = 1; arguments.length > r; )
              t.push(arguments[r++]);
            m[++v] = function() {
              a('function' == typeof e ? e : Function(e), t);
            };
            n(v);
            return v;
          };
          p = function clearImmediate(e) {
            delete m[e];
          };
          if ('process' == e('./_cof')(l))
            n = function(e) {
              l.nextTick(c(y, e, 1));
            };
          else if (h && h.now)
            n = function(e) {
              h.now(c(y, e, 1));
            };
          else if (d) {
            i = (o = new d()).port2;
            o.port1.onmessage = g;
            n = c(i.postMessage, i, 1);
          } else if (
            f.addEventListener &&
            'function' == typeof postMessage &&
            !f.importScripts
          ) {
            n = function(e) {
              f.postMessage(e + '', '*');
            };
            f.addEventListener('message', g, !1);
          } else
            n =
              'onreadystatechange' in u('script')
                ? function(e) {
                    s.appendChild(u('script')).onreadystatechange = function() {
                      s.removeChild(this);
                      y.call(e);
                    };
                  }
                : function(e) {
                    setTimeout(c(y, e, 1), 0);
                  };
        }
        t.exports = { set: _, clear: p };
      },
      {
        './_cof': 11,
        './_ctx': 13,
        './_dom-create': 16,
        './_global': 21,
        './_html': 24,
        './_invoke': 26
      }
    ],
    57: [
      function(e, t, r) {
        var n = e('./_to-integer'),
          o = Math.max,
          i = Math.min;
        t.exports = function(e, t) {
          return (e = n(e)) < 0 ? o(e + t, 0) : i(e, t);
        };
      },
      { './_to-integer': 58 }
    ],
    58: [
      function(e, t, r) {
        var n = Math.ceil,
          o = Math.floor;
        t.exports = function(e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? o : n)(e);
        };
      },
      {}
    ],
    59: [
      function(e, t, r) {
        var n = e('./_iobject'),
          o = e('./_defined');
        t.exports = function(e) {
          return n(o(e));
        };
      },
      { './_defined': 14, './_iobject': 27 }
    ],
    60: [
      function(e, t, r) {
        var n = e('./_to-integer'),
          o = Math.min;
        t.exports = function(e) {
          return e > 0 ? o(n(e), 9007199254740991) : 0;
        };
      },
      { './_to-integer': 58 }
    ],
    61: [
      function(e, t, r) {
        var n = e('./_defined');
        t.exports = function(e) {
          return Object(n(e));
        };
      },
      { './_defined': 14 }
    ],
    62: [
      function(e, t, r) {
        var n = e('./_is-object');
        t.exports = function(e, t) {
          if (!n(e)) return e;
          var r, o;
          if (t && 'function' == typeof (r = e.toString) && !n((o = r.call(e))))
            return o;
          if ('function' == typeof (r = e.valueOf) && !n((o = r.call(e))))
            return o;
          if (
            !t &&
            'function' == typeof (r = e.toString) &&
            !n((o = r.call(e)))
          )
            return o;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      { './_is-object': 29 }
    ],
    63: [
      function(e, t, r) {
        var n = 0,
          o = Math.random();
        t.exports = function(e) {
          return 'Symbol('.concat(
            e === undefined ? '' : e,
            ')_',
            (++n + o).toString(36)
          );
        };
      },
      {}
    ],
    64: [
      function(e, t, r) {
        var n = e('./_shared')('wks'),
          o = e('./_uid'),
          i = e('./_global').Symbol,
          c = 'function' == typeof i;
        (t.exports = function(e) {
          return n[e] || (n[e] = (c && i[e]) || (c ? i : o)('Symbol.' + e));
        }).store = n;
      },
      { './_global': 21, './_shared': 53, './_uid': 63 }
    ],
    65: [
      function(e, t, r) {
        var n = e('./_classof'),
          o = e('./_wks')('iterator'),
          i = e('./_iterators');
        t.exports = e('./_core').getIteratorMethod = function(e) {
          if (e != undefined) return e[o] || e['@@iterator'] || i[n(e)];
        };
      },
      { './_classof': 10, './_core': 12, './_iterators': 35, './_wks': 64 }
    ],
    66: [
      function(e, t, r) {
        'use strict';
        var n = e('./_add-to-unscopables'),
          o = e('./_iter-step'),
          i = e('./_iterators'),
          c = e('./_to-iobject');
        t.exports = e('./_iter-define')(
          Array,
          'Array',
          function(e, t) {
            this._t = c(e);
            this._i = 0;
            this._k = t;
          },
          function() {
            var e = this._t,
              t = this._k,
              r = this._i++;
            if (!e || r >= e.length) {
              this._t = undefined;
              return o(1);
            }
            return o(0, 'keys' == t ? r : 'values' == t ? e[r] : [r, e[r]]);
          },
          'values'
        );
        i.Arguments = i.Array;
        n('keys');
        n('values');
        n('entries');
      },
      {
        './_add-to-unscopables': 6,
        './_iter-define': 32,
        './_iter-step': 34,
        './_iterators': 35,
        './_to-iobject': 59
      }
    ],
    67: [
      function(e, t, r) {
        var n = e('./_export');
        n(n.S + n.F * !e('./_descriptors'), 'Object', {
          defineProperty: e('./_object-dp').f
        });
      },
      { './_descriptors': 15, './_export': 18, './_object-dp': 40 }
    ],
    68: [function(e, t, r) {}, {}],
    69: [
      function(e, t, r) {
        'use strict';
        var n,
          o,
          i,
          c,
          a = e('./_library'),
          s = e('./_global'),
          u = e('./_ctx'),
          f = e('./_classof'),
          l = e('./_export'),
          _ = e('./_is-object'),
          p = e('./_a-function'),
          d = e('./_an-instance'),
          h = e('./_for-of'),
          v = e('./_species-constructor'),
          m = e('./_task').set,
          y = e('./_microtask')(),
          g = e('./_new-promise-capability'),
          b = e('./_perform'),
          w = e('./_promise-resolve'),
          x = s.TypeError,
          j = s.process,
          k = s.Promise,
          N = 'process' == f(j),
          P = function() {},
          E = (o = g.f),
          S = !!(function() {
            try {
              var t = k.resolve(1),
                r = ((t.constructor = {})[e('./_wks')('species')] = function(
                  e
                ) {
                  e(P, P);
                });
              return (
                (N || 'function' == typeof PromiseRejectionEvent) &&
                t.then(P) instanceof r
              );
            } catch (n) {}
          })(),
          q = function(e) {
            var t;
            return !(!_(e) || 'function' != typeof (t = e.then)) && t;
          },
          O = function(e, t) {
            if (!e._n) {
              e._n = !0;
              var r = e._c;
              y(function() {
                for (
                  var n = e._v,
                    o = 1 == e._s,
                    i = 0,
                    c = function(t) {
                      var r,
                        i,
                        c,
                        a = o ? t.ok : t.fail,
                        s = t.resolve,
                        u = t.reject,
                        f = t.domain;
                      try {
                        if (a) {
                          if (!o) {
                            2 == e._h && R(e);
                            e._h = 1;
                          }
                          if (!0 === a) r = n;
                          else {
                            f && f.enter();
                            r = a(n);
                            if (f) {
                              f.exit();
                              c = !0;
                            }
                          }
                          r === t.promise
                            ? u(x('Promise-chain cycle'))
                            : (i = q(r))
                            ? i.call(r, s, u)
                            : s(r);
                        } else u(n);
                      } catch (l) {
                        f && !c && f.exit();
                        u(l);
                      }
                    };
                  r.length > i;

                )
                  c(r[i++]);
                e._c = [];
                e._n = !1;
                t && !e._h && L(e);
              });
            }
          },
          L = function(e) {
            m.call(s, function() {
              var t,
                r,
                n,
                o = e._v,
                i = C(e);
              if (i) {
                t = b(function() {
                  N
                    ? j.emit('unhandledRejection', o, e)
                    : (r = s.onunhandledrejection)
                    ? r({ promise: e, reason: o })
                    : (n = s.console) &&
                      n.error &&
                      n.error('Unhandled promise rejection', o);
                });
                e._h = N || C(e) ? 2 : 1;
              }
              e._a = undefined;
              if (i && t.e) throw t.v;
            });
          },
          C = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length;
          },
          R = function(e) {
            m.call(s, function() {
              var t;
              N
                ? j.emit('rejectionHandled', e)
                : (t = s.onrejectionhandled) && t({ promise: e, reason: e._v });
            });
          },
          T = function(e) {
            var t = this;
            if (!t._d) {
              t._d = !0;
              (t = t._w || t)._v = e;
              t._s = 2;
              t._a || (t._a = t._c.slice());
              O(t, !0);
            }
          },
          M = function(e) {
            var t,
              r = this;
            if (!r._d) {
              r._d = !0;
              r = r._w || r;
              try {
                if (r === e) throw x("Promise can't be resolved itself");
                if ((t = q(e)))
                  y(function() {
                    var n = { _w: r, _d: !1 };
                    try {
                      t.call(e, u(M, n, 1), u(T, n, 1));
                    } catch (o) {
                      T.call(n, o);
                    }
                  });
                else {
                  r._v = e;
                  r._s = 1;
                  O(r, !1);
                }
              } catch (n) {
                T.call({ _w: r, _d: !1 }, n);
              }
            }
          };
        if (!S) {
          k = function Promise(e) {
            d(this, k, 'Promise', '_h');
            p(e);
            n.call(this);
            try {
              e(u(M, this, 1), u(T, this, 1));
            } catch (t) {
              T.call(this, t);
            }
          };
          (n = function Promise(e) {
            this._c = [];
            this._a = undefined;
            this._s = 0;
            this._d = !1;
            this._v = undefined;
            this._h = 0;
            this._n = !1;
          }).prototype = e('./_redefine-all')(k.prototype, {
            then: function then(e, t) {
              var r = E(v(this, k));
              r.ok = 'function' != typeof e || e;
              r.fail = 'function' == typeof t && t;
              r.domain = N ? j.domain : undefined;
              this._c.push(r);
              this._a && this._a.push(r);
              this._s && O(this, !1);
              return r.promise;
            },
            catch: function(e) {
              return this.then(undefined, e);
            }
          });
          i = function() {
            var e = new n();
            this.promise = e;
            this.resolve = u(M, e, 1);
            this.reject = u(T, e, 1);
          };
          g.f = E = function(e) {
            return e === k || e === c ? new i(e) : o(e);
          };
        }
        l(l.G + l.W + l.F * !S, { Promise: k });
        e('./_set-to-string-tag')(k, 'Promise');
        e('./_set-species')('Promise');
        c = e('./_core').Promise;
        l(l.S + l.F * !S, 'Promise', {
          reject: function reject(e) {
            var t = E(this);
            (0, t.reject)(e);
            return t.promise;
          }
        });
        l(l.S + l.F * (a || !S), 'Promise', {
          resolve: function resolve(e) {
            return w(a && this === c ? k : this, e);
          }
        });
        l(
          l.S +
            l.F *
              !(
                S &&
                e('./_iter-detect')(function(e) {
                  k.all(e)['catch'](P);
                })
              ),
          'Promise',
          {
            all: function all(e) {
              var t = this,
                r = E(t),
                n = r.resolve,
                o = r.reject,
                i = b(function() {
                  var r = [],
                    i = 0,
                    c = 1;
                  h(e, !1, function(e) {
                    var a = i++,
                      s = !1;
                    r.push(undefined);
                    c++;
                    t.resolve(e).then(function(e) {
                      if (!s) {
                        s = !0;
                        r[a] = e;
                        --c || n(r);
                      }
                    }, o);
                  });
                  --c || n(r);
                });
              i.e && o(i.v);
              return r.promise;
            },
            race: function race(e) {
              var t = this,
                r = E(t),
                n = r.reject,
                o = b(function() {
                  h(e, !1, function(e) {
                    t.resolve(e).then(r.resolve, n);
                  });
                });
              o.e && n(o.v);
              return r.promise;
            }
          }
        );
      },
      {
        './_a-function': 5,
        './_an-instance': 7,
        './_classof': 10,
        './_core': 12,
        './_ctx': 13,
        './_export': 18,
        './_for-of': 20,
        './_global': 21,
        './_is-object': 29,
        './_iter-detect': 33,
        './_library': 36,
        './_microtask': 37,
        './_new-promise-capability': 38,
        './_perform': 45,
        './_promise-resolve': 46,
        './_redefine-all': 48,
        './_set-species': 50,
        './_set-to-string-tag': 51,
        './_species-constructor': 54,
        './_task': 56,
        './_wks': 64
      }
    ],
    70: [
      function(e, t, r) {
        'use strict';
        var n = e('./_string-at')(!0);
        e('./_iter-define')(
          String,
          'String',
          function(e) {
            this._t = String(e);
            this._i = 0;
          },
          function() {
            var e,
              t = this._t,
              r = this._i;
            if (r >= t.length) return { value: undefined, done: !0 };
            e = n(t, r);
            this._i += e.length;
            return { value: e, done: !1 };
          }
        );
      },
      { './_iter-define': 32, './_string-at': 55 }
    ],
    71: [
      function(e, t, r) {
        'use strict';
        var n = e('./_export'),
          o = e('./_core'),
          i = e('./_global'),
          c = e('./_species-constructor'),
          a = e('./_promise-resolve');
        n(n.P + n.R, 'Promise', {
          finally: function(e) {
            var t = c(this, o.Promise || i.Promise),
              r = 'function' == typeof e;
            return this.then(
              r
                ? function(r) {
                    return a(t, e()).then(function() {
                      return r;
                    });
                  }
                : e,
              r
                ? function(r) {
                    return a(t, e()).then(function() {
                      throw r;
                    });
                  }
                : e
            );
          }
        });
      },
      {
        './_core': 12,
        './_export': 18,
        './_global': 21,
        './_promise-resolve': 46,
        './_species-constructor': 54
      }
    ],
    72: [
      function(e, t, r) {
        'use strict';
        var n = e('./_export'),
          o = e('./_new-promise-capability'),
          i = e('./_perform');
        n(n.S, 'Promise', {
          try: function(e) {
            var t = o.f(this),
              r = i(e);
            (r.e ? t.reject : t.resolve)(r.v);
            return t.promise;
          }
        });
      },
      { './_export': 18, './_new-promise-capability': 38, './_perform': 45 }
    ],
    73: [
      function(e, t, r) {
        e('./es6.array.iterator');
        for (
          var n = e('./_global'),
            o = e('./_hide'),
            i = e('./_iterators'),
            c = e('./_wks')('toStringTag'),
            a = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
              ','
            ),
            s = 0;
          s < a.length;
          s++
        ) {
          var u = a[s],
            f = n[u],
            l = f && f.prototype;
          l && !l[c] && o(l, c, u);
          i[u] = i.Array;
        }
      },
      {
        './_global': 21,
        './_hide': 23,
        './_iterators': 35,
        './_wks': 64,
        './es6.array.iterator': 66
      }
    ],
    74: [
      function(e, t, r) {
        var n =
            (function() {
              return this;
            })() || Function('return this')(),
          o =
            n.regeneratorRuntime &&
            Object.getOwnPropertyNames(n).indexOf('regeneratorRuntime') >= 0,
          i = o && n.regeneratorRuntime;
        n.regeneratorRuntime = undefined;
        t.exports = e('./runtime');
        if (o) n.regeneratorRuntime = i;
        else
          try {
            delete n.regeneratorRuntime;
          } catch (c) {
            n.regeneratorRuntime = undefined;
          }
      },
      { './runtime': 75 }
    ],
    75: [
      function(e, t, r) {
        !(function(e) {
          'use strict';
          var r,
            n = Object.prototype,
            o = n.hasOwnProperty,
            i = 'function' == typeof Symbol ? Symbol : {},
            c = i.iterator || '@@iterator',
            a = i.asyncIterator || '@@asyncIterator',
            s = i.toStringTag || '@@toStringTag',
            u = 'object' == typeof t,
            f = e.regeneratorRuntime;
          if (f) u && (t.exports = f);
          else {
            (f = e.regeneratorRuntime = u ? t.exports : {}).wrap = wrap;
            var l = 'suspendedStart',
              _ = 'suspendedYield',
              p = 'executing',
              d = 'completed',
              h = {},
              v = {};
            v[c] = function() {
              return this;
            };
            var m = Object.getPrototypeOf,
              y = m && m(m(values([])));
            y && y !== n && o.call(y, c) && (v = y);
            var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
              v
            ));
            GeneratorFunction.prototype = g.constructor = GeneratorFunctionPrototype;
            GeneratorFunctionPrototype.constructor = GeneratorFunction;
            GeneratorFunctionPrototype[s] = GeneratorFunction.displayName =
              'GeneratorFunction';
            f.isGeneratorFunction = function(e) {
              var t = 'function' == typeof e && e.constructor;
              return (
                !!t &&
                (t === GeneratorFunction ||
                  'GeneratorFunction' === (t.displayName || t.name))
              );
            };
            f.mark = function(e) {
              if (Object.setPrototypeOf)
                Object.setPrototypeOf(e, GeneratorFunctionPrototype);
              else {
                e.__proto__ = GeneratorFunctionPrototype;
                s in e || (e[s] = 'GeneratorFunction');
              }
              e.prototype = Object.create(g);
              return e;
            };
            f.awrap = function(e) {
              return { __await: e };
            };
            defineIteratorMethods(AsyncIterator.prototype);
            AsyncIterator.prototype[a] = function() {
              return this;
            };
            f.AsyncIterator = AsyncIterator;
            f.async = function(e, t, r, n) {
              var o = new AsyncIterator(wrap(e, t, r, n));
              return f.isGeneratorFunction(t)
                ? o
                : o.next().then(function(e) {
                    return e.done ? e.value : o.next();
                  });
            };
            defineIteratorMethods(g);
            g[s] = 'Generator';
            g[c] = function() {
              return this;
            };
            g.toString = function() {
              return '[object Generator]';
            };
            f.keys = function(e) {
              var t = [];
              for (var r in e) t.push(r);
              t.reverse();
              return function next() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) {
                    next.value = r;
                    next.done = !1;
                    return next;
                  }
                }
                next.done = !0;
                return next;
              };
            };
            f.values = values;
            Context.prototype = {
              constructor: Context,
              reset: function(e) {
                this.prev = 0;
                this.next = 0;
                this.sent = this._sent = r;
                this.done = !1;
                this.delegate = null;
                this.method = 'next';
                this.arg = r;
                this.tryEntries.forEach(resetTryEntry);
                if (!e)
                  for (var t in this)
                    't' === t.charAt(0) &&
                      o.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = r);
              },
              stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ('throw' === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                function handle(n, o) {
                  c.type = 'throw';
                  c.arg = e;
                  t.next = n;
                  if (o) {
                    t.method = 'next';
                    t.arg = r;
                  }
                  return !!o;
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n],
                    c = i.completion;
                  if ('root' === i.tryLoc) return handle('end');
                  if (i.tryLoc <= this.prev) {
                    var a = o.call(i, 'catchLoc'),
                      s = o.call(i, 'finallyLoc');
                    if (a && s) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (a) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          'try statement without catch or finally'
                        );
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function(e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    o.call(n, 'finallyLoc') &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ('break' === e || 'continue' === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var c = i ? i.completion : {};
                c.type = e;
                c.arg = t;
                if (i) {
                  this.method = 'next';
                  this.next = i.finallyLoc;
                  return h;
                }
                return this.complete(c);
              },
              complete: function(e, t) {
                if ('throw' === e.type) throw e.arg;
                if ('break' === e.type || 'continue' === e.type)
                  this.next = e.arg;
                else if ('return' === e.type) {
                  this.rval = this.arg = e.arg;
                  this.method = 'return';
                  this.next = 'end';
                } else 'normal' === e.type && t && (this.next = t);
                return h;
              },
              finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e) {
                    this.complete(r.completion, r.afterLoc);
                    resetTryEntry(r);
                    return h;
                  }
                }
              },
              catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function(e, t, n) {
                this.delegate = {
                  iterator: values(e),
                  resultName: t,
                  nextLoc: n
                };
                'next' === this.method && (this.arg = r);
                return h;
              }
            };
          }
          function wrap(e, t, r, n) {
            var o = t && t.prototype instanceof Generator ? t : Generator,
              i = Object.create(o.prototype),
              c = new Context(n || []);
            i._invoke = (function makeInvokeMethod(e, t, r) {
              var n = l;
              return function invoke(o, i) {
                if (n === p) throw new Error('Generator is already running');
                if (n === d) {
                  if ('throw' === o) throw i;
                  return doneResult();
                }
                r.method = o;
                r.arg = i;
                for (;;) {
                  var c = r.delegate;
                  if (c) {
                    var a = maybeInvokeDelegate(c, r);
                    if (a) {
                      if (a === h) continue;
                      return a;
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg;
                  else if ('throw' === r.method) {
                    if (n === l) {
                      n = d;
                      throw r.arg;
                    }
                    r.dispatchException(r.arg);
                  } else 'return' === r.method && r.abrupt('return', r.arg);
                  n = p;
                  var s = tryCatch(e, t, r);
                  if ('normal' === s.type) {
                    n = r.done ? d : _;
                    if (s.arg === h) continue;
                    return { value: s.arg, done: r.done };
                  }
                  if ('throw' === s.type) {
                    n = d;
                    r.method = 'throw';
                    r.arg = s.arg;
                  }
                }
              };
            })(e, r, c);
            return i;
          }
          function tryCatch(e, t, r) {
            try {
              return { type: 'normal', arg: e.call(t, r) };
            } catch (n) {
              return { type: 'throw', arg: n };
            }
          }
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          function defineIteratorMethods(e) {
            ['next', 'throw', 'return'].forEach(function(t) {
              e[t] = function(e) {
                return this._invoke(t, e);
              };
            });
          }
          function AsyncIterator(e) {
            var t;
            this._invoke = function enqueue(r, n) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function(t, i) {
                  !(function invoke(t, r, n, i) {
                    var c = tryCatch(e[t], e, r);
                    if ('throw' !== c.type) {
                      var a = c.arg,
                        s = a.value;
                      return s && 'object' == typeof s && o.call(s, '__await')
                        ? Promise.resolve(s.__await).then(
                            function(e) {
                              invoke('next', e, n, i);
                            },
                            function(e) {
                              invoke('throw', e, n, i);
                            }
                          )
                        : Promise.resolve(s).then(function(e) {
                            a.value = e;
                            n(a);
                          }, i);
                    }
                    i(c.arg);
                  })(r, n, t, i);
                });
              }
              return (t = t
                ? t.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                : callInvokeWithMethodAndArg());
            };
          }
          function maybeInvokeDelegate(e, t) {
            var n = e.iterator[t.method];
            if (n === r) {
              t.delegate = null;
              if ('throw' === t.method) {
                if (e.iterator['return']) {
                  t.method = 'return';
                  t.arg = r;
                  maybeInvokeDelegate(e, t);
                  if ('throw' === t.method) return h;
                }
                t.method = 'throw';
                t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                );
              }
              return h;
            }
            var o = tryCatch(n, e.iterator, t.arg);
            if ('throw' === o.type) {
              t.method = 'throw';
              t.arg = o.arg;
              t.delegate = null;
              return h;
            }
            var i = o.arg;
            if (!i) {
              t.method = 'throw';
              t.arg = new TypeError('iterator result is not an object');
              t.delegate = null;
              return h;
            }
            if (!i.done) return i;
            t[e.resultName] = i.value;
            t.next = e.nextLoc;
            if ('return' !== t.method) {
              t.method = 'next';
              t.arg = r;
            }
            t.delegate = null;
            return h;
          }
          function pushTryEntry(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]);
            if (2 in e) {
              t.finallyLoc = e[2];
              t.afterLoc = e[3];
            }
            this.tryEntries.push(t);
          }
          function resetTryEntry(e) {
            var t = e.completion || {};
            t.type = 'normal';
            delete t.arg;
            e.completion = t;
          }
          function Context(e) {
            this.tryEntries = [{ tryLoc: 'root' }];
            e.forEach(pushTryEntry, this);
            this.reset(!0);
          }
          function values(e) {
            if (e) {
              var t = e[c];
              if (t) return t.call(e);
              if ('function' == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  i = function next() {
                    for (; ++n < e.length; )
                      if (o.call(e, n)) {
                        next.value = e[n];
                        next.done = !1;
                        return next;
                      }
                    next.value = r;
                    next.done = !0;
                    return next;
                  };
                return (i.next = i);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: r, done: !0 };
          }
        })(
          (function() {
            return this;
          })() || Function('return this')()
        );
      },
      {}
    ],
    'babel-runtime/helpers/asyncToGenerator': [
      function(e, t, r) {
        'use strict';
        r.__esModule = !0;
        var n = (function _interopRequireDefault(e) {
          return e && e.__esModule ? e : { default: e };
        })(e('../core-js/promise'));
        r['default'] = function(e) {
          return function() {
            var t = e.apply(this, arguments);
            return new n['default'](function(e, r) {
              return (function step(o, i) {
                try {
                  var c = t[o](i),
                    a = c.value;
                } catch (s) {
                  r(s);
                  return;
                }
                if (!c.done)
                  return n['default'].resolve(a).then(
                    function(e) {
                      step('next', e);
                    },
                    function(e) {
                      step('throw', e);
                    }
                  );
                e(a);
              })('next');
            });
          };
        };
      },
      { '../core-js/promise': 2 }
    ],
    'babel-runtime/helpers/classCallCheck': [
      function(e, t, r) {
        'use strict';
        r.__esModule = !0;
        r['default'] = function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        };
      },
      {}
    ],
    'babel-runtime/helpers/createClass': [
      function(e, t, r) {
        'use strict';
        r.__esModule = !0;
        var n = (function _interopRequireDefault(e) {
          return e && e.__esModule ? e : { default: e };
        })(e('../core-js/object/define-property'));
        r['default'] = (function() {
          function defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              o.enumerable = o.enumerable || !1;
              o.configurable = !0;
              'value' in o && (o.writable = !0);
              (0, n['default'])(e, o.key, o);
            }
          }
          return function(e, t, r) {
            t && defineProperties(e.prototype, t);
            r && defineProperties(e, r);
            return e;
          };
        })();
      },
      { '../core-js/object/define-property': 1 }
    ],
    'babel-runtime/regenerator': [
      function(e, t, r) {
        t.exports = e('regenerator-runtime');
      },
      { 'regenerator-runtime': 74 }
    ]
  },
  {},
  []
);
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck'),
  _classCallCheck3 = _interopRequireDefault(_classCallCheck2),
  _createClass2 = require('babel-runtime/helpers/createClass'),
  _createClass3 = _interopRequireDefault(_createClass2);
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var WindowDetector = (function() {
  (0, _createClass3['default'])(WindowDetector, null, [
    {
      key: 'get',
      value: function get() {
        WindowDetector._instance ||
          (WindowDetector._instance = new WindowDetector());
        return WindowDetector._instance;
      }
    },
    {
      key: 'KEY_PING',
      get: function get() {
        return 'WindowDetector.PING';
      }
    },
    {
      key: 'KEY_PONG',
      get: function get() {
        return 'WindowDetector.PONG';
      }
    },
    {
      key: 'KEY_BYE',
      get: function get() {
        return 'WindowDetector.BYE';
      }
    }
  ]);
  function WindowDetector() {
    var e = this;
    (0, _classCallCheck3['default'])(this, WindowDetector);
    window.addEventListener('storage', function(t) {
      t.key === WindowDetector.KEY_PING && e._pong(t.newValue);
    });
    window.addEventListener('unload', function() {
      e._bye();
    });
  }
  (0, _createClass3['default'])(WindowDetector, [
    {
      key: 'isSingleWindow',
      value: function isSingleWindow() {
        var e = this;
        return new Promise(function(t) {
          var r = Math.round(Math.random() * Number.MAX_SAFE_INTEGER),
            n = setTimeout(function() {
              window.removeEventListener('storage', o);
              t(!0);
            }, 500),
            o = function listener(e) {
              if (e.key === WindowDetector.KEY_PONG && e.newValue == r) {
                clearTimeout(n);
                window.removeEventListener('storage', listener);
                t(!1);
              }
            };
          window.addEventListener('storage', o);
          e._ping(r);
        });
      }
    },
    {
      key: 'waitForSingleWindow',
      value: function waitForSingleWindow(e, t) {
        var r = this;
        this.isSingleWindow().then(function(n) {
          if (n) e();
          else {
            t && t();
            window.addEventListener('storage', function _listener(t) {
              if (t.key === WindowDetector.KEY_BYE) {
                window.removeEventListener('storage', _listener);
                r.waitForSingleWindow(e, undefined);
              }
            });
          }
        });
      }
    },
    {
      key: '_ping',
      value: function _ping(e) {
        localStorage.setItem(WindowDetector.KEY_PING, e);
      }
    },
    {
      key: '_pong',
      value: function _pong(e) {
        localStorage.setItem(WindowDetector.KEY_PONG, e);
      }
    },
    {
      key: '_bye',
      value: function _bye() {
        localStorage.setItem(WindowDetector.KEY_BYE, Date.now());
      }
    }
  ]);
  return WindowDetector;
})();
WindowDetector._instance = null;
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck'),
  _classCallCheck3 = _interopRequireDefault(_classCallCheck2),
  _createClass2 = require('babel-runtime/helpers/createClass'),
  _createClass3 = _interopRequireDefault(_createClass2);
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var Nimiq = (function() {
  function Nimiq() {
    (0, _classCallCheck3['default'])(this, Nimiq);
  }
  (0, _createClass3['default'])(Nimiq, null, [
    {
      key: 'load',
      value: function load(e) {
        return Nimiq._load(e, 'web');
      }
    },
    {
      key: 'loadOffline',
      value: function loadOffline(e) {
        return Nimiq._load(e, 'web-offline');
      }
    },
    {
      key: '_load',
      value: function _load(e, t) {
        if (!Nimiq._hasNativePromise()) return Nimiq._unsupportedPromise();
        if (Nimiq._loaded) return Promise.resolve();
        Nimiq._loadPromise =
          Nimiq._loadPromise ||
          new Promise(function(r, n) {
            if (!Nimiq._script) {
              if (
                !Nimiq._hasNativeClassSupport() ||
                !Nimiq._hasProperScoping()
              ) {
                console.error('Unsupported browser');
                n(Nimiq.ERR_UNSUPPORTED);
                return;
              }
              if (Nimiq._hasAsyncAwaitSupport()) Nimiq._script = t + '.js';
              else {
                Nimiq._script = t + '-babel.js';
                console.warn('Client lacks native support for async');
              }
            }
            e ||
              (e =
                Nimiq._currentScript &&
                -1 !== Nimiq._currentScript.src.indexOf('/')
                  ? Nimiq._currentScript.src.substring(
                      0,
                      Nimiq._currentScript.src.lastIndexOf('/') + 1
                    )
                  : './');
            Nimiq._path = e;
            Nimiq._fullScript = Nimiq._path + Nimiq._script;
            Nimiq._onload = function() {
              Nimiq._loaded ? r() : n(Nimiq.ERR_UNKNOWN);
            };
            Nimiq._loadScript(Nimiq._fullScript);
          }).then(function() {
            return new Promise(function(e, t) {
              return Nimiq.WasmHelper.doImportBrowser()
                .then(e)
                ['catch'](t.bind(null, Nimiq.ERR_UNKNOWN));
            });
          });
        return Nimiq._loadPromise;
      }
    },
    {
      key: '_loadScript',
      value: function _loadScript(e) {
        var t = document.getElementsByTagName('head')[0],
          r = document.createElement('script');
        r.type = 'text/javascript';
        r.src = e;
        t.appendChild(r);
      }
    },
    {
      key: 'loadToScope',
      value: function loadToScope() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return Nimiq.load().then(function() {
          var e = !0,
            r = !1,
            n = undefined;
          try {
            for (
              var o, i = t[Symbol.iterator]();
              !(e = (o = i.next()).done);
              e = !0
            ) {
              var c = o.value;
              self[c] = Nimiq[c];
            }
          } catch (a) {
            r = !0;
            n = a;
          } finally {
            try {
              !e && i['return'] && i['return']();
            } finally {
              if (r) throw n;
            }
          }
        });
      }
    },
    {
      key: '_hasNativeClassSupport',
      value: function _hasNativeClassSupport() {
        try {
          eval('"use strict"; class A{}');
          return !0;
        } catch (err) {
          return !1;
        }
      }
    },
    {
      key: '_hasAsyncAwaitSupport',
      value: function _hasAsyncAwaitSupport() {
        try {
          eval('"use strict"; (async function() { await {}; })()');
          return !0;
        } catch (err) {
          return !1;
        }
      }
    },
    {
      key: '_hasProperScoping',
      value: function _hasProperScoping() {
        try {
          eval('"use strict"; class a{ a() { const a = 0; } }');
          return !0;
        } catch (err) {
          return !1;
        }
      }
    },
    {
      key: '_hasNativePromise',
      value: function _hasNativePromise() {
        return window.Promise;
      }
    },
    {
      key: '_unsupportedPromise',
      value: function _unsupportedPromise() {
        return {
          catch: function _catch(e) {
            e(Nimiq.ERR_UNSUPPORTED);
            return this;
          },
          then: function then() {
            return this;
          }
        };
      }
    },
    {
      key: '_hasNativeGoodies',
      value: function _hasNativeGoodies() {
        return window.Number && window.Number.isInteger;
      }
    },
    {
      key: 'init',
      value: function init(e, t) {
        Nimiq._hasNativePromise() && Nimiq._hasNativeGoodies()
          ? WindowDetector.get().waitForSingleWindow(
              function() {
                Nimiq.load()
                  .then(function() {
                    console.log('Nimiq engine loaded.');
                    e && e();
                  })
                  ['catch'](function(e) {
                    if (Number.isInteger(e)) t && t(e);
                    else {
                      console.error('Error while initializing the core', e);
                      t && t(Nimiq.ERR_UNKNOWN);
                    }
                  });
              },
              function() {
                t && t(Nimiq.ERR_WAIT);
              }
            )
          : t && t(Nimiq.ERR_UNSUPPORTED);
      }
    }
  ]);
  return Nimiq;
})();
Nimiq._currentScript = document.currentScript;
if (!Nimiq._currentScript) {
  var scripts = document.getElementsByTagName('script');
  Nimiq._currentScript = scripts[scripts.length - 1];
}
Nimiq.ERR_WAIT = -1;
Nimiq.ERR_UNSUPPORTED = -2;
Nimiq.ERR_UNKNOWN = -3;
Nimiq._script = null;
Nimiq._path = null;
Nimiq._fullScript = null;
Nimiq._onload = null;
Nimiq._loaded = !1;
Nimiq._loadPromise = null;
//# sourceMappingURL=nimiq.js.map
