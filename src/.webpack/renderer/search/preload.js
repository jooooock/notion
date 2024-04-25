/*! For license information please see preload.js.LICENSE.txt */
(() => {
    "use strict";
    const __modules = {
        870: function (e, t, o) {
            var n = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.createIntlShape = t.getMessages = void 0;
            const a = o(343), r = n(o(813)), i = n(o(687)), s = n(o(499)), l = n(o(545)), p = n(o(395)), d = n(o(993)),
                u = n(o(290)), c = n(o(332)), b = n(o(996)), h = n(o(969)), m = n(o(301)), k = n(o(144)), T = n(o(596)),
                g = n(o(44));

            function f(e) {
                return {
                    "ko-KR": c.default,
                    "es-ES": l.default,
                    "es-LA": s.default,
                    "fr-FR": d.default,
                    "ja-JP": u.default,
                    "pt-BR": m.default,
                    "zh-CN": T.default,
                    "zh-TW": g.default,
                    "de-DE": i.default,
                    "da-DK": r.default,
                    "fi-FI": p.default,
                    "nb-NO": b.default,
                    "nl-NL": h.default,
                    "sv-SE": k.default
                }[e]
            }

            t.getMessages = f, t.createIntlShape = function (e) {
                const t = f(e), o = (0, a.createIntlCache)();
                return (0, a.createIntl)({locale: e, defaultLocale: "en-US", messages: t}, o)
            }
        },
        263: function (e, t, o) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, o, n) {
                void 0 === n && (n = o);
                var a = Object.getOwnPropertyDescriptor(t, o);
                a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                    enumerable: !0,
                    get: function () {
                        return t[o]
                    }
                }), Object.defineProperty(e, n, a)
            } : function (e, t, o, n) {
                void 0 === n && (n = o), e[n] = t[o]
            }), a = this && this.__exportStar || function (e, t) {
                for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || n(t, e, o)
            }, r = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.select = t.plural = t.number = void 0;
            var i = o(302);
            Object.defineProperty(t, "number", {
                enumerable: !0, get: function () {
                    return r(i).default
                }
            }), a(o(302), t);
            var s = o(453);
            Object.defineProperty(t, "plural", {
                enumerable: !0, get: function () {
                    return r(s).default
                }
            }), a(o(453), t);
            var l = o(467);
            Object.defineProperty(t, "select", {
                enumerable: !0, get: function () {
                    return r(l).default
                }
            }), a(o(467), t)
        },
        302: (e, t) => {
            function o(e) {
                return null != e
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.isNotNullish = void 0, t.isNotNullish = o, t.default = function (e, {
                notation: t,
                unit: n,
                perUnit: a,
                unitWidth: r,
                precision: i,
                roundingMode: s,
                integerWidth: l,
                scale: p,
                grouping: d,
                symbols: u,
                sign: c,
                decimal: b
            } = {}) {
                const h = [t, n, a, r, i, s, l, p, d, u, c, b].filter(o).join(" ");
                return h ? `{${e}, number, :: ${h}}` : `{${e}, number}`
            }
        },
        453: (e, t) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
                return `{${e}, plural, ${Object.entries(t).map((([e, t]) => `${e} {${t}}`)).join(" ")}}`
            }
        },
        467: (e, t) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, {other: t, ...o}) {
                return `{${e}, select, ${Object.entries({...o, other: t}).map((([e, t]) => `${e} {${t}}`)).join(" ")}}`
            }
        },
        343: function (e, t, o) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, o, n) {
                void 0 === n && (n = o);
                var a = Object.getOwnPropertyDescriptor(t, o);
                a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                    enumerable: !0,
                    get: function () {
                        return t[o]
                    }
                }), Object.defineProperty(e, n, a)
            } : function (e, t, o, n) {
                void 0 === n && (n = o), e[n] = t[o]
            }), a = this && this.__exportStar || function (e, t) {
                for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || n(t, e, o)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.createIntlCache = t.createIntl = t.RawIntlProvider = t.IntlProvider = t.FormattedNumber = t.FormattedMessage = t.FormattedList = t.FormattedDate = t.useIntl = t.injectIntl = t.defineMessages = void 0;
            const r = o(588);
            Symbol.for("LocalizedString"), Symbol("defined message descriptor"), t.defineMessages = function (e) {
                return e
            }, t.injectIntl = function (e) {
                return (0, r.injectIntl)(e)
            }, t.useIntl = r.useIntl, a(o(263), t);
            var i = o(588);
            Object.defineProperty(t, "FormattedDate", {
                enumerable: !0, get: function () {
                    return i.FormattedDate
                }
            }), Object.defineProperty(t, "FormattedList", {
                enumerable: !0, get: function () {
                    return i.FormattedList
                }
            }), Object.defineProperty(t, "FormattedMessage", {
                enumerable: !0, get: function () {
                    return i.FormattedMessage
                }
            }), Object.defineProperty(t, "FormattedNumber", {
                enumerable: !0, get: function () {
                    return i.FormattedNumber
                }
            }), Object.defineProperty(t, "IntlProvider", {
                enumerable: !0, get: function () {
                    return i.IntlProvider
                }
            }), Object.defineProperty(t, "RawIntlProvider", {
                enumerable: !0, get: function () {
                    return i.RawIntlProvider
                }
            }), Object.defineProperty(t, "createIntl", {
                enumerable: !0, get: function () {
                    return i.createIntl
                }
            }), Object.defineProperty(t, "createIntlCache", {
                enumerable: !0, get: function () {
                    return i.createIntlCache
                }
            })
        },
        902: (e, t) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.getContentfulSupportedLocale = t.getContentfulLocale = t.localeFormatter = t.allLocales = t.deprecatedLocales = t.defaultLocale = t.getLocaleFromCookie = t.externalLocaleToNotionLocale = t.isSupportedLanguageCode = t.isPreferredLanguageCode = t.isPreferredLocaleOrigin = t.isPreferredLocaleExtended = t.isPreferredLocale = t.isBetaLocale = t.isDevelopmentLocale = t.languageCodeToPreferredLocaleExtended = t.languageCodeToPreferredLocale = t.countryToPreferredLocale = t.preferredContentfulLocales = t.ALL_LOCALE_ROUTES = t.VALID_PREFERRED_LOCALE_ROUTES_IN_DEVELOPMENT = t.ALL_LOCALES = t.VALID_PREFERRED_LOCALES_IN_DEVELOPMENT = t.PSEUDOLOCALES = t.VALID_PREFERRED_LOCALES_IN_BETA = t.VALID_PREFERRED_LOCALES = t.VALID_PREFERRED_LOCALES_FOR_MARKETING = void 0, t.VALID_PREFERRED_LOCALES_FOR_MARKETING = ["en-US", "ko-KR", "ja-JP", "fr-FR", "de-DE", "es-ES", "es-LA", "pt-BR"], t.VALID_PREFERRED_LOCALES = ["en-US", "ko-KR", "ja-JP", "fr-FR", "de-DE", "es-ES", "es-LA", "pt-BR", "fi-FI", "da-DK", "nl-NL", "nb-NO", "sv-SE"], t.VALID_PREFERRED_LOCALES_IN_BETA = ["ja-JP", "zh-CN", "zh-TW", "da-DK", "nl-NL", "fi-FI", "da-DK", "nl-NL", "nb-NO", "sv-SE"], t.PSEUDOLOCALES = ["pseudo"], t.VALID_PREFERRED_LOCALES_IN_DEVELOPMENT = ["zh-CN", "zh-TW", ...t.PSEUDOLOCALES], t.ALL_LOCALES = [...t.VALID_PREFERRED_LOCALES, ...t.VALID_PREFERRED_LOCALES_IN_BETA, ...t.VALID_PREFERRED_LOCALES_IN_DEVELOPMENT], t.VALID_PREFERRED_LOCALE_ROUTES_IN_DEVELOPMENT = t.VALID_PREFERRED_LOCALES_IN_DEVELOPMENT.map((e => {
                const t = e.split("-").join(""), o = e.toLocaleLowerCase();
                return {[t]: `/${o}`}
            })).reduce(((e, t) => Object.assign(e, t)), {}), t.ALL_LOCALE_ROUTES = t.ALL_LOCALES.map((e => {
                const t = e.split("-").join(""), o = e.toLocaleLowerCase();
                return {[t]: `/${o}`}
            })).reduce(((e, t) => Object.assign(e, t)), {});
            const o = ["autodetect", "user_choice", "legacy", "inferred_from_inviter"];
            t.preferredContentfulLocales = {
                "es-LA": "es-419",
                "zh-TW": "zh-Hant-TW",
                pseudo: "yav"
            }, t.countryToPreferredLocale = {
                KR: "ko-KR",
                US: "en-US",
                JA: "ja-JP",
                FR: "fr-FR",
                DE: "de-DE",
                ES: "es-ES",
                BR: "pt-BR",
                AR: "es-LA",
                BO: "es-LA",
                CL: "es-LA",
                CO: "es-LA",
                CR: "es-LA",
                CU: "es-LA",
                DO: "es-LA",
                EC: "es-LA",
                SV: "es-LA",
                GT: "es-LA",
                HN: "es-LA",
                MX: "es-LA",
                NI: "es-LA",
                PA: "es-LA",
                PY: "es-LA",
                PE: "es-LA",
                PR: "es-LA",
                UY: "es-LA",
                VE: "es-LA"
            };
            const n = ["en", "ko", "ja", "fr", "de", "es", "pt", "fi", "da", "nl", "nb", "sv"],
                a = ["es", "fr", "pt", "zh"];

            function r(e) {
                return t.VALID_PREFERRED_LOCALES_IN_DEVELOPMENT.includes(e)
            }

            function i(e) {
                return t.VALID_PREFERRED_LOCALES.includes(e)
            }

            function s(e) {
                return i(e) || r(e)
            }

            function l(e) {
                return n.includes(e)
            }

            function p(e) {
                return l(e) || a.includes(e)
            }

            function d(e) {
                return e && t.deprecatedLocales.includes(e) ? t.defaultLocale : e?.replace(/(\-[a-z])\w+/g, (e => e.toUpperCase()))?.replace(/([A-Z]*[A-Z]\-)+/gm, (e => e.toLocaleLowerCase())) || t.defaultLocale
            }

            t.languageCodeToPreferredLocale = {
                de: "de-DE",
                ko: "ko-KR",
                en: "en-US",
                es: "es-LA",
                fr: "fr-FR",
                ja: "ja-JP",
                pt: "pt-BR",
                fi: "fi-FI",
                da: "da-DK",
                nl: "nl-NL",
                nb: "nb-NO",
                sv: "sv-SE"
            }, t.languageCodeToPreferredLocaleExtended = {
                de: "de-DE",
                ko: "ko-KR",
                en: "en-US",
                es: "es-LA",
                fr: "fr-FR",
                ja: "ja-JP",
                pt: "pt-BR",
                zh: "zh-CN",
                da: "da-DK",
                fi: "fi-FI",
                nl: "nl-NL",
                nb: "nb-NO",
                sv: "sv-SE"
            }, t.isDevelopmentLocale = r, t.isBetaLocale = function (e) {
                return t.VALID_PREFERRED_LOCALES_IN_BETA.includes(e)
            }, t.isPreferredLocale = i, t.isPreferredLocaleExtended = s, t.isPreferredLocaleOrigin = function (e) {
                return o.includes(e)
            }, t.isPreferredLanguageCode = l, t.isSupportedLanguageCode = p, t.externalLocaleToNotionLocale = function (e, o) {
                const [n, a] = e.split("-");
                return n && !a && (Boolean(o) && l(n) || p(n)) ? t.languageCodeToPreferredLocaleExtended[n] : Boolean(o) && i(e) || s(e) ? e : "en-US"
            }, t.getLocaleFromCookie = function (e) {
                if ("" === e) return "en-US";
                const [t] = decodeURIComponent(e).split("/");
                return t && s(t) ? t : "en-US"
            }, t.defaultLocale = "en-US", t.deprecatedLocales = ["ko"], t.allLocales = "*", t.localeFormatter = d, t.getContentfulLocale = function (e) {
                const o = d(e);
                return t.preferredContentfulLocales[o] || o
            }, t.getContentfulSupportedLocale = function (e) {
                const o = d(e);
                return [...t.VALID_PREFERRED_LOCALES, ...t.VALID_PREFERRED_LOCALES_IN_DEVELOPMENT, ...t.VALID_PREFERRED_LOCALES_IN_BETA].includes(o) ? o : t.defaultLocale
            }
        },
        664: (e, t, o) => {
            var n = o(129), a = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                }, r = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
                i = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, s = {};

            function l(e) {
                return n.isMemo(e) ? i : s[e.$$typeof] || a
            }

            s[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, s[n.Memo] = i;
            var p = Object.defineProperty, d = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols,
                c = Object.getOwnPropertyDescriptor, b = Object.getPrototypeOf, h = Object.prototype;
            e.exports = function e(t, o, n) {
                if ("string" != typeof o) {
                    if (h) {
                        var a = b(o);
                        a && a !== h && e(t, a, n)
                    }
                    var i = d(o);
                    u && (i = i.concat(u(o)));
                    for (var s = l(t), m = l(o), k = 0; k < i.length; ++k) {
                        var T = i[k];
                        if (!(r[T] || n && n[T] || m && m[T] || s && s[T])) {
                            var g = c(o, T);
                            try {
                                p(t, T, g)
                            } catch (e) {
                            }
                        }
                    }
                }
                return t
            }
        },
        588: (e, t, o) => {
            o.r(t), o.d(t, {
                FormattedDate: () => oo,
                FormattedDateParts: () => so,
                FormattedDateTimeRange: () => Yt,
                FormattedDisplayName: () => io,
                FormattedList: () => ro,
                FormattedListParts: () => at,
                FormattedMessage: () => Xt,
                FormattedNumber: () => ao,
                FormattedNumberParts: () => nt,
                FormattedPlural: () => $t,
                FormattedRelativeTime: () => qt,
                FormattedTime: () => no,
                FormattedTimeParts: () => lo,
                IntlContext: () => et,
                IntlProvider: () => Ht,
                InvalidConfigError: () => _e,
                MessageFormatError: () => Ue,
                MissingDataError: () => Fe,
                MissingTranslationError: () => je,
                RawIntlProvider: () => Ye,
                ReactIntlError: () => De,
                ReactIntlErrorCode: () => Ce,
                UnsupportedFormatterError: () => Oe,
                createIntl: () => _t,
                createIntlCache: () => Ve,
                defineMessage: () => to,
                defineMessages: () => eo,
                injectIntl: () => tt,
                useIntl: () => ot
            });
            var n = function (e, t) {
                return n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }, n(e, t)
            };

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function o() {
                    this.constructor = e
                }

                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }

            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++) for (var a in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, r.apply(this, arguments)
            };

            function i(e, t) {
                var o = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (o[n[a]] = e[n[a]])
                }
                return o
            }

            function s(e, t, o) {
                if (o || 2 === arguments.length) for (var n, a = 0, r = t.length; a < r; a++) !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
            var l, p, d, u = o(794), c = o(664), b = o.n(c);

            function h(e, t, o) {
                if (void 0 === o && (o = Error), !e) throw new o(t)
            }

            function m(e) {
                return e.type === p.literal
            }

            function k(e) {
                return e.type === p.argument
            }

            function T(e) {
                return e.type === p.number
            }

            function g(e) {
                return e.type === p.date
            }

            function f(e) {
                return e.type === p.time
            }

            function M(e) {
                return e.type === p.select
            }

            function v(e) {
                return e.type === p.plural
            }

            function w(e) {
                return e.type === p.pound
            }

            function y(e) {
                return e.type === p.tag
            }

            function E(e) {
                return !(!e || "object" != typeof e || e.type !== d.number)
            }

            function L(e) {
                return !(!e || "object" != typeof e || e.type !== d.dateTime)
            }

            !function (e) {
                e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
            }(l || (l = {})), function (e) {
                e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
            }(p || (p = {})), function (e) {
                e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
            }(d || (d = {}));
            var S = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                A = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

            function N(e) {
                var t = {};
                return e.replace(A, (function (e) {
                    var o = e.length;
                    switch (e[0]) {
                        case"G":
                            t.era = 4 === o ? "long" : 5 === o ? "narrow" : "short";
                            break;
                        case"y":
                            t.year = 2 === o ? "2-digit" : "numeric";
                            break;
                        case"Y":
                        case"u":
                        case"U":
                        case"r":
                            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                        case"q":
                        case"Q":
                            throw new RangeError("`q/Q` (quarter) patterns are not supported");
                        case"M":
                        case"L":
                            t.month = ["numeric", "2-digit", "short", "long", "narrow"][o - 1];
                            break;
                        case"w":
                        case"W":
                            throw new RangeError("`w/W` (week) patterns are not supported");
                        case"d":
                            t.day = ["numeric", "2-digit"][o - 1];
                            break;
                        case"D":
                        case"F":
                        case"g":
                            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                        case"E":
                            t.weekday = 4 === o ? "short" : 5 === o ? "narrow" : "short";
                            break;
                        case"e":
                            if (o < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][o - 4];
                            break;
                        case"c":
                            if (o < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][o - 4];
                            break;
                        case"a":
                            t.hour12 = !0;
                            break;
                        case"b":
                        case"B":
                            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                        case"h":
                            t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][o - 1];
                            break;
                        case"H":
                            t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][o - 1];
                            break;
                        case"K":
                            t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][o - 1];
                            break;
                        case"k":
                            t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][o - 1];
                            break;
                        case"j":
                        case"J":
                        case"C":
                            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                        case"m":
                            t.minute = ["numeric", "2-digit"][o - 1];
                            break;
                        case"s":
                            t.second = ["numeric", "2-digit"][o - 1];
                            break;
                        case"S":
                        case"A":
                            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                        case"z":
                            t.timeZoneName = o < 4 ? "short" : "long";
                            break;
                        case"Z":
                        case"O":
                        case"v":
                        case"V":
                        case"X":
                        case"x":
                            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                    }
                    return ""
                })), t
            }

            var I = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i, B = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                P = /^(@+)?(\+|#+)?[rs]?$/g, C = /(\*)(0+)|(#+)(0+)|(0+)/g, R = /^(0+)$/;

            function D(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(P, (function (e, o, n) {
                    return "string" != typeof n ? (t.minimumSignificantDigits = o.length, t.maximumSignificantDigits = o.length) : "+" === n ? t.minimumSignificantDigits = o.length : "#" === o[0] ? t.maximumSignificantDigits = o.length : (t.minimumSignificantDigits = o.length, t.maximumSignificantDigits = o.length + ("string" == typeof n ? n.length : 0)), ""
                })), t
            }

            function O(e) {
                switch (e) {
                    case"sign-auto":
                        return {signDisplay: "auto"};
                    case"sign-accounting":
                    case"()":
                        return {currencySign: "accounting"};
                    case"sign-always":
                    case"+!":
                        return {signDisplay: "always"};
                    case"sign-accounting-always":
                    case"()!":
                        return {signDisplay: "always", currencySign: "accounting"};
                    case"sign-except-zero":
                    case"+?":
                        return {signDisplay: "exceptZero"};
                    case"sign-accounting-except-zero":
                    case"()?":
                        return {signDisplay: "exceptZero", currencySign: "accounting"};
                    case"sign-never":
                    case"+_":
                        return {signDisplay: "never"}
                }
            }

            function _(e) {
                var t;
                if ("E" === e[0] && "E" === e[1] ? (t = {notation: "engineering"}, e = e.slice(2)) : "E" === e[0] && (t = {notation: "scientific"}, e = e.slice(1)), t) {
                    var o = e.slice(0, 2);
                    if ("+!" === o ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === o && (t.signDisplay = "exceptZero", e = e.slice(2)), !R.test(e)) throw new Error("Malformed concise eng/scientific notation");
                    t.minimumIntegerDigits = e.length
                }
                return t
            }

            function F(e) {
                return O(e) || {}
            }

            function H(e) {
                for (var t = {}, o = 0, n = e; o < n.length; o++) {
                    var a = n[o];
                    switch (a.stem) {
                        case"percent":
                        case"%":
                            t.style = "percent";
                            continue;
                        case"%x100":
                            t.style = "percent", t.scale = 100;
                            continue;
                        case"currency":
                            t.style = "currency", t.currency = a.options[0];
                            continue;
                        case"group-off":
                        case",_":
                            t.useGrouping = !1;
                            continue;
                        case"precision-integer":
                        case".":
                            t.maximumFractionDigits = 0;
                            continue;
                        case"measure-unit":
                        case"unit":
                            t.style = "unit", t.unit = a.options[0].replace(/^(.*?)-/, "");
                            continue;
                        case"compact-short":
                        case"K":
                            t.notation = "compact", t.compactDisplay = "short";
                            continue;
                        case"compact-long":
                        case"KK":
                            t.notation = "compact", t.compactDisplay = "long";
                            continue;
                        case"scientific":
                            t = r(r(r({}, t), {notation: "scientific"}), a.options.reduce((function (e, t) {
                                return r(r({}, e), F(t))
                            }), {}));
                            continue;
                        case"engineering":
                            t = r(r(r({}, t), {notation: "engineering"}), a.options.reduce((function (e, t) {
                                return r(r({}, e), F(t))
                            }), {}));
                            continue;
                        case"notation-simple":
                            t.notation = "standard";
                            continue;
                        case"unit-width-narrow":
                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                            continue;
                        case"unit-width-short":
                            t.currencyDisplay = "code", t.unitDisplay = "short";
                            continue;
                        case"unit-width-full-name":
                            t.currencyDisplay = "name", t.unitDisplay = "long";
                            continue;
                        case"unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                        case"scale":
                            t.scale = parseFloat(a.options[0]);
                            continue;
                        case"integer-width":
                            if (a.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                            a.options[0].replace(C, (function (e, o, n, a, r, i) {
                                if (o) t.minimumIntegerDigits = n.length; else {
                                    if (a && r) throw new Error("We currently do not support maximum integer digits");
                                    if (i) throw new Error("We currently do not support exact integer digits")
                                }
                                return ""
                            }));
                            continue
                    }
                    if (R.test(a.stem)) t.minimumIntegerDigits = a.stem.length; else if (B.test(a.stem)) {
                        if (a.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                        a.stem.replace(B, (function (e, o, n, a, r, i) {
                            return "*" === n ? t.minimumFractionDigits = o.length : a && "#" === a[0] ? t.maximumFractionDigits = a.length : r && i ? (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length + i.length) : (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length), ""
                        }));
                        var i = a.options[0];
                        "w" === i ? t = r(r({}, t), {trailingZeroDisplay: "stripIfInteger"}) : i && (t = r(r({}, t), D(i)))
                    } else if (P.test(a.stem)) t = r(r({}, t), D(a.stem)); else {
                        var s = O(a.stem);
                        s && (t = r(r({}, t), s));
                        var l = _(a.stem);
                        l && (t = r(r({}, t), l))
                    }
                }
                return t
            }

            var U, j = {
                "001": ["H", "h"],
                AC: ["H", "h", "hb", "hB"],
                AD: ["H", "hB"],
                AE: ["h", "hB", "hb", "H"],
                AF: ["H", "hb", "hB", "h"],
                AG: ["h", "hb", "H", "hB"],
                AI: ["H", "h", "hb", "hB"],
                AL: ["h", "H", "hB"],
                AM: ["H", "hB"],
                AO: ["H", "hB"],
                AR: ["H", "h", "hB", "hb"],
                AS: ["h", "H"],
                AT: ["H", "hB"],
                AU: ["h", "hb", "H", "hB"],
                AW: ["H", "hB"],
                AX: ["H"],
                AZ: ["H", "hB", "h"],
                BA: ["H", "hB", "h"],
                BB: ["h", "hb", "H", "hB"],
                BD: ["h", "hB", "H"],
                BE: ["H", "hB"],
                BF: ["H", "hB"],
                BG: ["H", "hB", "h"],
                BH: ["h", "hB", "hb", "H"],
                BJ: ["H", "hB"],
                BL: ["H", "hB"],
                BM: ["h", "hb", "H", "hB"],
                BN: ["hb", "hB", "h", "H"],
                BO: ["H", "hB", "h", "hb"],
                BQ: ["H"],
                BR: ["H", "hB"],
                BS: ["h", "hb", "H", "hB"],
                BT: ["h", "H"],
                BW: ["H", "h", "hb", "hB"],
                BZ: ["H", "h", "hb", "hB"],
                CA: ["h", "hb", "H", "hB"],
                CC: ["H", "h", "hb", "hB"],
                CD: ["hB", "H"],
                CF: ["H", "h", "hB"],
                CG: ["H", "hB"],
                CH: ["H", "hB", "h"],
                CI: ["H", "hB"],
                CK: ["H", "h", "hb", "hB"],
                CL: ["H", "h", "hB", "hb"],
                CM: ["H", "h", "hB"],
                CN: ["H", "hB", "hb", "h"],
                CO: ["h", "H", "hB", "hb"],
                CP: ["H"],
                CR: ["H", "h", "hB", "hb"],
                CU: ["H", "h", "hB", "hb"],
                CV: ["H", "hB"],
                CX: ["H", "h", "hb", "hB"],
                CY: ["h", "H", "hb", "hB"],
                CZ: ["H"],
                DE: ["H", "hB"],
                DG: ["H", "h", "hb", "hB"],
                DJ: ["h", "H"],
                DK: ["H"],
                DM: ["h", "hb", "H", "hB"],
                DO: ["h", "H", "hB", "hb"],
                DZ: ["h", "hB", "hb", "H"],
                EA: ["H", "h", "hB", "hb"],
                EC: ["H", "hB", "h", "hb"],
                EE: ["H", "hB"],
                EG: ["h", "hB", "hb", "H"],
                EH: ["h", "hB", "hb", "H"],
                ER: ["h", "H"],
                ES: ["H", "hB", "h", "hb"],
                ET: ["hB", "hb", "h", "H"],
                FI: ["H"],
                FJ: ["h", "hb", "H", "hB"],
                FK: ["H", "h", "hb", "hB"],
                FM: ["h", "hb", "H", "hB"],
                FR: ["H", "hB"],
                GA: ["H", "hB"],
                GB: ["H", "h", "hb", "hB"],
                GD: ["h", "hb", "H", "hB"],
                GE: ["H", "hB", "h"],
                GF: ["H", "hB"],
                GG: ["H", "h", "hb", "hB"],
                GH: ["h", "H"],
                GI: ["H", "h", "hb", "hB"],
                GM: ["h", "hb", "H", "hB"],
                GN: ["H", "hB"],
                GP: ["H", "hB"],
                GQ: ["H", "hB", "h", "hb"],
                GR: ["h", "H", "hb", "hB"],
                GT: ["H", "h", "hB", "hb"],
                GU: ["h", "hb", "H", "hB"],
                GW: ["H", "hB"],
                GY: ["h", "hb", "H", "hB"],
                HK: ["h", "hB", "hb", "H"],
                HN: ["H", "h", "hB", "hb"],
                HR: ["H", "hB"],
                IC: ["H", "h", "hB", "hb"],
                ID: ["H"],
                IE: ["H", "h", "hb", "hB"],
                IL: ["H", "hB"],
                IM: ["H", "h", "hb", "hB"],
                IN: ["h", "H"],
                IO: ["H", "h", "hb", "hB"],
                IQ: ["h", "hB", "hb", "H"],
                IR: ["hB", "H"],
                IS: ["H"],
                IT: ["H", "hB"],
                JE: ["H", "h", "hb", "hB"],
                JM: ["h", "hb", "H", "hB"],
                JO: ["h", "hB", "hb", "H"],
                JP: ["H", "h", "K"],
                KE: ["hB", "hb", "H", "h"],
                KG: ["H", "h", "hB", "hb"],
                KH: ["hB", "h", "H", "hb"],
                KI: ["h", "hb", "H", "hB"],
                KM: ["H", "h", "hB", "hb"],
                KN: ["h", "hb", "H", "hB"],
                KP: ["h", "H", "hB", "hb"],
                KR: ["h", "H", "hB", "hb"],
                KW: ["h", "hB", "hb", "H"],
                KY: ["h", "hb", "H", "hB"],
                KZ: ["H", "hB"],
                LA: ["H", "hb", "hB", "h"],
                LB: ["h", "hB", "hb", "H"],
                LC: ["h", "hb", "H", "hB"],
                LI: ["H", "hB", "h"],
                LK: ["H", "h", "hB", "hb"],
                LR: ["h", "hb", "H", "hB"],
                LS: ["h", "H"],
                LT: ["H", "h", "hb", "hB"],
                LU: ["H", "h", "hB"],
                LV: ["H", "hB", "hb", "h"],
                LY: ["h", "hB", "hb", "H"],
                MA: ["H", "h", "hB", "hb"],
                MC: ["H", "hB"],
                MD: ["H", "hB"],
                ME: ["H", "hB", "h"],
                MF: ["H", "hB"],
                MH: ["h", "hb", "H", "hB"],
                MK: ["H", "h", "hb", "hB"],
                ML: ["H"],
                MM: ["hB", "hb", "H", "h"],
                MN: ["H", "h", "hb", "hB"],
                MO: ["h", "hB", "hb", "H"],
                MP: ["h", "hb", "H", "hB"],
                MQ: ["H", "hB"],
                MR: ["h", "hB", "hb", "H"],
                MS: ["H", "h", "hb", "hB"],
                MW: ["h", "hb", "H", "hB"],
                MX: ["H", "h", "hB", "hb"],
                MY: ["hb", "hB", "h", "H"],
                MZ: ["H", "hB"],
                NA: ["h", "H", "hB", "hb"],
                NC: ["H", "hB"],
                NE: ["H"],
                NF: ["H", "h", "hb", "hB"],
                NG: ["H", "h", "hb", "hB"],
                NI: ["H", "h", "hB", "hb"],
                NL: ["H", "hB"],
                NP: ["H", "h", "hB"],
                NR: ["H", "h", "hb", "hB"],
                NU: ["H", "h", "hb", "hB"],
                NZ: ["h", "hb", "H", "hB"],
                OM: ["h", "hB", "hb", "H"],
                PA: ["h", "H", "hB", "hb"],
                PE: ["H", "hB", "h", "hb"],
                PF: ["H", "h", "hB"],
                PG: ["h", "H"],
                PH: ["h", "hB", "hb", "H"],
                PK: ["h", "hB", "H"],
                PM: ["H", "hB"],
                PN: ["H", "h", "hb", "hB"],
                PR: ["h", "H", "hB", "hb"],
                PS: ["h", "hB", "hb", "H"],
                PT: ["H", "hB"],
                PW: ["h", "H"],
                PY: ["H", "h", "hB", "hb"],
                QA: ["h", "hB", "hb", "H"],
                RE: ["H", "hB"],
                RO: ["H", "hB"],
                RS: ["H", "hB", "h"],
                RU: ["H"],
                SA: ["h", "hB", "hb", "H"],
                SB: ["h", "hb", "H", "hB"],
                SC: ["H", "h", "hB"],
                SD: ["h", "hB", "hb", "H"],
                SE: ["H"],
                SG: ["h", "hb", "H", "hB"],
                SH: ["H", "h", "hb", "hB"],
                SI: ["H", "hB"],
                SJ: ["H"],
                SK: ["H"],
                SL: ["h", "hb", "H", "hB"],
                SM: ["H", "h", "hB"],
                SN: ["H", "h", "hB"],
                SO: ["h", "H"],
                SR: ["H", "hB"],
                SS: ["h", "hb", "H", "hB"],
                ST: ["H", "hB"],
                SV: ["H", "h", "hB", "hb"],
                SX: ["H", "h", "hb", "hB"],
                SY: ["h", "hB", "hb", "H"],
                SZ: ["h", "hb", "H", "hB"],
                TA: ["H", "h", "hb", "hB"],
                TC: ["h", "hb", "H", "hB"],
                TD: ["h", "H", "hB"],
                TF: ["H", "h", "hB"],
                TG: ["H", "hB"],
                TL: ["H", "hB", "hb", "h"],
                TN: ["h", "hB", "hb", "H"],
                TO: ["h", "H"],
                TR: ["H", "hB"],
                TT: ["h", "hb", "H", "hB"],
                TW: ["hB", "hb", "h", "H"],
                TZ: ["hB", "hb", "H", "h"],
                UA: ["H", "hB", "h"],
                UG: ["hB", "hb", "H", "h"],
                UM: ["h", "hb", "H", "hB"],
                US: ["h", "hb", "H", "hB"],
                UY: ["H", "h", "hB", "hb"],
                UZ: ["H", "hB", "h"],
                VA: ["H", "h", "hB"],
                VC: ["h", "hb", "H", "hB"],
                VE: ["h", "H", "hB", "hb"],
                VG: ["h", "hb", "H", "hB"],
                VI: ["h", "hb", "H", "hB"],
                VU: ["h", "H"],
                WF: ["H", "hB"],
                WS: ["h", "H"],
                XK: ["H", "hB", "h"],
                YE: ["h", "hB", "hb", "H"],
                YT: ["H", "hB"],
                ZA: ["H", "h", "hb", "hB"],
                ZM: ["h", "hb", "H", "hB"],
                "af-ZA": ["H", "h", "hB", "hb"],
                "ar-001": ["h", "hB", "hb", "H"],
                "ca-ES": ["H", "h", "hB"],
                "en-001": ["h", "hb", "H", "hB"],
                "es-BO": ["H", "h", "hB", "hb"],
                "es-BR": ["H", "h", "hB", "hb"],
                "es-EC": ["H", "h", "hB", "hb"],
                "es-ES": ["H", "h", "hB", "hb"],
                "es-GQ": ["H", "h", "hB", "hb"],
                "es-PE": ["H", "h", "hB", "hb"],
                "fr-CA": ["H", "h", "hB"],
                "gl-ES": ["H", "h", "hB"],
                "gu-IN": ["hB", "hb", "h", "H"],
                "hi-IN": ["hB", "h", "H"],
                "it-CH": ["H", "h", "hB"],
                "it-IT": ["H", "h", "hB"],
                "kn-IN": ["hB", "h", "H"],
                "ml-IN": ["hB", "h", "H"],
                "mr-IN": ["hB", "hb", "h", "H"],
                "pa-IN": ["hB", "hb", "h", "H"],
                "ta-IN": ["hB", "h", "hb", "H"],
                "te-IN": ["hB", "h", "H"],
                "zu-ZA": ["H", "hB", "hb", "h"]
            };

            function x(e) {
                var t = e.hourCycle;
                if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
                    case"h24":
                        return "k";
                    case"h23":
                        return "H";
                    case"h12":
                        return "h";
                    case"h11":
                        return "K";
                    default:
                        throw new Error("Invalid hourCycle")
                }
                var o, n = e.language;
                return "root" !== n && (o = e.maximize().region), (j[o || ""] || j[n || ""] || j["".concat(n, "-001")] || j["001"])[0]
            }

            var z = new RegExp("^".concat(S.source, "*")), V = new RegExp("".concat(S.source, "*$"));

            function G(e, t) {
                return {start: e, end: t}
            }

            var W = !!String.prototype.startsWith, q = !!String.fromCodePoint, K = !!Object.fromEntries,
                $ = !!String.prototype.codePointAt, Z = !!String.prototype.trimStart, Q = !!String.prototype.trimEnd,
                X = Number.isSafeInteger ? Number.isSafeInteger : function (e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
                }, J = !0;
            try {
                J = "a" === (null === (U = ie("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === U ? void 0 : U[0])
            } catch (e) {
                J = !1
            }
            var Y, ee = W ? function (e, t, o) {
                return e.startsWith(t, o)
            } : function (e, t, o) {
                return e.slice(o, o + t.length) === t
            }, te = q ? String.fromCodePoint : function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var o, n = "", a = e.length, r = 0; a > r;) {
                    if ((o = e[r++]) > 1114111) throw RangeError(o + " is not a valid code point");
                    n += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(55296 + ((o -= 65536) >> 10), o % 1024 + 56320)
                }
                return n
            }, oe = K ? Object.fromEntries : function (e) {
                for (var t = {}, o = 0, n = e; o < n.length; o++) {
                    var a = n[o], r = a[0], i = a[1];
                    t[r] = i
                }
                return t
            }, ne = $ ? function (e, t) {
                return e.codePointAt(t)
            } : function (e, t) {
                var o = e.length;
                if (!(t < 0 || t >= o)) {
                    var n, a = e.charCodeAt(t);
                    return a < 55296 || a > 56319 || t + 1 === o || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? a : n - 56320 + (a - 55296 << 10) + 65536
                }
            }, ae = Z ? function (e) {
                return e.trimStart()
            } : function (e) {
                return e.replace(z, "")
            }, re = Q ? function (e) {
                return e.trimEnd()
            } : function (e) {
                return e.replace(V, "")
            };

            function ie(e, t) {
                return new RegExp(e, t)
            }

            if (J) {
                var se = ie("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                Y = function (e, t) {
                    var o;
                    return se.lastIndex = t, null !== (o = se.exec(e)[1]) && void 0 !== o ? o : ""
                }
            } else Y = function (e, t) {
                for (var o = []; ;) {
                    var n = ne(e, t);
                    if (void 0 === n || de(n) || ue(n)) break;
                    o.push(n), t += n >= 65536 ? 2 : 1
                }
                return te.apply(void 0, o)
            };
            var le = function () {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }

                return e.prototype.parse = function () {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function (e, t, o) {
                    for (var n = []; !this.isEOF();) {
                        var a = this.char();
                        if (123 === a) {
                            if ((r = this.parseArgument(e, o)).err) return r;
                            n.push(r.val)
                        } else {
                            if (125 === a && e > 0) break;
                            if (35 !== a || "plural" !== t && "selectordinal" !== t) {
                                if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                                    if (o) break;
                                    return this.error(l.UNMATCHED_CLOSING_TAG, G(this.clonePosition(), this.clonePosition()))
                                }
                                if (60 === a && !this.ignoreTag && pe(this.peek() || 0)) {
                                    if ((r = this.parseTag(e, t)).err) return r;
                                    n.push(r.val)
                                } else {
                                    var r;
                                    if ((r = this.parseLiteral(e, t)).err) return r;
                                    n.push(r.val)
                                }
                            } else {
                                var i = this.clonePosition();
                                this.bump(), n.push({type: p.pound, location: G(i, this.clonePosition())})
                            }
                        }
                    }
                    return {val: n, err: null}
                }, e.prototype.parseTag = function (e, t) {
                    var o = this.clonePosition();
                    this.bump();
                    var n = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: p.literal,
                            value: "<".concat(n, "/>"),
                            location: G(o, this.clonePosition())
                        }, err: null
                    };
                    if (this.bumpIf(">")) {
                        var a = this.parseMessage(e + 1, t, !0);
                        if (a.err) return a;
                        var r = a.val, i = this.clonePosition();
                        if (this.bumpIf("</")) {
                            if (this.isEOF() || !pe(this.char())) return this.error(l.INVALID_TAG, G(i, this.clonePosition()));
                            var s = this.clonePosition();
                            return n !== this.parseTagName() ? this.error(l.UNMATCHED_CLOSING_TAG, G(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                                val: {
                                    type: p.tag,
                                    value: n,
                                    children: r,
                                    location: G(o, this.clonePosition())
                                }, err: null
                            } : this.error(l.INVALID_TAG, G(i, this.clonePosition())))
                        }
                        return this.error(l.UNCLOSED_TAG, G(o, this.clonePosition()))
                    }
                    return this.error(l.INVALID_TAG, G(o, this.clonePosition()))
                }, e.prototype.parseTagName = function () {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function (e, t) {
                    for (var o = this.clonePosition(), n = ""; ;) {
                        var a = this.tryParseQuote(t);
                        if (a) n += a; else {
                            var r = this.tryParseUnquoted(e, t);
                            if (r) n += r; else {
                                var i = this.tryParseLeftAngleBracket();
                                if (!i) break;
                                n += i
                            }
                        }
                    }
                    var s = G(o, this.clonePosition());
                    return {val: {type: p.literal, value: n, location: s}, err: null}
                }, e.prototype.tryParseLeftAngleBracket = function () {
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (pe(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
                    var e
                }, e.prototype.tryParseQuote = function (e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var o = this.char();
                        if (39 === o) {
                            if (39 !== this.peek()) {
                                this.bump();
                                break
                            }
                            t.push(39), this.bump()
                        } else t.push(o);
                        this.bump()
                    }
                    return te.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function (e, t) {
                    if (this.isEOF()) return null;
                    var o = this.char();
                    return 60 === o || 123 === o || 35 === o && ("plural" === t || "selectordinal" === t) || 125 === o && e > 0 ? null : (this.bump(), te(o))
                }, e.prototype.parseArgument = function (e, t) {
                    var o = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, G(o, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(l.EMPTY_ARGUMENT, G(o, this.clonePosition()));
                    var n = this.parseIdentifierIfPossible().value;
                    if (!n) return this.error(l.MALFORMED_ARGUMENT, G(o, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, G(o, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: p.argument,
                                    value: n,
                                    location: G(o, this.clonePosition())
                                }, err: null
                            };
                        case 44:
                            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, G(o, this.clonePosition())) : this.parseArgumentOptions(e, t, n, o);
                        default:
                            return this.error(l.MALFORMED_ARGUMENT, G(o, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function () {
                    var e = this.clonePosition(), t = this.offset(), o = Y(this.message, t), n = t + o.length;
                    return this.bumpTo(n), {value: o, location: G(e, this.clonePosition())}
                }, e.prototype.parseArgumentOptions = function (e, t, o, n) {
                    var a, i = this.clonePosition(), s = this.parseIdentifierIfPossible().value,
                        u = this.clonePosition();
                    switch (s) {
                        case"":
                            return this.error(l.EXPECT_ARGUMENT_TYPE, G(i, u));
                        case"number":
                        case"date":
                        case"time":
                            this.bumpSpace();
                            var c = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var b = this.clonePosition();
                                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                                if (0 === (T = re(v.val)).length) return this.error(l.EXPECT_ARGUMENT_STYLE, G(this.clonePosition(), this.clonePosition()));
                                c = {style: T, styleLocation: G(b, this.clonePosition())}
                            }
                            if ((w = this.tryParseArgumentClose(n)).err) return w;
                            var h = G(n, this.clonePosition());
                            if (c && ee(null == c ? void 0 : c.style, "::", 0)) {
                                var m = ae(c.style.slice(2));
                                if ("number" === s) return (v = this.parseNumberSkeletonFromString(m, c.styleLocation)).err ? v : {
                                    val: {
                                        type: p.number,
                                        value: o,
                                        location: h,
                                        style: v.val
                                    }, err: null
                                };
                                if (0 === m.length) return this.error(l.EXPECT_DATE_TIME_SKELETON, h);
                                var k = m;
                                this.locale && (k = function (e, t) {
                                    for (var o = "", n = 0; n < e.length; n++) {
                                        var a = e.charAt(n);
                                        if ("j" === a) {
                                            for (var r = 0; n + 1 < e.length && e.charAt(n + 1) === a;) r++, n++;
                                            var i = 1 + (1 & r), s = r < 2 ? 1 : 3 + (r >> 1), l = x(t);
                                            for ("H" != l && "k" != l || (s = 0); s-- > 0;) o += "a";
                                            for (; i-- > 0;) o = l + o
                                        } else o += "J" === a ? "H" : a
                                    }
                                    return o
                                }(m, this.locale));
                                var T = {
                                    type: d.dateTime,
                                    pattern: k,
                                    location: c.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? N(k) : {}
                                };
                                return {
                                    val: {type: "date" === s ? p.date : p.time, value: o, location: h, style: T},
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === s ? p.number : "date" === s ? p.date : p.time,
                                    value: o,
                                    location: h,
                                    style: null !== (a = null == c ? void 0 : c.style) && void 0 !== a ? a : null
                                }, err: null
                            };
                        case"plural":
                        case"selectordinal":
                        case"select":
                            var g = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(l.EXPECT_SELECT_ARGUMENT_OPTIONS, G(g, r({}, g)));
                            this.bumpSpace();
                            var f = this.parseIdentifierIfPossible(), M = 0;
                            if ("select" !== s && "offset" === f.value) {
                                if (!this.bumpIf(":")) return this.error(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, G(this.clonePosition(), this.clonePosition()));
                                var v;
                                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, l.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                                this.bumpSpace(), f = this.parseIdentifierIfPossible(), M = v.val
                            }
                            var w, y = this.tryParsePluralOrSelectOptions(e, s, t, f);
                            if (y.err) return y;
                            if ((w = this.tryParseArgumentClose(n)).err) return w;
                            var E = G(n, this.clonePosition());
                            return "select" === s ? {
                                val: {type: p.select, value: o, options: oe(y.val), location: E},
                                err: null
                            } : {
                                val: {
                                    type: p.plural,
                                    value: o,
                                    options: oe(y.val),
                                    offset: M,
                                    pluralType: "plural" === s ? "cardinal" : "ordinal",
                                    location: E
                                }, err: null
                            };
                        default:
                            return this.error(l.INVALID_ARGUMENT_TYPE, G(i, u))
                    }
                }, e.prototype.tryParseArgumentClose = function (e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, G(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function () {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
                        case 39:
                            this.bump();
                            var o = this.clonePosition();
                            if (!this.bumpUntil("'")) return this.error(l.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, G(o, this.clonePosition()));
                            this.bump();
                            break;
                        case 123:
                            e += 1, this.bump();
                            break;
                        case 125:
                            if (!(e > 0)) return {val: this.message.slice(t.offset, this.offset()), err: null};
                            e -= 1;
                            break;
                        default:
                            this.bump()
                    }
                    return {val: this.message.slice(t.offset, this.offset()), err: null}
                }, e.prototype.parseNumberSkeletonFromString = function (e, t) {
                    var o = [];
                    try {
                        o = function (e) {
                            if (0 === e.length) throw new Error("Number skeleton cannot be empty");
                            for (var t = [], o = 0, n = e.split(I).filter((function (e) {
                                return e.length > 0
                            })); o < n.length; o++) {
                                var a = n[o].split("/");
                                if (0 === a.length) throw new Error("Invalid number skeleton");
                                for (var r = a[0], i = a.slice(1), s = 0, l = i; s < l.length; s++) if (0 === l[s].length) throw new Error("Invalid number skeleton");
                                t.push({stem: r, options: i})
                            }
                            return t
                        }(e)
                    } catch (e) {
                        return this.error(l.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: d.number,
                            tokens: o,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? H(o) : {}
                        }, err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function (e, t, o, n) {
                    for (var a, r = !1, i = [], s = new Set, p = n.value, d = n.location; ;) {
                        if (0 === p.length) {
                            var u = this.clonePosition();
                            if ("select" === t || !this.bumpIf("=")) break;
                            var c = this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_SELECTOR, l.INVALID_PLURAL_ARGUMENT_SELECTOR);
                            if (c.err) return c;
                            d = G(u, this.clonePosition()), p = this.message.slice(u.offset, this.offset())
                        }
                        if (s.has(p)) return this.error("select" === t ? l.DUPLICATE_SELECT_ARGUMENT_SELECTOR : l.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
                        "other" === p && (r = !0), this.bumpSpace();
                        var b = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? l.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : l.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, G(this.clonePosition(), this.clonePosition()));
                        var h = this.parseMessage(e + 1, t, o);
                        if (h.err) return h;
                        var m = this.tryParseArgumentClose(b);
                        if (m.err) return m;
                        i.push([p, {
                            value: h.val,
                            location: G(b, this.clonePosition())
                        }]), s.add(p), this.bumpSpace(), p = (a = this.parseIdentifierIfPossible()).value, d = a.location
                    }
                    return 0 === i.length ? this.error("select" === t ? l.EXPECT_SELECT_ARGUMENT_SELECTOR : l.EXPECT_PLURAL_ARGUMENT_SELECTOR, G(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !r ? this.error(l.MISSING_OTHER_CLAUSE, G(this.clonePosition(), this.clonePosition())) : {
                        val: i,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function (e, t) {
                    var o = 1, n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (o = -1);
                    for (var a = !1, r = 0; !this.isEOF();) {
                        var i = this.char();
                        if (!(i >= 48 && i <= 57)) break;
                        a = !0, r = 10 * r + (i - 48), this.bump()
                    }
                    var s = G(n, this.clonePosition());
                    return a ? X(r *= o) ? {val: r, err: null} : this.error(t, s) : this.error(e, s)
                }, e.prototype.offset = function () {
                    return this.position.offset
                }, e.prototype.isEOF = function () {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function () {
                    return {offset: this.position.offset, line: this.position.line, column: this.position.column}
                }, e.prototype.char = function () {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var t = ne(this.message, e);
                    if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return t
                }, e.prototype.error = function (e, t) {
                    return {val: null, err: {kind: e, message: this.message, location: t}}
                }, e.prototype.bump = function () {
                    if (!this.isEOF()) {
                        var e = this.char();
                        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function (e) {
                    if (ee(this.message, e, this.offset())) {
                        for (var t = 0; t < e.length; t++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function (e) {
                    var t = this.offset(), o = this.message.indexOf(e, t);
                    return o >= 0 ? (this.bumpTo(o), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function (e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length); ;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function () {
                    for (; !this.isEOF() && de(this.char());) this.bump()
                }, e.prototype.peek = function () {
                    if (this.isEOF()) return null;
                    var e = this.char(), t = this.offset(), o = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                    return null != o ? o : null
                }, e
            }();

            function pe(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function de(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function ue(e) {
                return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
            }

            function ce(e) {
                e.forEach((function (e) {
                    if (delete e.location, M(e) || v(e)) for (var t in e.options) delete e.options[t].location, ce(e.options[t].value); else T(e) && E(e.style) || (g(e) || f(e)) && L(e.style) ? delete e.style.location : y(e) && ce(e.children)
                }))
            }

            function be(e, t) {
                void 0 === t && (t = {}), t = r({shouldParseSkeletons: !0, requiresOtherClause: !0}, t);
                var o = new le(e, t).parse();
                if (o.err) {
                    var n = SyntaxError(l[o.err.kind]);
                    throw n.location = o.err.location, n.originalMessage = o.err.message, n
                }
                return (null == t ? void 0 : t.captureLocation) || ce(o.val), o.val
            }

            function he(e, t) {
                var o = t && t.cache ? t.cache : we, n = t && t.serializer ? t.serializer : fe;
                return (t && t.strategy ? t.strategy : ge)(e, {cache: o, serializer: n})
            }

            function me(e, t, o, n) {
                var a, r = null == (a = n) || "number" == typeof a || "boolean" == typeof a ? n : o(n), i = t.get(r);
                return void 0 === i && (i = e.call(this, n), t.set(r, i)), i
            }

            function ke(e, t, o) {
                var n = Array.prototype.slice.call(arguments, 3), a = o(n), r = t.get(a);
                return void 0 === r && (r = e.apply(this, n), t.set(a, r)), r
            }

            function Te(e, t, o, n, a) {
                return o.bind(t, e, n, a)
            }

            function ge(e, t) {
                return Te(e, this, 1 === e.length ? me : ke, t.cache.create(), t.serializer)
            }

            var fe = function () {
                return JSON.stringify(arguments)
            };

            function Me() {
                this.cache = Object.create(null)
            }

            Me.prototype.get = function (e) {
                return this.cache[e]
            }, Me.prototype.set = function (e, t) {
                this.cache[e] = t
            };
            var ve, we = {
                create: function () {
                    return new Me
                }
            }, ye = {
                variadic: function (e, t) {
                    return Te(e, this, ke, t.cache.create(), t.serializer)
                }, monadic: function (e, t) {
                    return Te(e, this, me, t.cache.create(), t.serializer)
                }
            };
            !function (e) {
                e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
            }(ve || (ve = {}));
            var Ee, Le = function (e) {
                function t(t, o, n) {
                    var a = e.call(this, t) || this;
                    return a.code = o, a.originalMessage = n, a
                }

                return a(t, e), t.prototype.toString = function () {
                    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                }, t
            }(Error), Se = function (e) {
                function t(t, o, n, a) {
                    return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(o, '". Options are "').concat(Object.keys(n).join('", "'), '"'), ve.INVALID_VALUE, a) || this
                }

                return a(t, e), t
            }(Le), Ae = function (e) {
                function t(t, o, n) {
                    return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(o), ve.INVALID_VALUE, n) || this
                }

                return a(t, e), t
            }(Le), Ne = function (e) {
                function t(t, o) {
                    return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(o, '"'), ve.MISSING_VALUE, o) || this
                }

                return a(t, e), t
            }(Le);

            function Ie(e) {
                return "function" == typeof e
            }

            function Be(e, t, o, n, a, r, i) {
                if (1 === e.length && m(e[0])) return [{type: Ee.literal, value: e[0].value}];
                for (var s = [], l = 0, p = e; l < p.length; l++) {
                    var d = p[l];
                    if (m(d)) s.push({
                        type: Ee.literal,
                        value: d.value
                    }); else if (w(d)) "number" == typeof r && s.push({
                        type: Ee.literal,
                        value: o.getNumberFormat(t).format(r)
                    }); else {
                        var u = d.value;
                        if (!a || !(u in a)) throw new Ne(u, i);
                        var c = a[u];
                        if (k(d)) c && "string" != typeof c && "number" != typeof c || (c = "string" == typeof c || "number" == typeof c ? String(c) : ""), s.push({
                            type: "string" == typeof c ? Ee.literal : Ee.object,
                            value: c
                        }); else if (g(d)) {
                            var b = "string" == typeof d.style ? n.date[d.style] : L(d.style) ? d.style.parsedOptions : void 0;
                            s.push({type: Ee.literal, value: o.getDateTimeFormat(t, b).format(c)})
                        } else if (f(d)) b = "string" == typeof d.style ? n.time[d.style] : L(d.style) ? d.style.parsedOptions : n.time.medium, s.push({
                            type: Ee.literal,
                            value: o.getDateTimeFormat(t, b).format(c)
                        }); else if (T(d)) (b = "string" == typeof d.style ? n.number[d.style] : E(d.style) ? d.style.parsedOptions : void 0) && b.scale && (c *= b.scale || 1), s.push({
                            type: Ee.literal,
                            value: o.getNumberFormat(t, b).format(c)
                        }); else {
                            if (y(d)) {
                                var h = d.children, S = d.value, A = a[S];
                                if (!Ie(A)) throw new Ae(S, "function", i);
                                var N = A(Be(h, t, o, n, a, r).map((function (e) {
                                    return e.value
                                })));
                                Array.isArray(N) || (N = [N]), s.push.apply(s, N.map((function (e) {
                                    return {type: "string" == typeof e ? Ee.literal : Ee.object, value: e}
                                })))
                            }
                            if (M(d)) {
                                if (!(I = d.options[c] || d.options.other)) throw new Se(d.value, c, Object.keys(d.options), i);
                                s.push.apply(s, Be(I.value, t, o, n, a))
                            } else if (v(d)) {
                                var I;
                                if (!(I = d.options["=".concat(c)])) {
                                    if (!Intl.PluralRules) throw new Le('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ve.MISSING_INTL_API, i);
                                    var B = o.getPluralRules(t, {type: d.pluralType}).select(c - (d.offset || 0));
                                    I = d.options[B] || d.options.other
                                }
                                if (!I) throw new Se(d.value, c, Object.keys(d.options), i);
                                s.push.apply(s, Be(I.value, t, o, n, a, c - (d.offset || 0)))
                            }
                        }
                    }
                }
                return (P = s).length < 2 ? P : P.reduce((function (e, t) {
                    var o = e[e.length - 1];
                    return o && o.type === Ee.literal && t.type === Ee.literal ? o.value += t.value : e.push(t), e
                }), []);
                var P
            }

            function Pe(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t]
                            }, set: function (t, o) {
                                e[t] = o
                            }
                        }
                    }
                }
            }

            !function (e) {
                e[e.literal = 0] = "literal", e[e.object = 1] = "object"
            }(Ee || (Ee = {}));
            var Ce, Re = function () {
                function e(t, o, n, a) {
                    void 0 === o && (o = e.defaultLocale);
                    var l, p, d, u = this;
                    if (this.formatterCache = {number: {}, dateTime: {}, pluralRules: {}}, this.format = function (e) {
                        var t = u.formatToParts(e);
                        if (1 === t.length) return t[0].value;
                        var o = t.reduce((function (e, t) {
                            return e.length && t.type === Ee.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                        }), []);
                        return o.length <= 1 ? o[0] || "" : o
                    }, this.formatToParts = function (e) {
                        return Be(u.ast, u.locales, u.formatters, u.formats, e, void 0, u.message)
                    }, this.resolvedOptions = function () {
                        var e;
                        return {locale: (null === (e = u.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(u.locales)[0]}
                    }, this.getAst = function () {
                        return u.ast
                    }, this.locales = o, this.resolvedLocale = e.resolveLocale(o), "string" == typeof t) {
                        if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        var c = a || {}, b = (c.formatters, i(c, ["formatters"]));
                        this.ast = e.__parse(t, r(r({}, b), {locale: this.resolvedLocale}))
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                    this.formats = (p = e.formats, (d = n) ? Object.keys(p).reduce((function (e, t) {
                        var o, n;
                        return e[t] = (o = p[t], (n = d[t]) ? r(r(r({}, o || {}), n || {}), Object.keys(o).reduce((function (e, t) {
                            return e[t] = r(r({}, o[t]), n[t] || {}), e
                        }), {})) : o), e
                    }), r({}, p)) : p), this.formatters = a && a.formatters || (void 0 === (l = this.formatterCache) && (l = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }), {
                        getNumberFormat: he((function () {
                            for (var e, t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                            return new ((e = Intl.NumberFormat).bind.apply(e, s([void 0], t, !1)))
                        }), {cache: Pe(l.number), strategy: ye.variadic}), getDateTimeFormat: he((function () {
                            for (var e, t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                            return new ((e = Intl.DateTimeFormat).bind.apply(e, s([void 0], t, !1)))
                        }), {cache: Pe(l.dateTime), strategy: ye.variadic}), getPluralRules: he((function () {
                            for (var e, t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                            return new ((e = Intl.PluralRules).bind.apply(e, s([void 0], t, !1)))
                        }), {cache: Pe(l.pluralRules), strategy: ye.variadic})
                    })
                }

                return Object.defineProperty(e, "defaultLocale", {
                    get: function () {
                        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
                    }, enumerable: !1, configurable: !0
                }), e.memoizedDefaultLocale = null, e.resolveLocale = function (e) {
                    if (void 0 !== Intl.Locale) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
                    }
                }, e.__parse = be, e.formats = {
                    number: {
                        integer: {maximumFractionDigits: 0},
                        currency: {style: "currency"},
                        percent: {style: "percent"}
                    },
                    date: {
                        short: {month: "numeric", day: "numeric", year: "2-digit"},
                        medium: {month: "short", day: "numeric", year: "numeric"},
                        long: {month: "long", day: "numeric", year: "numeric"},
                        full: {weekday: "long", month: "long", day: "numeric", year: "numeric"}
                    },
                    time: {
                        short: {hour: "numeric", minute: "numeric"},
                        medium: {hour: "numeric", minute: "numeric", second: "numeric"},
                        long: {hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"},
                        full: {hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"}
                    }
                }, e
            }();
            !function (e) {
                e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
            }(Ce || (Ce = {}));
            var De = function (e) {
                function t(o, n, a) {
                    var r = this, i = a ? a instanceof Error ? a : new Error(String(a)) : void 0;
                    return (r = e.call(this, "[@formatjs/intl Error ".concat(o, "] ").concat(n, "\n").concat(i ? "\n".concat(i.message, "\n").concat(i.stack) : "")) || this).code = o, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(r, t), r
                }

                return a(t, e), t
            }(Error), Oe = function (e) {
                function t(t, o) {
                    return e.call(this, Ce.UNSUPPORTED_FORMATTER, t, o) || this
                }

                return a(t, e), t
            }(De), _e = function (e) {
                function t(t, o) {
                    return e.call(this, Ce.INVALID_CONFIG, t, o) || this
                }

                return a(t, e), t
            }(De), Fe = function (e) {
                function t(t, o) {
                    return e.call(this, Ce.MISSING_DATA, t, o) || this
                }

                return a(t, e), t
            }(De), He = function (e) {
                function t(t, o, n) {
                    var a = e.call(this, Ce.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(o, "\n"), n) || this;
                    return a.locale = o, a
                }

                return a(t, e), t
            }(De), Ue = function (e) {
                function t(t, o, n, a) {
                    var r = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), o, a) || this;
                    return r.descriptor = n, r.locale = o, r
                }

                return a(t, e), t
            }(He), je = function (e) {
                function t(t, o) {
                    var n = e.call(this, Ce.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(o, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function (e) {
                        var t;
                        return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
                    })).join(), ")") : "id", " as fallback.")) || this;
                    return n.descriptor = t, n
                }

                return a(t, e), t
            }(De);

            function xe(e, t, o) {
                return void 0 === o && (o = {}), t.reduce((function (t, n) {
                    return n in e ? t[n] = e[n] : n in o && (t[n] = o[n]), t
                }), {})
            }

            var ze = {
                formats: {},
                messages: {},
                timeZone: void 0,
                defaultLocale: "en",
                defaultFormats: {},
                fallbackOnEmptyString: !0,
                onError: function (e) {
                },
                onWarn: function (e) {
                }
            };

            function Ve() {
                return {
                    dateTime: {},
                    number: {},
                    message: {},
                    relativeTime: {},
                    pluralRules: {},
                    list: {},
                    displayNames: {}
                }
            }

            function Ge(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t]
                            }, set: function (t, o) {
                                e[t] = o
                            }
                        }
                    }
                }
            }

            function We(e, t, o, n) {
                var a, r = e && e[t];
                if (r && (a = r[o]), a) return a;
                n(new Oe("No ".concat(t, " format named: ").concat(o)))
            }

            function qe(e) {
                h(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
            }

            var Ke = r(r({}, ze), {textComponent: u.Fragment});

            function $e(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                var o = Object.keys(e), n = Object.keys(t), a = o.length;
                if (n.length !== a) return !1;
                for (var r = 0; r < a; r++) {
                    var i = o[r];
                    if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1
                }
                return !0
            }

            var Ze, Qe,
                Xe = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? u.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = u.createContext(null)),
                Je = Xe.Consumer, Ye = Xe.Provider, et = Xe;

            function tt(e, t) {
                var o, n = t || {}, a = n.intlPropName, i = void 0 === a ? "intl" : a, s = n.forwardRef,
                    l = void 0 !== s && s, p = n.enforceContext, d = void 0 === p || p, c = function (t) {
                        return u.createElement(Je, null, (function (o) {
                            var n;
                            d && qe(o);
                            var a = ((n = {})[i] = o, n);
                            return u.createElement(e, r({}, t, a, {ref: l ? t.forwardedRef : null}))
                        }))
                    };
                return c.displayName = "injectIntl(".concat((o = e).displayName || o.name || "Component", ")"), c.WrappedComponent = e, l ? b()(u.forwardRef((function (e, t) {
                    return u.createElement(c, r({}, e, {forwardedRef: t}))
                })), e) : b()(c, e)
            }

            function ot() {
                var e = u.useContext(et);
                return qe(e), e
            }

            !function (e) {
                e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
            }(Ze || (Ze = {})), function (e) {
                e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
            }(Qe || (Qe = {}));
            var nt = function (e) {
                var t = ot(), o = e.value, n = e.children, a = i(e, ["value", "children"]);
                return n(t.formatNumberToParts(o, a))
            };
            nt.displayName = "FormattedNumberParts";
            var at = function (e) {
                var t = ot(), o = e.value, n = e.children, a = i(e, ["value", "children"]);
                return n(t.formatListToParts(o, a))
            };

            function rt(e) {
                var t = function (t) {
                    var o = ot(), n = t.value, a = t.children, r = i(t, ["value", "children"]),
                        s = "string" == typeof n ? new Date(n || 0) : n;
                    return a("formatDate" === e ? o.formatDateToParts(s, r) : o.formatTimeToParts(s, r))
                };
                return t.displayName = Qe[e], t
            }

            function it(e) {
                var t = function (t) {
                    var o = ot(), n = t.value, a = t.children, r = i(t, ["value", "children"]), s = o[e](n, r);
                    if ("function" == typeof a) return a(s);
                    var l = o.textComponent || u.Fragment;
                    return u.createElement(l, null, s)
                };
                return t.displayName = Ze[e], t
            }

            function st(e, t) {
                return Object.keys(e).reduce((function (o, n) {
                    return o[n] = r({timeZone: t}, e[n]), o
                }), {})
            }

            function lt(e, t) {
                return Object.keys(r(r({}, e), t)).reduce((function (o, n) {
                    return o[n] = r(r({}, e[n] || {}), t[n] || {}), o
                }), {})
            }

            function pt(e, t) {
                if (!t) return e;
                var o = Re.formats;
                return r(r(r({}, o), e), {
                    date: lt(st(o.date, t), st(e.date || {}, t)),
                    time: lt(st(o.time, t), st(e.time || {}, t))
                })
            }

            nt.displayName = "FormattedNumberParts";
            var dt = function (e, t, o, n, a) {
                    var i = e.locale, s = e.formats, l = e.messages, d = e.defaultLocale, u = e.defaultFormats,
                        c = e.fallbackOnEmptyString, b = e.onError, m = e.timeZone, k = e.defaultRichTextElements;
                    void 0 === o && (o = {id: ""});
                    var T = o.id, g = o.defaultMessage;
                    h(!!T, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
                    var f = String(T), M = l && Object.prototype.hasOwnProperty.call(l, f) && l[f];
                    if (Array.isArray(M) && 1 === M.length && M[0].type === p.literal) return M[0].value;
                    if (!n && M && "string" == typeof M && !k) return M.replace(/'\{(.*?)\}'/gi, "{$1}");
                    if (n = r(r({}, k), n || {}), s = pt(s, m), u = pt(u, m), !M) {
                        if (!1 === c && "" === M) return M;
                        if ((!g || i && i.toLowerCase() !== d.toLowerCase()) && b(new je(o, i)), g) try {
                            return t.getMessageFormat(g, d, u, a).format(n)
                        } catch (e) {
                            return b(new Ue('Error formatting default message for: "'.concat(f, '", rendering default message verbatim'), i, o, e)), "string" == typeof g ? g : f
                        }
                        return f
                    }
                    try {
                        return t.getMessageFormat(M, i, s, r({formatters: t}, a || {})).format(n)
                    } catch (e) {
                        b(new Ue('Error formatting message: "'.concat(f, '", using ').concat(g ? "default message" : "id", " as fallback."), i, o, e))
                    }
                    if (g) try {
                        return t.getMessageFormat(g, d, u, a).format(n)
                    } catch (e) {
                        b(new Ue('Error formatting the default message for: "'.concat(f, '", rendering message verbatim'), i, o, e))
                    }
                    return "string" == typeof M ? M : "string" == typeof g ? g : f
                },
                ut = ["style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem"];

            function ct(e, t, o) {
                var n = e.locale, a = e.formats, r = e.onError;
                void 0 === o && (o = {});
                var i = o.format, s = i && We(a, "number", i, r) || {};
                return t(n, xe(o, ut, s))
            }

            function bt(e, t, o, n) {
                void 0 === n && (n = {});
                try {
                    return ct(e, t, n).format(o)
                } catch (t) {
                    e.onError(new He("Error formatting number.", e.locale, t))
                }
                return String(o)
            }

            function ht(e, t, o, n) {
                void 0 === n && (n = {});
                try {
                    return ct(e, t, n).formatToParts(o)
                } catch (t) {
                    e.onError(new He("Error formatting number.", e.locale, t))
                }
                return []
            }

            var mt = ["numeric", "style"];

            function kt(e, t, o, n, a) {
                void 0 === a && (a = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new Le('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', ve.MISSING_INTL_API));
                try {
                    return function (e, t, o) {
                        var n = e.locale, a = e.formats, r = e.onError;
                        void 0 === o && (o = {});
                        var i = o.format, s = !!i && We(a, "relative", i, r) || {};
                        return t(n, xe(o, mt, s))
                    }(e, t, a).format(o, n)
                } catch (t) {
                    e.onError(new He("Error formatting relative time.", e.locale, t))
                }
                return String(o)
            }

            var Tt = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

            function gt(e, t, o, n) {
                var a = e.locale, i = e.formats, s = e.onError, l = e.timeZone;
                void 0 === n && (n = {});
                var p = n.format, d = r(r({}, l && {timeZone: l}), p && We(i, t, p, s)), u = xe(n, Tt, d);
                return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = r(r({}, u), {
                    hour: "numeric",
                    minute: "numeric"
                })), o(a, u)
            }

            function ft(e, t) {
                for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
                var a = o[0], r = o[1], i = void 0 === r ? {} : r, s = "string" == typeof a ? new Date(a || 0) : a;
                try {
                    return gt(e, "date", t, i).format(s)
                } catch (t) {
                    e.onError(new He("Error formatting date.", e.locale, t))
                }
                return String(s)
            }

            function Mt(e, t) {
                for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
                var a = o[0], r = o[1], i = void 0 === r ? {} : r, s = "string" == typeof a ? new Date(a || 0) : a;
                try {
                    return gt(e, "time", t, i).format(s)
                } catch (t) {
                    e.onError(new He("Error formatting time.", e.locale, t))
                }
                return String(s)
            }

            function vt(e, t) {
                for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
                var a = o[0], r = o[1], i = o[2], s = void 0 === i ? {} : i, l = e.timeZone, p = e.locale,
                    d = e.onError, u = xe(s, Tt, l ? {timeZone: l} : {});
                try {
                    return t(p, u).formatRange(a, r)
                } catch (t) {
                    d(new He("Error formatting date time range.", e.locale, t))
                }
                return String(a)
            }

            function wt(e, t) {
                for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
                var a = o[0], r = o[1], i = void 0 === r ? {} : r, s = "string" == typeof a ? new Date(a || 0) : a;
                try {
                    return gt(e, "date", t, i).formatToParts(s)
                } catch (t) {
                    e.onError(new He("Error formatting date.", e.locale, t))
                }
                return []
            }

            function yt(e, t) {
                for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
                var a = o[0], r = o[1], i = void 0 === r ? {} : r, s = "string" == typeof a ? new Date(a || 0) : a;
                try {
                    return gt(e, "time", t, i).formatToParts(s)
                } catch (t) {
                    e.onError(new He("Error formatting time.", e.locale, t))
                }
                return []
            }

            var Et = ["type"];

            function Lt(e, t, o, n) {
                var a = e.locale, r = e.onError;
                void 0 === n && (n = {}), Intl.PluralRules || r(new Le('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ve.MISSING_INTL_API));
                var i = xe(n, Et);
                try {
                    return t(a, i).select(o)
                } catch (e) {
                    r(new He("Error formatting plural.", a, e))
                }
                return "other"
            }

            var St = ["type", "style"], At = Date.now();

            function Nt(e, t, o, n) {
                void 0 === n && (n = {});
                var a = It(e, t, o, n).reduce((function (e, t) {
                    var o = t.value;
                    return "string" != typeof o ? e.push(o) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += o : e.push(o), e
                }), []);
                return 1 === a.length ? a[0] : 0 === a.length ? "" : a
            }

            function It(e, t, o, n) {
                var a = e.locale, i = e.onError;
                void 0 === n && (n = {}), Intl.ListFormat || i(new Le('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', ve.MISSING_INTL_API));
                var s = xe(n, St);
                try {
                    var l = {}, p = o.map((function (e, t) {
                        if ("object" == typeof e) {
                            var o = function (e) {
                                return "".concat(At, "_").concat(e, "_").concat(At)
                            }(t);
                            return l[o] = e, o
                        }
                        return String(e)
                    }));
                    return t(a, s).formatToParts(p).map((function (e) {
                        return "literal" === e.type ? e : r(r({}, e), {value: l[e.value] || e.value})
                    }))
                } catch (e) {
                    i(new He("Error formatting list.", a, e))
                }
                return o
            }

            var Bt = ["style", "type", "fallback", "languageDisplay"];

            function Pt(e, t, o, n) {
                var a = e.locale, r = e.onError;
                Intl.DisplayNames || r(new Le('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', ve.MISSING_INTL_API));
                var i = xe(n, Bt);
                try {
                    return t(a, i).of(o)
                } catch (e) {
                    r(new He("Error formatting display name.", a, e))
                }
            }

            function Ct(e, t) {
                var o = function (e) {
                    void 0 === e && (e = {
                        dateTime: {},
                        number: {},
                        message: {},
                        relativeTime: {},
                        pluralRules: {},
                        list: {},
                        displayNames: {}
                    });
                    var t = Intl.RelativeTimeFormat, o = Intl.ListFormat, n = Intl.DisplayNames, a = he((function () {
                        for (var e, t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                        return new ((e = Intl.DateTimeFormat).bind.apply(e, s([void 0], t, !1)))
                    }), {cache: Ge(e.dateTime), strategy: ye.variadic}), i = he((function () {
                        for (var e, t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                        return new ((e = Intl.NumberFormat).bind.apply(e, s([void 0], t, !1)))
                    }), {cache: Ge(e.number), strategy: ye.variadic}), l = he((function () {
                        for (var e, t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                        return new ((e = Intl.PluralRules).bind.apply(e, s([void 0], t, !1)))
                    }), {cache: Ge(e.pluralRules), strategy: ye.variadic});
                    return {
                        getDateTimeFormat: a,
                        getNumberFormat: i,
                        getMessageFormat: he((function (e, t, o, n) {
                            return new Re(e, t, o, r({
                                formatters: {
                                    getNumberFormat: i,
                                    getDateTimeFormat: a,
                                    getPluralRules: l
                                }
                            }, n || {}))
                        }), {cache: Ge(e.message), strategy: ye.variadic}),
                        getRelativeTimeFormat: he((function () {
                            for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                            return new (t.bind.apply(t, s([void 0], e, !1)))
                        }), {cache: Ge(e.relativeTime), strategy: ye.variadic}),
                        getPluralRules: l,
                        getListFormat: he((function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return new (o.bind.apply(o, s([void 0], e, !1)))
                        }), {cache: Ge(e.list), strategy: ye.variadic}),
                        getDisplayNames: he((function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return new (n.bind.apply(n, s([void 0], e, !1)))
                        }), {cache: Ge(e.displayNames), strategy: ye.variadic})
                    }
                }(t), n = r(r({}, ze), e), a = n.locale, i = n.defaultLocale, l = n.onError;
                return a ? !Intl.NumberFormat.supportedLocalesOf(a).length && l ? l(new Fe('Missing locale data for locale: "'.concat(a, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(a).length && l && l(new Fe('Missing locale data for locale: "'.concat(a, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new _e('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"), function (e) {
                    var t;
                    e.onWarn && e.defaultRichTextElements && "string" == typeof ((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
                }(n), r(r({}, n), {
                    formatters: o,
                    formatNumber: bt.bind(null, n, o.getNumberFormat),
                    formatNumberToParts: ht.bind(null, n, o.getNumberFormat),
                    formatRelativeTime: kt.bind(null, n, o.getRelativeTimeFormat),
                    formatDate: ft.bind(null, n, o.getDateTimeFormat),
                    formatDateToParts: wt.bind(null, n, o.getDateTimeFormat),
                    formatTime: Mt.bind(null, n, o.getDateTimeFormat),
                    formatDateTimeRange: vt.bind(null, n, o.getDateTimeFormat),
                    formatTimeToParts: yt.bind(null, n, o.getDateTimeFormat),
                    formatPlural: Lt.bind(null, n, o.getPluralRules),
                    formatMessage: dt.bind(null, n, o),
                    $t: dt.bind(null, n, o),
                    formatList: Nt.bind(null, n, o.getListFormat),
                    formatListToParts: It.bind(null, n, o.getListFormat),
                    formatDisplayName: Pt.bind(null, n, o.getDisplayNames)
                })
            }

            function Rt(e) {
                return {
                    locale: e.locale,
                    timeZone: e.timeZone,
                    fallbackOnEmptyString: e.fallbackOnEmptyString,
                    formats: e.formats,
                    textComponent: e.textComponent,
                    messages: e.messages,
                    defaultLocale: e.defaultLocale,
                    defaultFormats: e.defaultFormats,
                    onError: e.onError,
                    onWarn: e.onWarn,
                    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
                    defaultRichTextElements: e.defaultRichTextElements
                }
            }

            function Dt(e) {
                return e ? Object.keys(e).reduce((function (t, o) {
                    var n, a = e[o];
                    return t[o] = Ie(a) ? (n = a, function (e) {
                        return n(u.Children.toArray(e))
                    }) : a, t
                }), {}) : e
            }

            var Ot = function (e, t, o, n) {
                for (var a = [], r = 4; r < arguments.length; r++) a[r - 4] = arguments[r];
                var i = Dt(n), l = dt.apply(void 0, s([e, t, o, i], a, !1));
                return Array.isArray(l) ? u.Children.toArray(l) : l
            }, _t = function (e, t) {
                var o = e.defaultRichTextElements, n = i(e, ["defaultRichTextElements"]), a = Dt(o),
                    s = Ct(r(r(r({}, Ke), n), {defaultRichTextElements: a}), t), l = {
                        locale: s.locale,
                        timeZone: s.timeZone,
                        fallbackOnEmptyString: s.fallbackOnEmptyString,
                        formats: s.formats,
                        defaultLocale: s.defaultLocale,
                        defaultFormats: s.defaultFormats,
                        messages: s.messages,
                        onError: s.onError,
                        defaultRichTextElements: a
                    };
                return r(r({}, s), {formatMessage: Ot.bind(null, l, s.formatters), $t: Ot.bind(null, l, s.formatters)})
            }, Ft = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.cache = {
                        dateTime: {},
                        number: {},
                        message: {},
                        relativeTime: {},
                        pluralRules: {},
                        list: {},
                        displayNames: {}
                    }, t.state = {cache: t.cache, intl: _t(Rt(t.props), t.cache), prevConfig: Rt(t.props)}, t
                }

                return a(t, e), t.getDerivedStateFromProps = function (e, t) {
                    var o = t.prevConfig, n = t.cache, a = Rt(e);
                    return $e(o, a) ? null : {intl: _t(a, n), prevConfig: a}
                }, t.prototype.render = function () {
                    return qe(this.state.intl), u.createElement(Ye, {value: this.state.intl}, this.props.children)
                }, t.displayName = "IntlProvider", t.defaultProps = Ke, t
            }(u.PureComponent);
            const Ht = Ft;
            var Ut = 3600;

            function jt(e) {
                var t = Math.abs(e);
                return t < 60 ? "second" : t < Ut ? "minute" : t < 86400 ? "hour" : "day"
            }

            function xt(e) {
                switch (e) {
                    case"second":
                        return 1;
                    case"minute":
                        return 60;
                    case"hour":
                        return Ut;
                    default:
                        return 86400
                }
            }

            var zt = ["second", "minute", "hour"];

            function Vt(e) {
                return void 0 === e && (e = "second"), zt.indexOf(e) > -1
            }

            var Gt = function (e) {
                var t = ot(), o = t.formatRelativeTime, n = t.textComponent, a = e.children,
                    r = o(e.value || 0, e.unit, i(e, ["children", "value", "unit"]));
                return "function" == typeof a ? a(r) : n ? u.createElement(n, null, r) : u.createElement(u.Fragment, null, r)
            }, Wt = function (e) {
                var t = e.value, o = e.unit, n = e.updateIntervalInSeconds,
                    a = i(e, ["value", "unit", "updateIntervalInSeconds"]);
                h(!n || !(!n || !Vt(o)), "Cannot schedule update with unit longer than hour");
                var s, l = u.useState(), p = l[0], d = l[1], c = u.useState(0), b = c[0], m = c[1], k = u.useState(0),
                    T = k[0], g = k[1];
                o === p && t === b || (m(t || 0), d(o), g(Vt(o) ? function (e, t) {
                    if (!e) return 0;
                    switch (t) {
                        case"second":
                            return e;
                        case"minute":
                            return 60 * e;
                        default:
                            return e * Ut
                    }
                }(t, o) : 0)), u.useEffect((function () {
                    function e() {
                        clearTimeout(s)
                    }

                    if (e(), !n || !Vt(o)) return e;
                    var t = T - n, a = jt(t);
                    if ("day" === a) return e;
                    var r = xt(a), i = t - t % r, l = i >= T ? i - r : i, p = Math.abs(l - T);
                    return T !== l && (s = setTimeout((function () {
                        return g(l)
                    }), 1e3 * p)), e
                }), [T, n, o]);
                var f = t || 0, M = o;
                if (Vt(o) && "number" == typeof T && n) {
                    var v = xt(M = jt(T));
                    f = Math.round(T / v)
                }
                return u.createElement(Gt, r({value: f, unit: M}, a))
            };
            Wt.displayName = "FormattedRelativeTime", Wt.defaultProps = {value: 0, unit: "second"};
            const qt = Wt;
            var Kt = function (e) {
                var t = ot(), o = t.formatPlural, n = t.textComponent, a = e.value, r = e.other, i = e.children,
                    s = e[o(a, e)] || r;
                return "function" == typeof i ? i(s) : n ? u.createElement(n, null, s) : s
            };
            Kt.defaultProps = {type: "cardinal"}, Kt.displayName = "FormattedPlural";
            const $t = Kt;

            function Zt(e) {
                var t = ot(), o = t.formatMessage, n = t.textComponent, a = void 0 === n ? u.Fragment : n, r = e.id,
                    i = e.description, s = e.defaultMessage, l = e.values, p = e.children, d = e.tagName,
                    c = void 0 === d ? a : d,
                    b = o({id: r, description: i, defaultMessage: s}, l, {ignoreTag: e.ignoreTag});
                return "function" == typeof p ? p(Array.isArray(b) ? b : [b]) : c ? u.createElement(c, null, u.Children.toArray(b)) : u.createElement(u.Fragment, null, b)
            }

            Zt.displayName = "FormattedMessage";
            var Qt = u.memo(Zt, (function (e, t) {
                var o = e.values, n = i(e, ["values"]), a = t.values, r = i(t, ["values"]);
                return $e(a, o) && $e(n, r)
            }));
            Qt.displayName = "MemoizedFormattedMessage";
            const Xt = Qt;
            var Jt = function (e) {
                var t = ot(), o = e.from, n = e.to, a = e.children, r = i(e, ["from", "to", "children"]),
                    s = t.formatDateTimeRange(o, n, r);
                if ("function" == typeof a) return a(s);
                var l = t.textComponent || u.Fragment;
                return u.createElement(l, null, s)
            };
            Jt.displayName = "FormattedDateTimeRange";
            const Yt = Jt;

            function eo(e) {
                return e
            }

            function to(e) {
                return e
            }

            var oo = it("formatDate"), no = it("formatTime"), ao = it("formatNumber"), ro = it("formatList"),
                io = it("formatDisplayName"), so = rt("formatDate"), lo = rt("formatTime")
        },
        653: (e, t) => {
            var o = "function" == typeof Symbol && Symbol.for, n = o ? Symbol.for("react.element") : 60103,
                a = o ? Symbol.for("react.portal") : 60106, r = o ? Symbol.for("react.fragment") : 60107,
                i = o ? Symbol.for("react.strict_mode") : 60108, s = o ? Symbol.for("react.profiler") : 60114,
                l = o ? Symbol.for("react.provider") : 60109, p = o ? Symbol.for("react.context") : 60110,
                d = o ? Symbol.for("react.async_mode") : 60111, u = o ? Symbol.for("react.concurrent_mode") : 60111,
                c = o ? Symbol.for("react.forward_ref") : 60112, b = o ? Symbol.for("react.suspense") : 60113,
                h = o ? Symbol.for("react.suspense_list") : 60120, m = o ? Symbol.for("react.memo") : 60115,
                k = o ? Symbol.for("react.lazy") : 60116, T = o ? Symbol.for("react.block") : 60121,
                g = o ? Symbol.for("react.fundamental") : 60117, f = o ? Symbol.for("react.responder") : 60118,
                M = o ? Symbol.for("react.scope") : 60119;

            function v(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case d:
                                case u:
                                case r:
                                case s:
                                case i:
                                case b:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case p:
                                        case c:
                                        case k:
                                        case m:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case a:
                            return t
                    }
                }
            }

            function w(e) {
                return v(e) === u
            }

            t.AsyncMode = d, t.ConcurrentMode = u, t.ContextConsumer = p, t.ContextProvider = l, t.Element = n, t.ForwardRef = c, t.Fragment = r, t.Lazy = k, t.Memo = m, t.Portal = a, t.Profiler = s, t.StrictMode = i, t.Suspense = b, t.isAsyncMode = function (e) {
                return w(e) || v(e) === d
            }, t.isConcurrentMode = w, t.isContextConsumer = function (e) {
                return v(e) === p
            }, t.isContextProvider = function (e) {
                return v(e) === l
            }, t.isElement = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function (e) {
                return v(e) === c
            }, t.isFragment = function (e) {
                return v(e) === r
            }, t.isLazy = function (e) {
                return v(e) === k
            }, t.isMemo = function (e) {
                return v(e) === m
            }, t.isPortal = function (e) {
                return v(e) === a
            }, t.isProfiler = function (e) {
                return v(e) === s
            }, t.isStrictMode = function (e) {
                return v(e) === i
            }, t.isSuspense = function (e) {
                return v(e) === b
            }, t.isValidElementType = function (e) {
                return "string" == typeof e || "function" == typeof e || e === r || e === u || e === s || e === i || e === b || e === h || "object" == typeof e && null !== e && (e.$$typeof === k || e.$$typeof === m || e.$$typeof === l || e.$$typeof === p || e.$$typeof === c || e.$$typeof === g || e.$$typeof === f || e.$$typeof === M || e.$$typeof === T)
            }, t.typeOf = v
        },
        129: (e, t, o) => {
            e.exports = o(653)
        },
        157: (e, t) => {
            var o = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"),
                r = (Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider")),
                i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"),
                l = (Symbol.for("react.suspense"), Symbol.for("react.memo")),
                p = (Symbol.for("react.lazy"), Symbol.iterator), d = {
                    isMounted: function () {
                        return !1
                    }, enqueueForceUpdate: function () {
                    }, enqueueReplaceState: function () {
                    }, enqueueSetState: function () {
                    }
                }, u = Object.assign, c = {};

            function b(e, t, o) {
                this.props = e, this.context = t, this.refs = c, this.updater = o || d
            }

            function h() {
            }

            function m(e, t, o) {
                this.props = e, this.context = t, this.refs = c, this.updater = o || d
            }

            b.prototype.isReactComponent = {}, b.prototype.setState = function (e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, b.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, h.prototype = b.prototype;
            var k = m.prototype = new h;
            k.constructor = m, u(k, b.prototype), k.isPureReactComponent = !0;
            var T = Array.isArray, g = Object.prototype.hasOwnProperty, f = {current: null},
                M = {key: !0, ref: !0, __self: !0, __source: !0};

            function v(e) {
                return "object" == typeof e && null !== e && e.$$typeof === o
            }

            var w = /\/+/g;

            function y(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function (e) {
                    var t = {"=": "=0", ":": "=2"};
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function E(e, t, a, r, i) {
                var s = typeof e;
                "undefined" !== s && "boolean" !== s || (e = null);
                var l = !1;
                if (null === e) l = !0; else switch (s) {
                    case"string":
                    case"number":
                        l = !0;
                        break;
                    case"object":
                        switch (e.$$typeof) {
                            case o:
                            case n:
                                l = !0
                        }
                }
                if (l) return i = i(l = e), e = "" === r ? "." + y(l, 0) : r, T(i) ? (a = "", null != e && (a = e.replace(w, "$&/") + "/"), E(i, t, a, "", (function (e) {
                    return e
                }))) : null != i && (v(i) && (i = function (e, t) {
                    return {$$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
                }(i, a + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(w, "$&/") + "/") + e)), t.push(i)), 1;
                if (l = 0, r = "" === r ? "." : r + ":", T(e)) for (var d = 0; d < e.length; d++) {
                    var u = r + y(s = e[d], d);
                    l += E(s, t, a, u, i)
                } else if (u = function (e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e), "function" == typeof u) for (e = u.call(e), d = 0; !(s = e.next()).done;) l += E(s = s.value, t, a, u = r + y(s, d++), i); else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
            }

            function L(e, t, o) {
                if (null == e) return e;
                var n = [], a = 0;
                return E(e, n, "", "", (function (e) {
                    return t.call(o, e, a++)
                })), n
            }

            var S = {current: null};
            t.Children = {
                map: L, forEach: function (e, t, o) {
                    L(e, (function () {
                        t.apply(this, arguments)
                    }), o)
                }, count: function (e) {
                    var t = 0;
                    return L(e, (function () {
                        t++
                    })), t
                }, toArray: function (e) {
                    return L(e, (function (e) {
                        return e
                    })) || []
                }, only: function (e) {
                    if (!v(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Fragment = a, t.PureComponent = m, t.createContext = function (e) {
                return (e = {
                    $$typeof: i,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {$$typeof: r, _context: e}, e.Consumer = e
            }, t.createElement = function (e, t, n) {
                var a, r = {}, i = null, s = null;
                if (null != t) for (a in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = "" + t.key), t) g.call(t, a) && !M.hasOwnProperty(a) && (r[a] = t[a]);
                var l = arguments.length - 2;
                if (1 === l) r.children = n; else if (1 < l) {
                    for (var p = Array(l), d = 0; d < l; d++) p[d] = arguments[d + 2];
                    r.children = p
                }
                if (e && e.defaultProps) for (a in l = e.defaultProps) void 0 === r[a] && (r[a] = l[a]);
                return {$$typeof: o, type: e, key: i, ref: s, props: r, _owner: f.current}
            }, t.forwardRef = function (e) {
                return {$$typeof: s, render: e}
            }, t.memo = function (e, t) {
                return {$$typeof: l, type: e, compare: void 0 === t ? null : t}
            }, t.useContext = function (e) {
                return S.current.useContext(e)
            }, t.useEffect = function (e, t) {
                return S.current.useEffect(e, t)
            }, t.useState = function (e) {
                return S.current.useState(e)
            }
        },
        794: (e, t, o) => {
            e.exports = o(157)
        },
        326: function (e, t, o) {
            var n = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.DEPRECATED_sendSyncToMainAndReturnResult = t.sendToMain = t.invokeInMainAndReturnResult = t.broadcast = t.handleMainToTabsEvent = t.handleMainToSearchEvent = t.handleMainToNotionEvent = void 0;
            const a = n(o(288));
            t.handleMainToNotionEvent = {
                addListener(e, t) {
                    a.default.ipcRenderer.addListener(e, t)
                }, removeListener(e, t) {
                    a.default.ipcRenderer.removeListener(e, t)
                }, listeners: e => a.default.ipcRenderer.listeners(e)
            }, t.handleMainToSearchEvent = {
                addListener(e, t) {
                    a.default.ipcRenderer.addListener(e, t)
                }, removeListener(e, t) {
                    a.default.ipcRenderer.removeListener(e, t)
                }, listeners: e => a.default.ipcRenderer.listeners(e)
            }, t.handleMainToTabsEvent = {
                addListener(e, t) {
                    a.default.ipcRenderer.addListener(e, t)
                }, removeListener(e, t) {
                    a.default.ipcRenderer.removeListener(e, t)
                }, listeners: e => a.default.ipcRenderer.listeners(e)
            };
            const r = new Map;

            function i(e, ...t) {
                a.default.ipcRenderer.send(e, ...t)
            }

            t.broadcast = {
                emit(e, ...t) {
                    i("notion:broadcast", {channel: e, args: t})
                }, addListener(e, o) {
                    const n = (t, n) => {
                        n.channel === e && o(...n.args)
                    };
                    r.set(o, n), t.handleMainToNotionEvent.addListener("notion:broadcast", n)
                }, removeListener(e, o) {
                    const n = r.get(o);
                    n && (t.handleMainToNotionEvent.removeListener("notion:broadcast", n), r.delete(o))
                }
            }, t.invokeInMainAndReturnResult = function (e, ...t) {
                return a.default.ipcRenderer.invoke(e, ...t)
            }, t.sendToMain = i, t.DEPRECATED_sendSyncToMainAndReturnResult = function (e, ...t) {
                return a.default.ipcRenderer.sendSync(e, ...t)
            }
        },
        404: function (e, t, o) {
            var n = this && this.__createBinding || (Object.create ? function (e, t, o, n) {
                void 0 === n && (n = o);
                var a = Object.getOwnPropertyDescriptor(t, o);
                a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                    enumerable: !0,
                    get: function () {
                        return t[o]
                    }
                }), Object.defineProperty(e, n, a)
            } : function (e, t, o, n) {
                void 0 === n && (n = o), e[n] = t[o]
            }), a = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {enumerable: !0, value: t})
            } : function (e, t) {
                e.default = t
            }), r = this && this.__importStar || function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var o in e) "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && n(t, e, o);
                return a(t, e), t
            };
            Object.defineProperty(t, "__esModule", {value: !0});
            const i = o(343), s = o(902), l = o(870), p = r(o(326)), d = (0, i.defineMessages)({
                doneButton: {id: "desktopSearch.doneButton.label", defaultMessage: "Done"},
                noMatches: {id: "desktopSearch.noResults.message", defaultMessage: "Not found"},
                foundMatches: {
                    id: "desktopSearch.foundMatches.message",
                    defaultMessage: "{matchCount, plural, one {{matchCount} match} other {{matchCount} matches}}"
                }
            });

            function u(e) {
                e.classList.contains("enabled") && e.classList.remove("enabled")
            }

            function c(e) {
                e.classList.contains("enabled") || e.classList.add("enabled")
            }

            function b(e, t) {
                return Object.keys(t).forEach((o => e.style[o] = t[o]))
            }

            window.__start = async () => {
                const e = document.getElementById("search"), t = document.getElementById("results"),
                    o = document.getElementById("next"), n = document.getElementById("prev"),
                    a = document.getElementById("done"), r = document.getElementById("button-separator"),
                    i = document.getElementById("clear-icon"), w = document.getElementById("container");
                if (!(e && t && o && n && a && r && i && w)) return;
                let y = "en-US";
                const E = await p.invokeInMainAndReturnResult("notion:get-cookie", "notion_locale");
                E.error || (y = (0, s.getLocaleFromCookie)(E.value || "en-US"));
                const L = (0, l.createIntlShape)(y);
                a.innerText = L.formatMessage(d.doneButton), b(e, h), b(t, m), b(o, k), b(n, T), b(a, g), b(r, f), b(i, M), b(w, v);
                const S = () => {
                    u(o), u(n), u(r)
                };
                S();
                const A = () => {
                    e.value = "", t.innerText = "", t.style.display = "none", S(), u(i)
                };
                e.addEventListener("input", (function (t) {
                    0 === e.value.length ? (p.sendToMain("notion:search-clear"), A()) : (c(i), p.sendToMain("notion:search-next", e.value))
                })), e.addEventListener("keypress", (function (e) {
                    "Enter" === e.key && (e.shiftKey ? n.click() : o.click())
                })), e.addEventListener("keydown", (function (e) {
                    (e.metaKey || e.ctrlKey) && "g" === e.key && (e.shiftKey ? n.click() : o.click())
                })), document.body.addEventListener("keydown", (function (t) {
                    "Escape" === t.key && a.click(), (t.metaKey || t.ctrlKey) && "f" === t.key && e.select()
                })), o.addEventListener("click", (function () {
                    e.value && p.sendToMain("notion:search-next", e.value)
                })), n.addEventListener("click", (function () {
                    e.value && p.sendToMain("notion:search-prev", e.value)
                })), a.addEventListener("click", (function () {
                    p.sendToMain("notion:search-stop-from-search"), window.setTimeout((() => {
                        A()
                    }), 100)
                })), i.addEventListener("click", (function () {
                    p.sendToMain("notion:search-clear"), A(), e.focus()
                })), p.handleMainToSearchEvent.addListener("search:result", ((e, a) => {
                    t.style.display = "block", 0 === a.count ? t.innerText = t.innerText = L.formatMessage(d.noMatches) : t.innerText = L.formatMessage(d.foundMatches, {matchCount: a.count}), a.count > 1 ? (c(o), c(n), c(r)) : S()
                })), p.handleMainToSearchEvent.addListener("search:stop", (() => {
                    window.setTimeout((() => {
                        A()
                    }), 100)
                })), p.handleMainToSearchEvent.addListener("search:start", (() => {
                    e.select()
                })), p.handleMainToSearchEvent.addListener("search:set-theme", ((i, s) => {
                    t.style.color = s.textColor, n.style.borderColor = s.dividerColor, r.style.background = s.dividerColor, o.style.borderColor = s.dividerColor, e.style.color = s.textColor, e.style.boxShadow = s.inputBoxShadow || "", e.style.background = s.inputBackgroundColor, e.style.borderRadius = `${s.borderRadius}px`, w.style.background = s.popoverBackgroundColor, w.style.boxShadow = s.popoverBoxShadow, w.style.borderRadius = `${s.borderRadius}px`, a.style.color = s.colors.white, a.style.borderRadius = `${s.borderRadius}px`, a.style.background = s.colors.blue, a.style.boxShadow = `\n\t\t\t${"light" === s.mode ? "inset" : ""}\n\t\t\t0 0 0 1px rgba(0, 0, 0, ${s.shadowOpacity})\n\t\t`
                }))
            };
            const h = {
                    width: "180px",
                    flex: "auto",
                    marginLeft: "8px",
                    marginRight: "8px",
                    cursor: "text",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    height: "24px",
                    border: "none",
                    fontSize: "12px"
                }, m = {fontSize: "12px", paddingRight: "8px", minWidth: "80px", textAlign: "center"},
                k = {border: "1px solid", borderLeft: "0px", borderRadius: "0 3px 3px 0"},
                T = {border: "1px solid", borderRight: "0px", borderRadius: "3px 0 0 3px"}, g = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    height: "24px",
                    padding: "0 12px",
                    fontWeight: "500"
                }, f = {width: "1px", height: "24px"}, M = {}, v = {
                    cssFloat: "right",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "-20px",
                    padding: "6px 10px",
                    margin: "10px 40px"
                }
        },
        288: e => {
            e.exports = require("electron")
        },
        813: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion - Kommandosøgning","desktop.tabBar.backButtonLabel":"Tilbage","desktop.tabBar.closeSidebarLabel":"Luk sidemenu","desktop.tabBar.closeTabLabel":"Luk fanen {tabTitle}","desktop.tabBar.forwardButtonLabel":"Fremad","desktop.tabBar.loadingPlaceholder":"Indlæser …","desktop.tabBar.newTabButtonLabel":"Ny fane","desktop.tabBar.openSidebarLabel":"Åbn sidemenu","desktopInstaller.failedToMove.detail":"Vi kunne ikke flytte appen til din applikationsmappe. Flyt den manuelt.","desktopInstaller.failedToMove.title":"Kunne ikke flytte app","desktopInstaller.invalidInstallDialog.cancelButton.label":"Annullér","desktopInstaller.invalidInstallDialog.confirmMove":"Din Notion-applikation er ikke installeret korrekt. Må vi flytte din Notion-app til din applikationsmappe?","desktopInstaller.invalidInstallDialog.okButton.label":"OK","desktopInstaller.invalidInstallDialog.title":"Ugyldig installation","desktopSearch.doneButton.label":"Færdig","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} match} andre {{matchCount} matches}}","desktopSearch.noResults.message":"Ikke fundet","desktopTopbar.appMenu.about":"Om Notion","desktopTopbar.appMenu.checkForUpdate":"Tjek for opdateringer...","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"Du bruger den nyeste version af Notion!","desktopTopbar.appMenu.checkForUpdate.title":"Tjek for opdateringer","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"En ny version af Notion er tilgængelig og downloades i øjeblikket i baggrunden. Tak, fordi du holder dig opdateret!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion kunne ikke oprette forbindelse til opdateringsserveren, enten på grund af et problem med din internetforbindelse eller selve opdateringsserveren. Prøv igen senere.","desktopTopbar.appMenu.downloadingUpdate":"Downloader opdatering ({percentage} %)","desktopTopbar.appMenu.hide":"Skjul Notion","desktopTopbar.appMenu.hideOthers":"Skjul andre","desktopTopbar.appMenu.preferences":"Indstillinger...","desktopTopbar.appMenu.quit":"Afslut","desktopTopbar.appMenu.quitWithoutSavingTabs":"Afslut uden at gemme faner","desktopTopbar.appMenu.restartToApplyUpdate":"Genstart for at anvende opdateringen","desktopTopbar.appMenu.services":"Tjenester","desktopTopbar.appMenu.unhide":"Vis alle","desktopTopbar.editMenu.copy":"Kopiér","desktopTopbar.editMenu.cut":"Klip","desktopTopbar.editMenu.paste":"Indsæt","desktopTopbar.editMenu.pasteAndMatchStyle":"Indsæt og match stil","desktopTopbar.editMenu.redo":"Annullér fortryd","desktopTopbar.editMenu.selectAll":"Vælg alle","desktopTopbar.editMenu.speech":"Tale","desktopTopbar.editMenu.speech.startSpeaking":"Begynd at tale","desktopTopbar.editMenu.speech.stopSpeaking":"Stop med at tale","desktopTopbar.editMenu.title":"Rediger","desktopTopbar.editMenu.undo":"Fortryd","desktopTopbar.fileMenu.close":"Luk vindue","desktopTopbar.fileMenu.closeTab":"Luk fane","desktopTopbar.fileMenu.newTab":"Ny fane","desktopTopbar.fileMenu.newWindow":"Nyt vindue","desktopTopbar.fileMenu.print":"Udskriv ...","desktopTopbar.fileMenu.quit":"Afslut","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Afslut uden at gemme faner","desktopTopbar.fileMenu.reopenClosedTab":"Åbn den senest lukkede fane igen","desktopTopbar.fileMenu.title":"Fil","desktopTopbar.helpMenu.disableDebugLogging":"Deaktiver avanceret logning og genstart","desktopTopbar.helpMenu.disableHardwareAcceleration":"Deaktiver hardwareacceleration og genstart","desktopTopbar.helpMenu.enableDebugLogging":"Aktiver avanceret logning og genstart","desktopTopbar.helpMenu.enableHardwareAcceleration":"Aktivér hardwareacceleration og genstart","desktopTopbar.helpMenu.openConsole":"Åbn konsol...","desktopTopbar.helpMenu.openHelpAndSupport":"Åbn hjælp og dokumentation","desktopTopbar.helpMenu.recordPerformanceTrace":"Optag præstationssporing...","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"Ønsker du at optage en præstationssporing for de næste 30 sekunder? Når det er gjort, placeres den i din mappe Downloads.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Annullér","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Registrer præstationssporing","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"Optage en præstationssporing?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Nulstil og slet alle lokale data","desktopTopbar.helpMenu.showLogsInExplorer":"Vis logfiler i Stifinder","desktopTopbar.helpMenu.showLogsInFinder":"Vis logfiler i Finder","desktopTopbar.helpMenu.title":"Hjælp","desktopTopbar.historyMenu.historyBack":"Tilbage","desktopTopbar.historyMenu.historyForward":"Fremad","desktopTopbar.historyMenu.title":"Historik","desktopTopbar.toggleDevTools":"Slå udviklerværktøjer til/fra","desktopTopbar.toggleWindowDevTools":"Slå vinduesudviklerværktøjer til/fra","desktopTopbar.troubleshootingMenu.title":"Fejlfinding","desktopTopbar.viewMenu.actualSize":"Faktisk størrelse","desktopTopbar.viewMenu.forceReload":"Tving genindlæsning","desktopTopbar.viewMenu.reload":"Genindlæs","desktopTopbar.viewMenu.showHideSidebar":"Vis/skjul sidemenu","desktopTopbar.viewMenu.title":"Visning","desktopTopbar.viewMenu.togglefullscreen":"Slå fuld skærm til/fra","desktopTopbar.viewMenu.zoomIn":"Zoom ind","desktopTopbar.viewMenu.zoomOut":"Zoom ud","desktopTopbar.whatsNewMac.title":"Åbn Nyheder i Notion til macOS","desktopTopbar.whatsNewWindows.title":"Åbn Nyheder i Notion til Windows","desktopTopbar.windowMenu.close":"Luk","desktopTopbar.windowMenu.front":"Front","desktopTopbar.windowMenu.maximize":"Maksimer","desktopTopbar.windowMenu.minimize":"Minimer","desktopTopbar.windowMenu.showNextTab":"Vis næste fane","desktopTopbar.windowMenu.showPreviousTab":"Vis forrige fane","desktopTopbar.windowMenu.title":"Vindue","desktopTopbar.windowMenu.zoom":"Zoom","desktopTroubleshooting.showLogs.error.message.mac":"Notion stødte på en fejl, mens programmet forsøgte at vise logfilerne i Finder:","desktopTroubleshooting.showLogs.error.message.windows":"Notion stødte på en fejl, mens programmet forsøgte at vise logfilerne i Explorer:","desktopTroubleshooting.showLogs.error.title":"Visning af logfilerne mislykkedes","menuBarIcon.menu.enableQuickSearch":"Aktiver Hurtig søgning","menuBarIcon.menu.keepInBackground":"Hold i baggrunden","menuBarIcon.menu.launchPreferences":"Åbn Indstillinger","menuBarIcon.menu.openOnLogin":"Åbn Notion ved Login","menuBarIcon.menu.quitNotion":"Afslut Notion","menuBarIcon.menu.selectCommandSearchShortcut":"Skift genvej til Kommandosøgning","menuBarIcon.menu.showImmediately":"Vis øjeblikkeligt","menuBarIcon.menu.showNotionInMenuBar":"Vis Notion i menulinjen","menuBarIcon.menu.toggleCommandSearch":"Slå Kommandosøgning til/fra","openAtLogin.dialog.detail":"{operatingSystem} forhindrede Notion i at konfigurere indstillingen \'Åbn ved login\'. Dette sker normalt, når Notions opstart er blevet konfigureret i systemindstillingerne, eller hvis du ikke har tilstrækkelig tilladelse. Du kan stadig konfigurere denne indstilling manuelt i systemindstillingerne.","openAtLogin.dialog.title":"Åbn ved Login","updatePrompt.detail":"Vil du gerne installere det nu? Vi åbner dine vinduer og faner igen for dig.","updatePrompt.installAndRelaunch":"Installer og genstart","updatePrompt.message":"Ny version af Notion er tilgængelig!","updatePrompt.remindMeLater":"Påmind mig senere","window.loadingError.message":"Fejl ved indlæsning af Notion, opret forbindelse til internettet for at komme i gang.","window.loadingError.reload":"Genindlæs","window.tabLoadingError.cancel":"Annullér","window.tabMenu.closeOtherTabs":"Luk andre faner","window.tabMenu.closeTab":"Luk fane","window.tabMenu.closeTabsToLeft":"Luk faner til venstre","window.tabMenu.closeTabsToRight":"Luk faner til højre","window.tabMenu.copyLink":"Kopiér link","window.tabMenu.duplicateTab":"Dupliker fane","window.tabMenu.moveToNewWindow":"Flyt fanen til nyt vindue","window.tabMenu.refresh":"Opdater fane"}')
        },
        687: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion – Direktsuche","desktop.tabBar.backButtonLabel":"Zurück","desktop.tabBar.closeSidebarLabel":"Seitenleiste schließen","desktop.tabBar.closeTabLabel":"Tab schließen, {tabTitle}","desktop.tabBar.forwardButtonLabel":"Weiter","desktop.tabBar.loadingPlaceholder":"Wird geladen …","desktop.tabBar.newTabButtonLabel":"Neuer Tab","desktop.tabBar.openSidebarLabel":"Seitenleiste öffnen","desktopInstaller.failedToMove.detail":"Wir konnten die App nicht in deinen Anwendungsordner verschieben. Verschiebe sie bitte manuell.","desktopInstaller.failedToMove.title":"App konnte nicht verschoben werden","desktopInstaller.invalidInstallDialog.cancelButton.label":"Abbrechen","desktopInstaller.invalidInstallDialog.confirmMove":"Deine Notion-Anwendung ist nicht richtig installiert. Dürfen wir die Notion-App in deinen Anwendungsordner verschieben?","desktopInstaller.invalidInstallDialog.okButton.label":"OK","desktopInstaller.invalidInstallDialog.title":"Ungültige Installation","desktopSearch.doneButton.label":"Fertig","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} Treffer} other {{matchCount} Treffer}}","desktopSearch.noResults.message":"Nicht gefunden","desktopTopbar.appMenu.about":"Über Notion","desktopTopbar.appMenu.checkForUpdate":"Suche nach Updates…","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"Du verwendest die neueste Version von Notion!","desktopTopbar.appMenu.checkForUpdate.title":"Suche nach Updates","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"Eine neue Version von Notion ist verfügbar und wird derzeit im Hintergrund heruntergeladen. Danke, dass du auf dem Laufenden bleibst!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion konnte keine Verbindung mit dem Update-Server herstellen. Dies kann an einem Problem mit deiner Internetverbindung oder dem Update-Server liegen. Bitte versuche es später erneut.","desktopTopbar.appMenu.downloadingUpdate":"Update wird heruntergeladen ({percentage}%)","desktopTopbar.appMenu.hide":"Notion verbergen","desktopTopbar.appMenu.hideOthers":"Andere verbergen","desktopTopbar.appMenu.preferences":"Einstellungen …","desktopTopbar.appMenu.quit":"Beenden","desktopTopbar.appMenu.quitWithoutSavingTabs":"Ohne Speichern von Tabs abbrechen","desktopTopbar.appMenu.resetAndEraseAllLocalData":"Alle lokalen Daten zurücksetzen und löschen","desktopTopbar.appMenu.resetAndUpdateApp":"App zurücksetzen und aktualisieren","desktopTopbar.appMenu.restartToApplyUpdate":"Neu starten, um das Update auszuführen","desktopTopbar.appMenu.services":"Dienste","desktopTopbar.appMenu.unhide":"Alle anzeigen","desktopTopbar.editMenu.copy":"Kopieren","desktopTopbar.editMenu.cut":"Ausschneiden","desktopTopbar.editMenu.paste":"Einfügen","desktopTopbar.editMenu.pasteAndMatchStyle":"Einfügen und Stil anpassen","desktopTopbar.editMenu.redo":"Wiederholen","desktopTopbar.editMenu.selectAll":"Alles auswählen","desktopTopbar.editMenu.speech":"Sprachausgabe","desktopTopbar.editMenu.speech.startSpeaking":"Sprechen beginnen","desktopTopbar.editMenu.speech.stopSpeaking":"Sprechen beenden","desktopTopbar.editMenu.title":"Bearbeiten","desktopTopbar.editMenu.undo":"Rückgängig machen","desktopTopbar.fileMenu.close":"Fenster schließen","desktopTopbar.fileMenu.closeTab":"Tab schließen","desktopTopbar.fileMenu.newTab":"Neuer Tab","desktopTopbar.fileMenu.newWindow":"Neues Fenster","desktopTopbar.fileMenu.print":"Drucken…","desktopTopbar.fileMenu.quit":"Beenden","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Ohne Speichern von Tabs beenden","desktopTopbar.fileMenu.reopenClosedTab":"Zuletzt geschlossenen Tab erneut öffnen","desktopTopbar.fileMenu.title":"Datei","desktopTopbar.helpMenu.disableDebugLogging":"Erweitertes Anmelden deaktivieren und neu starten","desktopTopbar.helpMenu.disableHardwareAcceleration":"Hardwarebeschleunigung deaktivieren und neu starten","desktopTopbar.helpMenu.enableDebugLogging":"Erweitertes Anmelden aktivieren und neu starten","desktopTopbar.helpMenu.enableHardwareAcceleration":"Hardwarebeschleunigung aktivieren und neu starten","desktopTopbar.helpMenu.openConsole":"Konsole wird geöffnet…","desktopTopbar.helpMenu.openHelpAndSupport":"Hilfe und Dokumentation öffnen","desktopTopbar.helpMenu.recordPerformanceTrace":"Performance Trace aufzeichnen…","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"Möchtest du einen Leistungsnachweis für die nächsten 30 Sekunden aufzeichnen? Nach der Aufzeichnung wird dieser im Ordner „Downloads“ gespeichert.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Abbrechen","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Leistungsnachweis aufzeichnen","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"Leistungsnachweis aufzeichnen?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Alle lokalen Daten zurücksetzen und löschen","desktopTopbar.helpMenu.showLogsInExplorer":"Protokolle im Explorer anzeigen","desktopTopbar.helpMenu.showLogsInFinder":"Protokolle im Finder anzeigen","desktopTopbar.helpMenu.title":"Hilfe","desktopTopbar.historyMenu.historyBack":"Zurück","desktopTopbar.historyMenu.historyForward":"Weiter","desktopTopbar.historyMenu.title":"Verlauf","desktopTopbar.toggleDevTools":"Entwicklerwerkzeuge aufklappen","desktopTopbar.toggleWindowDevTools":"Fenster-Entwicklerwerkzeuge aufklappen","desktopTopbar.troubleshootingMenu.title":"Fehlerbehebung","desktopTopbar.viewMenu.actualSize":"Tatsächliche Größe","desktopTopbar.viewMenu.forceReload":"Neuladen erzwingen","desktopTopbar.viewMenu.reload":"Neu laden","desktopTopbar.viewMenu.reloadAllTabs":"Alle Tabs neu laden","desktopTopbar.viewMenu.showHideSidebar":"Seitenleiste ein-/ausblenden","desktopTopbar.viewMenu.title":"Ansicht","desktopTopbar.viewMenu.togglefullscreen":"Vollbild umschalten","desktopTopbar.viewMenu.zoomIn":"Vergrößern","desktopTopbar.viewMenu.zoomOut":"Verkleinern","desktopTopbar.whatsNewMac.title":"Neue Funktionen in Notion für macOS ansehen","desktopTopbar.whatsNewWindows.title":"Neue Funktionen in Notion für Windows ansehen","desktopTopbar.windowMenu.close":"Schließen","desktopTopbar.windowMenu.front":"Vordergrund","desktopTopbar.windowMenu.maximize":"Maximieren","desktopTopbar.windowMenu.minimize":"Minimieren","desktopTopbar.windowMenu.showNextTab":"Nächsten Tab anzeigen","desktopTopbar.windowMenu.showPreviousTab":"Vorherigen Tab anzeigen","desktopTopbar.windowMenu.title":"Fenster","desktopTopbar.windowMenu.zoom":"Zoom","desktopTroubleshooting.showLogs.error.message.mac":"Notion hat beim Versuch, die Protokolle im Finder anzuzeigen, einen Fehler festgestellt:","desktopTroubleshooting.showLogs.error.message.windows":"Notion hat beim Versuch, die Protokolle im Explorer anzuzeigen, einen Fehler festgestellt:","desktopTroubleshooting.showLogs.error.title":"Fehler beim Anzeigen der Protokolle","menuBarIcon.menu.enableQuickSearch":"Quick Search aktivieren","menuBarIcon.menu.keepInBackground":"Im Hintergrund halten","menuBarIcon.menu.launchPreferences":"Start-Einstellungen","menuBarIcon.menu.openCloseQuickSearch":"Quick Search öffnen/schließen","menuBarIcon.menu.openOnLogin":"Notion bei Anmeldung öffnen","menuBarIcon.menu.quitNotion":"Notion beenden","menuBarIcon.menu.selectCommandSearchShortcut":"Tastaturkürzel für Direktsuche ändern","menuBarIcon.menu.showImmediately":"Sofort anzeigen","menuBarIcon.menu.showNotionInMenuBar":"Notion in der Menüleiste anzeigen","menuBarIcon.menu.toggleCommandSearch":"Direktsuche umschalten","openAtLogin.dialog.detail":"{operatingSystem} hat Notion daran gehindert, die Einstellung „Bei Anmeldung öffnen“ zu konfigurieren. Dies kommt meist vor, wenn der Notion-Startvorgang in den Systemeinstellungen konfiguriert wurde oder wenn du über unzureichende Zugriffsrechte verfügst. Du kannst diese Einstellung aber manuell in den Systemeinstellungen konfigurieren.","openAtLogin.dialog.title":"Bei Anmeldung öffnen","updatePrompt.detail":"Möchtest du die Installation jetzt vornehmen? Wir öffnen dann deine Fenster und Tabs für dich erneut.","updatePrompt.installAndRelaunch":"Installieren und neu starten","updatePrompt.message":"Eine neue Version von Notion ist verfügbar!","updatePrompt.remindMeLater":"Später erinnern","window.loadingError.message":"Fehler beim Laden von Notion. Stelle eine Internet-Verbindung her, um loszulegen.","window.loadingError.reload":"Neu laden","window.tabLoadingError.cancel":"Abbrechen","window.tabMenu.closeOtherTabs":"Andere Tabs schließen","window.tabMenu.closeTab":"Tab schließen","window.tabMenu.closeTabsToLeft":"Tabs links schließen","window.tabMenu.closeTabsToRight":"Tabs rechts schließen","window.tabMenu.copyLink":"Link kopieren","window.tabMenu.duplicateTab":"Tab duplizieren","window.tabMenu.moveToNewWindow":"Tab in neues Fenster verschieben","window.tabMenu.refresh":"Tab aktualisieren"}')
        },
        499: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion - Atajo de búsqueda","desktop.tabBar.backButtonLabel":"Atrás","desktop.tabBar.closeSidebarLabel":"Cerrar barra lateral","desktop.tabBar.closeTabLabel":"Cerrar la pestaña {tabTitle}","desktop.tabBar.forwardButtonLabel":"Adelante","desktop.tabBar.loadingPlaceholder":"Cargando…","desktop.tabBar.newTabButtonLabel":"Nueva pestaña","desktop.tabBar.openSidebarLabel":"Abrir la barra lateral","desktopInstaller.failedToMove.detail":"No pudimos mover la app a la carpeta Aplicaciones. Deberás hacerlo de forma manual.","desktopInstaller.failedToMove.title":"No se pudo mover la app","desktopInstaller.invalidInstallDialog.cancelButton.label":"Cancelar","desktopInstaller.invalidInstallDialog.confirmMove":"La aplicación de Notion no se instaló correctamente. ¿Nos das permiso para mover la app de Notion a la carpeta Aplicaciones?","desktopInstaller.invalidInstallDialog.okButton.label":"Aceptar","desktopInstaller.invalidInstallDialog.title":"Instalación no válida","desktopSearch.doneButton.label":"Listo","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} coincidencia} other {{matchCount} coincidencias}}","desktopSearch.noResults.message":"Sin resultados","desktopTopbar.appMenu.about":"Acerca de Notion","desktopTopbar.appMenu.checkForUpdate":"Buscar actualizaciones…","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"¡Ya cuentas con la versión más reciente de Notion!","desktopTopbar.appMenu.checkForUpdate.title":"Buscar actualizaciones","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"Hay una nueva versión de Notion disponible y se está descargando en segundo plano. ¡Gracias por estar al día!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion no pudo conectarse con el servidor de actualización debido a un problema de la conexión a Internet o del propio servidor. Inténtalo de nuevo más tarde.","desktopTopbar.appMenu.downloadingUpdate":"Descargando actualización ({percentage} %)","desktopTopbar.appMenu.hide":"Ocultar Notion","desktopTopbar.appMenu.hideOthers":"Ocultar otros","desktopTopbar.appMenu.preferences":"Preferencias…","desktopTopbar.appMenu.quit":"Salir","desktopTopbar.appMenu.quitWithoutSavingTabs":"Cerrar sin guardar las pestañas","desktopTopbar.appMenu.resetAndEraseAllLocalData":"Restablecer y borrar todos los datos locales","desktopTopbar.appMenu.resetAndUpdateApp":"Restablecer y actualizar la aplicación","desktopTopbar.appMenu.restartToApplyUpdate":"Reinicia para aplicar la actualización","desktopTopbar.appMenu.services":"Servicios","desktopTopbar.appMenu.unhide":"Mostrar todo","desktopTopbar.editMenu.copy":"Copiar","desktopTopbar.editMenu.cut":"Cortar","desktopTopbar.editMenu.paste":"Pegar","desktopTopbar.editMenu.pasteAndMatchStyle":"Pegar y combinar formato","desktopTopbar.editMenu.redo":"Rehacer","desktopTopbar.editMenu.selectAll":"Seleccionar todo","desktopTopbar.editMenu.speech":"Voz","desktopTopbar.editMenu.speech.startSpeaking":"Empezar locución","desktopTopbar.editMenu.speech.stopSpeaking":"Detener locución","desktopTopbar.editMenu.title":"Editar","desktopTopbar.editMenu.undo":"Deshacer","desktopTopbar.fileMenu.close":"Cerrar ventana","desktopTopbar.fileMenu.closeTab":"Cerrar pestaña","desktopTopbar.fileMenu.newTab":"Nueva pestaña","desktopTopbar.fileMenu.newWindow":"Nueva ventana","desktopTopbar.fileMenu.print":"Imprimir...","desktopTopbar.fileMenu.quit":"Salir","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Salir sin guardar las pestañas","desktopTopbar.fileMenu.reopenClosedTab":"Volver a abrir la última pestaña cerrada","desktopTopbar.fileMenu.title":"Archivo","desktopTopbar.helpMenu.disableDebugLogging":"Desactivar el inicio de sesión acelerado y reiniciar","desktopTopbar.helpMenu.disableHardwareAcceleration":"Desactivar aceleración por hardware y reiniciar","desktopTopbar.helpMenu.enableDebugLogging":"Activar el inicio de sesión acelerado y reiniciar","desktopTopbar.helpMenu.enableHardwareAcceleration":"Activar aceleración por hardware y reiniciar","desktopTopbar.helpMenu.openConsole":"Abrir consola…","desktopTopbar.helpMenu.openHelpAndSupport":"Abrir Ayuda y documentación","desktopTopbar.helpMenu.recordPerformanceTrace":"Grabar registro de rendimiento…","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"¿Quieres grabar un registro del rendimiento de los próximos 30 segundos? Una vez que esté listo, se guardará en tu carpeta de Descargas.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Cancelar","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Grabar registro de rendimiento","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"¿Quieres grabar un registro de rendimiento?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Restablecer y borrar todos los datos locales","desktopTopbar.helpMenu.showLogsInExplorer":"Mostrar registros en Explorer","desktopTopbar.helpMenu.showLogsInFinder":"Mostrar registros en Finder","desktopTopbar.helpMenu.title":"Ayuda","desktopTopbar.historyMenu.historyBack":"Atrás","desktopTopbar.historyMenu.historyForward":"Adelante","desktopTopbar.historyMenu.title":"Historial","desktopTopbar.toggleDevTools":"Activar/desactivar herramientas de desarrollo","desktopTopbar.toggleWindowDevTools":"Mostrar/Ocultar herramientas de desarrollo de Windows","desktopTopbar.troubleshootingMenu.title":"Solución de problemas","desktopTopbar.viewMenu.actualSize":"Tamaño original","desktopTopbar.viewMenu.forceReload":"Forzar recarga","desktopTopbar.viewMenu.reload":"Recargar","desktopTopbar.viewMenu.reloadAllTabs":"Recargar todas las pestañas","desktopTopbar.viewMenu.showHideSidebar":"Mostrar/Ocultar la barra lateral","desktopTopbar.viewMenu.title":"Ver","desktopTopbar.viewMenu.togglefullscreen":"Mostrar/ocultar pantalla completa","desktopTopbar.viewMenu.zoomIn":"Acercar","desktopTopbar.viewMenu.zoomOut":"Alejar","desktopTopbar.whatsNewMac.title":"Abrir las Novedades en Notion para macOS","desktopTopbar.whatsNewWindows.title":"Abrir las Novedades en Notion para Windows","desktopTopbar.windowMenu.close":"Cerrar","desktopTopbar.windowMenu.front":"Primer plano","desktopTopbar.windowMenu.maximize":"Maximizar","desktopTopbar.windowMenu.minimize":"Minimizar","desktopTopbar.windowMenu.showNextTab":"Mostrar pestaña siguiente","desktopTopbar.windowMenu.showPreviousTab":"Mostrar pestaña anterior","desktopTopbar.windowMenu.title":"Ventana","desktopTopbar.windowMenu.zoom":"Zoom","desktopTroubleshooting.showLogs.error.message.mac":"Notion encontró un error al intentar mostrar los registros en Finder:","desktopTroubleshooting.showLogs.error.message.windows":"Notion encontró un error al intentar mostrar los registros en Explorer:","desktopTroubleshooting.showLogs.error.title":"Se produjo un error al intentar mostrar los registros","menuBarIcon.menu.enableQuickSearch":"Activar búsqueda rápida","menuBarIcon.menu.keepInBackground":"Dejar en segundo plano","menuBarIcon.menu.launchPreferences":"Preferencias de inicio","menuBarIcon.menu.openCloseQuickSearch":"Abrir/cerrar búsqueda rápida","menuBarIcon.menu.openOnLogin":"Abrir Notion al iniciar sesión","menuBarIcon.menu.quitNotion":"Salir de Notion","menuBarIcon.menu.selectCommandSearchShortcut":"Cambiar atajo del Atajo de búsqueda","menuBarIcon.menu.showImmediately":"Mostrar de inmediato","menuBarIcon.menu.showNotionInMenuBar":"Mostrar Notion en la barra de menú","menuBarIcon.menu.toggleCommandSearch":"Activar/desactivar atajo de búsqueda","openAtLogin.dialog.detail":"{operatingSystem} impidió que Notion configure la opción “Abrir al iniciar sesión”. Esto normalmente ocurre cuando el inicio de Notion se configuró desde los ajustes del sistema o no tienes permisos suficientes para hacerlo. Puedes configurar esta opción de forma manual en los ajustes del sistema.","openAtLogin.dialog.title":"Abrir al iniciar sesión","updatePrompt.detail":"¿Quieres instalarla ahora? Tus ventanas y pestañas se reabrirán de forma automática.","updatePrompt.installAndRelaunch":"Instalar y reabrir","updatePrompt.message":"¡Hay una nueva versión de Notion disponible!","updatePrompt.remindMeLater":"Recordármelo más tarde","window.loadingError.message":"Error al cargar Notion; conéctate a Internet para empezar.","window.loadingError.reload":"Recargar","window.tabLoadingError.cancel":"Cancelar","window.tabMenu.closeOtherTabs":"Cerrar las demás pestañas","window.tabMenu.closeTab":"Cerrar pestaña","window.tabMenu.closeTabsToLeft":"Cerrar pestañas a la izquierda","window.tabMenu.closeTabsToRight":"Cerrar pestañas a la derecha","window.tabMenu.copyLink":"Copiar enlace","window.tabMenu.duplicateTab":"Duplicar pestaña","window.tabMenu.moveToNewWindow":"Mover la pestaña a una nueva ventana","window.tabMenu.refresh":"Actualizar pestaña"}')
        },
        545: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion - Atajo de búsqueda","desktop.tabBar.backButtonLabel":"Atrás","desktop.tabBar.closeSidebarLabel":"Cerrar la barra lateral","desktop.tabBar.closeTabLabel":"Cerrar pestaña {tabTitle}","desktop.tabBar.forwardButtonLabel":"Adelante","desktop.tabBar.loadingPlaceholder":"Cargando…","desktop.tabBar.newTabButtonLabel":"Nueva pestaña","desktop.tabBar.openSidebarLabel":"Abrir la barra lateral","desktopInstaller.failedToMove.detail":"No hemos podido mover la aplicación a la carpeta Aplicaciones. Intenta moverla de forma manual.","desktopInstaller.failedToMove.title":"Error al mover la aplicación","desktopInstaller.invalidInstallDialog.cancelButton.label":"Cancelar","desktopInstaller.invalidInstallDialog.confirmMove":"La aplicación de Notion no se ha instalado correctamente. ¿Quieres que movamos la aplicación de Notion a la carpeta Aplicaciones?","desktopInstaller.invalidInstallDialog.okButton.label":"Aceptar","desktopInstaller.invalidInstallDialog.title":"Instalación no válida","desktopSearch.doneButton.label":"Listo","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} coincidencia} other {{matchCount} coincidencias}}","desktopSearch.noResults.message":"Sin resultados","desktopTopbar.appMenu.about":"Acerca de Notion","desktopTopbar.appMenu.checkForUpdate":"Buscar actualizaciones...","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"¡Tienes la última versión de Notion!","desktopTopbar.appMenu.checkForUpdate.title":"Buscar actualizaciones","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"Hay una nueva versión de Notion disponible y se está descargando en segundo plano. ¡Gracias por mantenerte al día!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion no ha podido establecer una conexión con el servidor de actualizaciones debido a un problema de la conexión a Internet o del propio servidor. Inténtalo de nuevo más tarde.","desktopTopbar.appMenu.downloadingUpdate":"Descargando la actualización ({percentage} %)","desktopTopbar.appMenu.hide":"Ocultar Notion","desktopTopbar.appMenu.hideOthers":"Ocultar otros","desktopTopbar.appMenu.preferences":"Preferencias…","desktopTopbar.appMenu.quit":"Salir","desktopTopbar.appMenu.quitWithoutSavingTabs":"Cerrar sin guardar pestañas","desktopTopbar.appMenu.resetAndEraseAllLocalData":"Reiniciar y borrar los datos locales","desktopTopbar.appMenu.resetAndUpdateApp":"Reiniciar y actualizar la aplicación","desktopTopbar.appMenu.restartToApplyUpdate":"Reiniciar para aplicar la actualización","desktopTopbar.appMenu.services":"Servicios","desktopTopbar.appMenu.unhide":"Mostrar todo","desktopTopbar.editMenu.copy":"Copiar","desktopTopbar.editMenu.cut":"Cortar","desktopTopbar.editMenu.paste":"Pegar","desktopTopbar.editMenu.pasteAndMatchStyle":"Pegar y combinar formato","desktopTopbar.editMenu.redo":"Rehacer","desktopTopbar.editMenu.selectAll":"Seleccionar todo","desktopTopbar.editMenu.speech":"Voz","desktopTopbar.editMenu.speech.startSpeaking":"Empezar locución","desktopTopbar.editMenu.speech.stopSpeaking":"Detener locución","desktopTopbar.editMenu.title":"Editar","desktopTopbar.editMenu.undo":"Deshacer","desktopTopbar.fileMenu.close":"Cerrar ventana","desktopTopbar.fileMenu.closeTab":"Cerrar pestaña","desktopTopbar.fileMenu.newTab":"Nueva pestaña","desktopTopbar.fileMenu.newWindow":"Nueva ventana","desktopTopbar.fileMenu.print":"Imprimir…","desktopTopbar.fileMenu.quit":"Salir","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Salir sin guardar pestañas","desktopTopbar.fileMenu.reopenClosedTab":"Abrir la última pestaña cerrada","desktopTopbar.fileMenu.title":"Archivo","desktopTopbar.helpMenu.disableDebugLogging":"Desactivar el registro avanzado y reiniciar","desktopTopbar.helpMenu.disableHardwareAcceleration":"Desactivar aceleración por hardware y reiniciar","desktopTopbar.helpMenu.enableDebugLogging":"Activar el registro avanzado y reiniciar","desktopTopbar.helpMenu.enableHardwareAcceleration":"Activar aceleración por hardware y reiniciar","desktopTopbar.helpMenu.openConsole":"Abrir consola…","desktopTopbar.helpMenu.openHelpAndSupport":"Abrir Ayuda y documentación","desktopTopbar.helpMenu.recordPerformanceTrace":"Grabar registro de rendimiento...","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"¿Quieres grabar un registro de rendimiento para los próximos 30 segundos? Una vez esté listo, se guardará en tu carpeta de Descargas.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Cancelar","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Grabar registro de rendimiento","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"¿Quieres grabar un registro de rendimiento?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Reiniciar y borrar los datos locales","desktopTopbar.helpMenu.showLogsInExplorer":"Mostrar registros en Explorer","desktopTopbar.helpMenu.showLogsInFinder":"Mostrar registros en Finder","desktopTopbar.helpMenu.title":"Ayuda","desktopTopbar.historyMenu.historyBack":"Atrás","desktopTopbar.historyMenu.historyForward":"Adelante","desktopTopbar.historyMenu.title":"Historial","desktopTopbar.toggleDevTools":"Mostrar herramientas de desarrollo","desktopTopbar.toggleWindowDevTools":"Mostrar herramientas de desarrollo","desktopTopbar.troubleshootingMenu.title":"Solución de problemas","desktopTopbar.viewMenu.actualSize":"Tamaño real","desktopTopbar.viewMenu.forceReload":"Forzar recarga","desktopTopbar.viewMenu.reload":"Actualizar","desktopTopbar.viewMenu.reloadAllTabs":"Actualizar todas las pestañas","desktopTopbar.viewMenu.showHideSidebar":"Mostrar/ocultar barra lateral","desktopTopbar.viewMenu.title":"Ver","desktopTopbar.viewMenu.togglefullscreen":"Cambiar a pantalla completa","desktopTopbar.viewMenu.zoomIn":"Acercar","desktopTopbar.viewMenu.zoomOut":"Alejar","desktopTopbar.whatsNewMac.title":"Conoce las Novedades de Notion para macOS","desktopTopbar.whatsNewWindows.title":"Conoce las novedades de Notion para Windows","desktopTopbar.windowMenu.close":"Cerrar","desktopTopbar.windowMenu.front":"Primer plano","desktopTopbar.windowMenu.maximize":"Maximizar","desktopTopbar.windowMenu.minimize":"Minimizar","desktopTopbar.windowMenu.showNextTab":"Mostrar pestaña siguiente","desktopTopbar.windowMenu.showPreviousTab":"Mostrar pestaña anterior","desktopTopbar.windowMenu.title":"Ventana","desktopTopbar.windowMenu.zoom":"Zoom","desktopTroubleshooting.showLogs.error.message.mac":"Notion ha encontrado un error al intentar mostrar los registros en Finder:","desktopTroubleshooting.showLogs.error.message.windows":"Notion ha encontrado un error al intentar mostrar los registros en Explorer:","desktopTroubleshooting.showLogs.error.title":"Se ha producido un error al mostrar los registros","menuBarIcon.menu.enableQuickSearch":"Activar búsqueda rápida","menuBarIcon.menu.keepInBackground":"Mantener en segundo plano","menuBarIcon.menu.launchPreferences":"Preferencias de inicio","menuBarIcon.menu.openCloseQuickSearch":"Abrir/Cerrar búsqueda rápida","menuBarIcon.menu.openOnLogin":"Abrir Notion al iniciar sesión","menuBarIcon.menu.quitNotion":"Salir de Notion","menuBarIcon.menu.selectCommandSearchShortcut":"Cambiar acceso directo del atajo de búsqueda","menuBarIcon.menu.showImmediately":"Mostrar inmediatamente","menuBarIcon.menu.showNotionInMenuBar":"Mostrar Notion en la barra de menús","menuBarIcon.menu.toggleCommandSearch":"Activar/desactivar atajo de búsqueda","openAtLogin.dialog.detail":"{operatingSystem} ha impedido que Notion configure la opción «Abrir al iniciar sesión». Esto suele ocurrir si has configurado el inicio de Notion mediante los ajustes del sistema o si careces de los permisos necesarios. Puedes configurar esta opción de forma manual en la configuración del sistema.","openAtLogin.dialog.title":"Abrir al iniciar sesión","updatePrompt.detail":"¿Te gustaría instalarlo ahora? Volveremos a abrir tus ventanas y pestañas.","updatePrompt.installAndRelaunch":"Instalar y reiniciar","updatePrompt.message":"Hay una nueva versión de Notion disponible.","updatePrompt.remindMeLater":"Recordármelo más tarde","window.loadingError.message":"Error al cargar Notion. Conéctate a Internet para comenzar.","window.loadingError.reload":"Actualizar","window.tabLoadingError.cancel":"Cancelar","window.tabMenu.closeOtherTabs":"Cerrar otras pestañas","window.tabMenu.closeTab":"Cerrar pestaña","window.tabMenu.closeTabsToLeft":"Cerrar pestañas a la izquierda","window.tabMenu.closeTabsToRight":"Cerrar pestañas a la derecha","window.tabMenu.copyLink":"Copiar enlace","window.tabMenu.duplicateTab":"Duplicar pestaña","window.tabMenu.moveToNewWindow":"Mover pestaña a nueva ventana","window.tabMenu.refresh":"Actualizar pestaña"}')
        },
        395: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion – komentohaku","desktop.tabBar.backButtonLabel":"Takaisin","desktop.tabBar.closeSidebarLabel":"Sulje sivuvalikko","desktop.tabBar.closeTabLabel":"Sulje välilehti, {tabTitle}","desktop.tabBar.forwardButtonLabel":"Eteenpäin","desktop.tabBar.loadingPlaceholder":"Ladataan…","desktop.tabBar.newTabButtonLabel":"Uusi välilehti","desktop.tabBar.openSidebarLabel":"Avaa sivuvalikko","desktopInstaller.failedToMove.detail":"Sovelluksen siirtäminen Sovellukset-kansioon epäonnistui. Siirrä se itse.","desktopInstaller.failedToMove.title":"Sovelluksen siirtäminen epäonnistui","desktopInstaller.invalidInstallDialog.cancelButton.label":"Peruuta","desktopInstaller.invalidInstallDialog.confirmMove":"Notion-sovellustasi ei ole asennettu oikein. Voimmeko siirtää Notion-sovelluksesi Sovellukset-kansioon?","desktopInstaller.invalidInstallDialog.okButton.label":"OK","desktopInstaller.invalidInstallDialog.title":"Virheellinen asennus","desktopSearch.doneButton.label":"Valmis","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} vastaavuus} other {{matchCount} vastaavuutta}}","desktopSearch.noResults.message":"Ei löytynyt","desktopTopbar.appMenu.about":"Tietoja Notionista","desktopTopbar.appMenu.checkForUpdate":"Tarkistetaan päivityksiä…","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"Sinulla on Notionin uusin versio käytössä!","desktopTopbar.appMenu.checkForUpdate.title":"Tarkistetaan päivityksiä","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"Notionin uusi versio on saatavilla ja sitä ladataan taustalla. Kiitos, että olet ajan tasalla!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion ei onnistunut muodostamaan yhteyttä päivityspalvelimen kanssa joko Internet-yhteytesi tai itse päivityspalvelimen ongelman vuoksi. Yritä uudelleen myöhemmin.","desktopTopbar.appMenu.downloadingUpdate":"Ladataan päivitystä ({percentage} %)","desktopTopbar.appMenu.hide":"Piilota Notion","desktopTopbar.appMenu.hideOthers":"Piilota muut","desktopTopbar.appMenu.preferences":"Asetukset…","desktopTopbar.appMenu.quit":"Lopeta","desktopTopbar.appMenu.quitWithoutSavingTabs":"Sulje tallentamatta välilehtiä","desktopTopbar.appMenu.restartToApplyUpdate":"Käynnistä uudelleen päivityksen käyttöön ottamiseksi","desktopTopbar.appMenu.services":"Palvelut","desktopTopbar.appMenu.unhide":"Näytä kaikki","desktopTopbar.editMenu.copy":"Kopioi","desktopTopbar.editMenu.cut":"Leikkaa","desktopTopbar.editMenu.paste":"Liitä","desktopTopbar.editMenu.pasteAndMatchStyle":"Liitä ja muuta tyyli vastaavaksi","desktopTopbar.editMenu.redo":"Toteuta uudelleen","desktopTopbar.editMenu.selectAll":"Valitse kaikki","desktopTopbar.editMenu.speech":"Puhe","desktopTopbar.editMenu.speech.startSpeaking":"Aloita puhuminen","desktopTopbar.editMenu.speech.stopSpeaking":"Lopeta puhuminen","desktopTopbar.editMenu.title":"Muokkaa","desktopTopbar.editMenu.undo":"Kumoa","desktopTopbar.fileMenu.close":"Sulje ikkuna","desktopTopbar.fileMenu.closeTab":"Sulje välilehti","desktopTopbar.fileMenu.newTab":"Uusi välilehti","desktopTopbar.fileMenu.newWindow":"Uusi ikkuna","desktopTopbar.fileMenu.print":"Tulosta…","desktopTopbar.fileMenu.quit":"Poistu","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Poistu tallentamatta välilehtiä","desktopTopbar.fileMenu.reopenClosedTab":"Avaa viimeksi suljettu välilehti uudelleen","desktopTopbar.fileMenu.title":"Tiedosto","desktopTopbar.helpMenu.disableDebugLogging":"Poista edistynyt kirjaus käytöstä ja käynnistä uudelleen","desktopTopbar.helpMenu.disableHardwareAcceleration":"Poista laitteistokiihdytys käytöstä ja käynnistä uudelleen","desktopTopbar.helpMenu.enableDebugLogging":"Ota edistynyt kirjaus käyttöön ja käynnistä uudelleen","desktopTopbar.helpMenu.enableHardwareAcceleration":"Ota laitteistokiihdytys käyttöön ja käynnistä uudelleen","desktopTopbar.helpMenu.openConsole":"Avaa konsoli...","desktopTopbar.helpMenu.openHelpAndSupport":"Avaa ohje ja dokumentaatio","desktopTopbar.helpMenu.recordPerformanceTrace":"Tallenna suorituskyvyn seuranta...","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"Haluatko tallentaa suorituskyvyn seurannan seuraaville 30 sekunnille? Kun valmis, se sijoitetaan Lataukset-kansioon.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Peruuta","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Tallenna suorituskyvyn seuranta","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"Tallennetaanko suorituskyvyn seuranta?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Nollaa ja poista kaikki paikalliset tiedot","desktopTopbar.helpMenu.showLogsInExplorer":"Näytä lokit resurssienhallinnassa","desktopTopbar.helpMenu.showLogsInFinder":"Näytä lokit Finderissa","desktopTopbar.helpMenu.title":"Ohje","desktopTopbar.historyMenu.historyBack":"Takaisin","desktopTopbar.historyMenu.historyForward":"Eteenpäin","desktopTopbar.historyMenu.title":"Historia","desktopTopbar.toggleDevTools":"Vaihda kehittäjän työkalujen tilaa","desktopTopbar.toggleWindowDevTools":"Vaihda ikkunoiden kehittäjän työkalujen tilaa","desktopTopbar.troubleshootingMenu.title":"Vianetsintä","desktopTopbar.viewMenu.actualSize":"Todellinen koko","desktopTopbar.viewMenu.forceReload":"Pakota uudelleenlataus","desktopTopbar.viewMenu.reload":"Lataa uudelleen","desktopTopbar.viewMenu.showHideSidebar":"Näytä/piilota sivuvalikko","desktopTopbar.viewMenu.title":"Näkymä","desktopTopbar.viewMenu.togglefullscreen":"Vaihda koko näytön tilaa","desktopTopbar.viewMenu.zoomIn":"Suurenna","desktopTopbar.viewMenu.zoomOut":"Pienennä","desktopTopbar.whatsNewMac.title":"Avaa Mitä uutta Notion macOS:lle tuo tullessaan","desktopTopbar.whatsNewWindows.title":"Avaa Mitä uutta Notion Windowsille tuo tullessaan","desktopTopbar.windowMenu.close":"Sulje","desktopTopbar.windowMenu.front":"Etuosa","desktopTopbar.windowMenu.maximize":"Suurenna","desktopTopbar.windowMenu.minimize":"Pienennä","desktopTopbar.windowMenu.showNextTab":"Näytä seuraava välilehti","desktopTopbar.windowMenu.showPreviousTab":"Näytä edellinen välilehti","desktopTopbar.windowMenu.title":"Ikkuna","desktopTopbar.windowMenu.zoom":"Zoomaa","desktopTroubleshooting.showLogs.error.message.mac":"Notion havaitsi virheen yrittäessään näyttää lokit Finderissa:","desktopTroubleshooting.showLogs.error.message.windows":"Notion havaitsi virheen yrittäessään näyttää lokit Explorerissa:","desktopTroubleshooting.showLogs.error.title":"Lokien näyttäminen epäonnistui","menuBarIcon.menu.enableQuickSearch":"Ota pikahaku käyttöön","menuBarIcon.menu.keepInBackground":"Säilytä taustalla","menuBarIcon.menu.launchPreferences":"Avaa asetukset","menuBarIcon.menu.openOnLogin":"Avaa Notion sisäänkirjautuessa","menuBarIcon.menu.quitNotion":"Lopeta Notion","menuBarIcon.menu.selectCommandSearchShortcut":"Vaihda komentohaun pikanäppäin","menuBarIcon.menu.showImmediately":"Näytä heti","menuBarIcon.menu.showNotionInMenuBar":"Näytä Notion valikkopalkissa","menuBarIcon.menu.toggleCommandSearch":"Avaa tai sulje komentohaku","openAtLogin.dialog.detail":"{operatingSystem} esti Notionia määrittämästä ”Avaa sisäänkirjautuessa” -asetusta. Tämä tapahtuu yleensä silloin, kun Notionin käynnistys on määritetty järjestelmäasetuksissa tai jos käyttöoikeudet eivät ole riittävät. Voit silti määrittää tämän asetuksen manuaalisesti järjestelmäasetuksissa.","openAtLogin.dialog.title":"Avaa sisäänkirjautuessa","updatePrompt.detail":"Haluatko asentaa sen nyt? Avaamme ikkunat ja välilehdet uudelleen puolestasi.","updatePrompt.installAndRelaunch":"Asenna ja käynnistä uudelleen","updatePrompt.message":"Uusi Notion-versio on saatavilla!","updatePrompt.remindMeLater":"Muistuta myöhemmin","window.loadingError.message":"Virhe Notionin latauksen aikana, aloita muodostamalla yhteys Internetiin.","window.loadingError.reload":"Lataa uudelleen","window.tabLoadingError.cancel":"Peruuta","window.tabMenu.closeOtherTabs":"Sulje muut välilehdet","window.tabMenu.closeTab":"Sulje välilehti","window.tabMenu.closeTabsToLeft":"Sulje vasemmalla olevat välilehdet","window.tabMenu.closeTabsToRight":"Sulje oikealla olevat välilehdet","window.tabMenu.copyLink":"Kopioi linkki","window.tabMenu.duplicateTab":"Kopioi välilehti","window.tabMenu.moveToNewWindow":"Siirrä välilehti uuteen ikkunaan","window.tabMenu.refresh":"Päivitä välilehti"}')
        },
        993: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion - Recherche rapide","desktop.tabBar.backButtonLabel":"Précédent","desktop.tabBar.closeSidebarLabel":"Fermer la barre latérale","desktop.tabBar.closeTabLabel":"Fermer l’onglet {tabTitle}","desktop.tabBar.forwardButtonLabel":"Suivant","desktop.tabBar.loadingPlaceholder":"Chargement…","desktop.tabBar.newTabButtonLabel":"Nouvel onglet","desktop.tabBar.openSidebarLabel":"Ouvrir la barre latérale","desktopInstaller.failedToMove.detail":"Nous n’avons pas pu déplacer l’appli vers votre dossier « Applications ». Déplacez-la manuellement.","desktopInstaller.failedToMove.title":"Le déplacement de l’appli a échoué","desktopInstaller.invalidInstallDialog.cancelButton.label":"Annuler","desktopInstaller.invalidInstallDialog.confirmMove":"Votre application Notion n’est pas installée correctement. Pouvons-nous la déplacer vers votre dossier « Applications » ?","desktopInstaller.invalidInstallDialog.okButton.label":"OK","desktopInstaller.invalidInstallDialog.title":"Installation non valide","desktopSearch.doneButton.label":"Terminé","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} correspondance} other {{matchCount} correspondances}}","desktopSearch.noResults.message":"Aucun résultat","desktopTopbar.appMenu.about":"À propos de Notion","desktopTopbar.appMenu.checkForUpdate":"Recherche de mise à jour…","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"Vous disposez déjà de la dernière version de Notion.","desktopTopbar.appMenu.checkForUpdate.title":"Recherche de mise à jour","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"Une nouvelle version de Notion est disponible et en cours de téléchargement en arrière-plan. Merci de rester à jour !","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion n’a pas pu établir de connexion avec le serveur de mise à jour, en raison d’un problème lié à votre connexion Internet ou au serveur de mise à jour. Réessayez plus tard.","desktopTopbar.appMenu.downloadingUpdate":"Téléchargement de la mise à jour ({percentage} %)","desktopTopbar.appMenu.hide":"Masquer Notion","desktopTopbar.appMenu.hideOthers":"Masquer les autres","desktopTopbar.appMenu.preferences":"Préférences…","desktopTopbar.appMenu.quit":"Quitter","desktopTopbar.appMenu.quitWithoutSavingTabs":"Quitter sans enregistrer les onglets","desktopTopbar.appMenu.resetAndEraseAllLocalData":"Réinitialiser et effacer toutes les données locales","desktopTopbar.appMenu.resetAndUpdateApp":"Réinitialiser et mettre à jour l’application","desktopTopbar.appMenu.restartToApplyUpdate":"Redémarrer pour appliquer la mise à jour","desktopTopbar.appMenu.services":"Services","desktopTopbar.appMenu.unhide":"Tout afficher","desktopTopbar.editMenu.copy":"Copier","desktopTopbar.editMenu.cut":"Couper","desktopTopbar.editMenu.paste":"Coller","desktopTopbar.editMenu.pasteAndMatchStyle":"Coller et harmoniser le style","desktopTopbar.editMenu.redo":"Rétablir","desktopTopbar.editMenu.selectAll":"Tout sélectionner","desktopTopbar.editMenu.speech":"Voix","desktopTopbar.editMenu.speech.startSpeaking":"Commencer à parler","desktopTopbar.editMenu.speech.stopSpeaking":"Arrêter de parler","desktopTopbar.editMenu.title":"Modifier","desktopTopbar.editMenu.undo":"Annuler","desktopTopbar.fileMenu.close":"Fermer la fenêtre","desktopTopbar.fileMenu.closeTab":"Fermer l’onglet","desktopTopbar.fileMenu.newTab":"Nouvel onglet","desktopTopbar.fileMenu.newWindow":"Nouvelle fenêtre","desktopTopbar.fileMenu.print":"Imprimer…","desktopTopbar.fileMenu.quit":"Quitter","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Quitter sans enregistrer les onglets","desktopTopbar.fileMenu.reopenClosedTab":"Rouvrir le dernier onglet fermé","desktopTopbar.fileMenu.title":"Fichier","desktopTopbar.helpMenu.disableDebugLogging":"Désactiver la journalisation avancée et redémarrer","desktopTopbar.helpMenu.disableHardwareAcceleration":"Désactiver l’accélération matérielle et redémarrer","desktopTopbar.helpMenu.enableDebugLogging":"Activer la journalisation avancée et redémarrer","desktopTopbar.helpMenu.enableHardwareAcceleration":"Activer l’accélération matérielle et redémarrer","desktopTopbar.helpMenu.openConsole":"Ouvrir la console…","desktopTopbar.helpMenu.openHelpAndSupport":"Ouvrir le site d’aide et la documentation","desktopTopbar.helpMenu.recordPerformanceTrace":"Enregistrer une trace de performance…","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"Voulez-vous enregistrer une trace de performance pour les 30 prochaines secondes ? Une fois l’enregistrement terminé, il sera placé dans votre dossier Téléchargements.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Annuler","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Enregistrer une trace de performance","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"Enregistrer une trace de performance ?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Réinitialiser et effacer toutes les données locales","desktopTopbar.helpMenu.showLogsInExplorer":"Afficher les entrées du registre dans l’explorateur","desktopTopbar.helpMenu.showLogsInFinder":"Afficher les entrées du registre dans le Finder","desktopTopbar.helpMenu.title":"Aide","desktopTopbar.historyMenu.historyBack":"Précédent","desktopTopbar.historyMenu.historyForward":"Suivant","desktopTopbar.historyMenu.title":"Historique","desktopTopbar.toggleDevTools":"Afficher les outils de développement","desktopTopbar.toggleWindowDevTools":"Afficher la fenêtre des outils de développement","desktopTopbar.troubleshootingMenu.title":"Résolution de problèmes","desktopTopbar.viewMenu.actualSize":"Taille réelle","desktopTopbar.viewMenu.forceReload":"Forcer l’actualisation","desktopTopbar.viewMenu.reload":"Recharger","desktopTopbar.viewMenu.reloadAllTabs":"Recharger tous les onglets","desktopTopbar.viewMenu.showHideSidebar":"Afficher/masquer la barre latérale","desktopTopbar.viewMenu.title":"Afficher","desktopTopbar.viewMenu.togglefullscreen":"Basculer en plein écran","desktopTopbar.viewMenu.zoomIn":"Zoomer","desktopTopbar.viewMenu.zoomOut":"Dézoomer","desktopTopbar.whatsNewMac.title":"Ouvrir les nouveautés de Notion pour macOS","desktopTopbar.whatsNewWindows.title":"Ouvrir les nouveautés de Notion pour Windows","desktopTopbar.windowMenu.close":"Fermer","desktopTopbar.windowMenu.front":"Premier plan","desktopTopbar.windowMenu.maximize":"Agrandir","desktopTopbar.windowMenu.minimize":"Réduire","desktopTopbar.windowMenu.showNextTab":"Afficher l’onglet suivant","desktopTopbar.windowMenu.showPreviousTab":"Afficher l’onglet précédent","desktopTopbar.windowMenu.title":"Fenêtre","desktopTopbar.windowMenu.zoom":"Zoom","desktopTroubleshooting.showLogs.error.message.mac":"Notion a rencontré une erreur lors de l’affichage du registre dans le Finder :","desktopTroubleshooting.showLogs.error.message.windows":"Notion a rencontré une erreur lors de l’affichage du registre dans l’explorateur :","desktopTroubleshooting.showLogs.error.title":"Impossible d’afficher les entrées du registre","menuBarIcon.menu.enableQuickSearch":"Activer la recherche rapide","menuBarIcon.menu.keepInBackground":"Garder en arrière-plan","menuBarIcon.menu.launchPreferences":"Lancer les préférences","menuBarIcon.menu.openCloseQuickSearch":"Ouvrir/fermer la recherche rapide","menuBarIcon.menu.openOnLogin":"Ouvrir Notion à l’ouverture de la session","menuBarIcon.menu.quitNotion":"Quitter Notion","menuBarIcon.menu.selectCommandSearchShortcut":"Modifier le raccourci de la recherche rapide","menuBarIcon.menu.showImmediately":"Afficher immédiatement","menuBarIcon.menu.showNotionInMenuBar":"Afficher Notion dans la barre de menu","menuBarIcon.menu.toggleCommandSearch":"Afficher/masquer la recherche rapide","openAtLogin.dialog.detail":"{operatingSystem} a empêché Notion de configurer le paramètre « Ouvrir à l’ouverture de la session ». Cela peut se produire lorsque le démarrage de Notion est configuré dans les paramètres système ou si vous ne disposez pas des autorisations d’accès requises. Vous pouvez cependant configurer cette option manuellement dans les paramètres système.","openAtLogin.dialog.title":"Ouvrir à l’ouverture de la session","updatePrompt.detail":"Voulez-vous l’installer maintenant ? Nous nous chargerons de rouvrir vos fenêtres et onglets.","updatePrompt.installAndRelaunch":"Installer et relancer","updatePrompt.message":"Une nouvelle version de Notion est disponible !","updatePrompt.remindMeLater":"Me le rappeler plus tard","window.loadingError.message":"Erreur lors du chargement de Notion, connectez-vous à Internet pour démarrer.","window.loadingError.reload":"Recharger","window.tabLoadingError.cancel":"Annuler","window.tabMenu.closeOtherTabs":"Fermer les autres onglets","window.tabMenu.closeTab":"Fermer l’onglet","window.tabMenu.closeTabsToLeft":"Fermer les onglets à gauche","window.tabMenu.closeTabsToRight":"Fermer les onglets à droite","window.tabMenu.copyLink":"Copier le lien","window.tabMenu.duplicateTab":"Dupliquer l’onglet","window.tabMenu.moveToNewWindow":"Déplacer l’onglet vers une nouvelle fenêtre","window.tabMenu.refresh":"Actualiser l’onglet"}')
        },
        290: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion コマンド検索","desktop.tabBar.backButtonLabel":"戻る","desktop.tabBar.closeSidebarLabel":"サイドバーを閉じる","desktop.tabBar.closeTabLabel":"{tabTitle}のタブを閉じる","desktop.tabBar.forwardButtonLabel":"進む","desktop.tabBar.loadingPlaceholder":"読み込み中...","desktop.tabBar.newTabButtonLabel":"新規タブ","desktop.tabBar.openSidebarLabel":"サイドバーを開く","desktopInstaller.failedToMove.detail":"アプリをアプリケーションフォルダーに移動できませんでした。手動で移動してください。","desktopInstaller.failedToMove.title":"アプリの移動に失敗しました","desktopInstaller.invalidInstallDialog.cancelButton.label":"キャンセル","desktopInstaller.invalidInstallDialog.confirmMove":"Notionアプリが正しくインストールされていません。Notionアプリをアプリケーションフォルダーに移動してもよろしいですか？","desktopInstaller.invalidInstallDialog.okButton.label":"OK","desktopInstaller.invalidInstallDialog.title":"インストールが無効です","desktopSearch.doneButton.label":"完了","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount}件の一致} other {{matchCount}件の一致}}","desktopSearch.noResults.message":"結果なし","desktopTopbar.appMenu.about":"Notionについて","desktopTopbar.appMenu.checkForUpdate":"アップデートを確認…","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"お使いのNotionは最新バージョンです！","desktopTopbar.appMenu.checkForUpdate.title":"アップデートを確認","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"Notionの新しいバージョンが利用可能なため、現在バックグラウンドでダウンロード中です。最新バージョンにアップデートしていただきありがとうございます。","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"インターネット接続の問題か、アップデートサーバー自体の問題により、アップデートサーバーに接続できませんでした。時間をおいてもう一度お試しください。","desktopTopbar.appMenu.downloadingUpdate":"アップデートをダウンロード中（{percentage}%）","desktopTopbar.appMenu.hide":"Notionを非表示","desktopTopbar.appMenu.hideOthers":"ほかを非表示","desktopTopbar.appMenu.preferences":"環境設定…","desktopTopbar.appMenu.quit":"終了","desktopTopbar.appMenu.quitWithoutSavingTabs":"タブを保存せずに終了する","desktopTopbar.appMenu.resetAndEraseAllLocalData":"すべてのローカルデータのリセットと消去","desktopTopbar.appMenu.resetAndUpdateApp":"アプリのリセットと更新","desktopTopbar.appMenu.restartToApplyUpdate":"再起動してアップデートを適用","desktopTopbar.appMenu.services":"サービス","desktopTopbar.appMenu.unhide":"すべて表示する","desktopTopbar.editMenu.copy":"コピー","desktopTopbar.editMenu.cut":"切り取り","desktopTopbar.editMenu.paste":"貼り付け","desktopTopbar.editMenu.pasteAndMatchStyle":"貼り付けてスタイルを合わせる","desktopTopbar.editMenu.redo":"やり直し","desktopTopbar.editMenu.selectAll":"すべて選択","desktopTopbar.editMenu.speech":"音声読み上げ","desktopTopbar.editMenu.speech.startSpeaking":"音声読み上げを開始","desktopTopbar.editMenu.speech.stopSpeaking":"音声読み上げを停止","desktopTopbar.editMenu.title":"編集","desktopTopbar.editMenu.undo":"元に戻す","desktopTopbar.fileMenu.close":"ウィンドウを閉じる","desktopTopbar.fileMenu.closeTab":"タブを閉じる","desktopTopbar.fileMenu.newTab":"新規タブ","desktopTopbar.fileMenu.newWindow":"新しいウィンドウ","desktopTopbar.fileMenu.print":"印刷…","desktopTopbar.fileMenu.quit":"終了","desktopTopbar.fileMenu.quitWithoutSavingTabs":"タブを保存せずに終了する","desktopTopbar.fileMenu.reopenClosedTab":"最後に閉じたタブを再び開く","desktopTopbar.fileMenu.title":"ファイル","desktopTopbar.helpMenu.disableDebugLogging":"詳細ログを無効にして再起動する","desktopTopbar.helpMenu.disableHardwareAcceleration":"ハードウェアアクセラレーションを無効化して再起動","desktopTopbar.helpMenu.enableDebugLogging":"詳細ログを有効にして再起動する","desktopTopbar.helpMenu.enableHardwareAcceleration":"ハードウェアアクセラレーションを有効化して再起動","desktopTopbar.helpMenu.openConsole":"コンソールを開く…","desktopTopbar.helpMenu.openHelpAndSupport":"ヘルプと解説を開く","desktopTopbar.helpMenu.recordPerformanceTrace":"パフォーマンストレースを記録…","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"今から30秒間のパフォーマンストレースを記録しますか？完了すると、ダウンロードフォルダに保存されます。","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"キャンセル","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"パフォーマンストレースを記録","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"パフォーマンストレースを記録しますか？","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"すべてのローカルデータのリセットと消去","desktopTopbar.helpMenu.showLogsInExplorer":"エクスプローラーでログを表示","desktopTopbar.helpMenu.showLogsInFinder":"Finderでログを表示","desktopTopbar.helpMenu.title":"ヘルプ","desktopTopbar.historyMenu.historyBack":"戻る","desktopTopbar.historyMenu.historyForward":"進む","desktopTopbar.historyMenu.title":"履歴","desktopTopbar.toggleDevTools":"開発者ツールの切り替え","desktopTopbar.toggleWindowDevTools":"ウィンドウ開発者ツールの切り替え","desktopTopbar.troubleshootingMenu.title":"トラブルシューティング","desktopTopbar.viewMenu.actualSize":"100%表示","desktopTopbar.viewMenu.forceReload":"強制的に再読み込み","desktopTopbar.viewMenu.reload":"再読み込み","desktopTopbar.viewMenu.reloadAllTabs":"すべてのタブを再読み込み","desktopTopbar.viewMenu.showHideSidebar":"サイドバーの表示/非表示","desktopTopbar.viewMenu.title":"表示","desktopTopbar.viewMenu.togglefullscreen":"全画面表示のオン・オフ","desktopTopbar.viewMenu.zoomIn":"拡大","desktopTopbar.viewMenu.zoomOut":"縮小","desktopTopbar.whatsNewMac.title":"Mac版Notionの最新情報を開く","desktopTopbar.whatsNewWindows.title":"Windows版Notionの最新情報を開く","desktopTopbar.windowMenu.close":"閉じる","desktopTopbar.windowMenu.front":"前面","desktopTopbar.windowMenu.maximize":"最大化","desktopTopbar.windowMenu.minimize":"最小化","desktopTopbar.windowMenu.showNextTab":"次のタブを表示","desktopTopbar.windowMenu.showPreviousTab":"前のタブを表示","desktopTopbar.windowMenu.title":"ウィンドウ","desktopTopbar.windowMenu.zoom":"ズーム","desktopTroubleshooting.showLogs.error.message.mac":"NotionがFinderでログを表示しようとした際に次のエラーが発生しました：","desktopTroubleshooting.showLogs.error.message.windows":"Notionがエクスプローラーでログを表示しようとした際に次のエラーが発生しました：","desktopTroubleshooting.showLogs.error.title":"ログの表示に失敗しました","menuBarIcon.menu.enableQuickSearch":"クイック検索を有効化","menuBarIcon.menu.keepInBackground":"バックグラウンドで保持","menuBarIcon.menu.launchPreferences":"起動設定","menuBarIcon.menu.openCloseQuickSearch":"クイック検索を開く/閉じる","menuBarIcon.menu.openOnLogin":"ログイン時にNotionを開く","menuBarIcon.menu.quitNotion":"Notionを終了する","menuBarIcon.menu.selectCommandSearchShortcut":"コマンド検索ショートカットの変更","menuBarIcon.menu.showImmediately":"すぐに表示","menuBarIcon.menu.showNotionInMenuBar":"メニューバーにNotionを表示する","menuBarIcon.menu.toggleCommandSearch":"コマンド検索の表示/非表示","openAtLogin.dialog.detail":"{operatingSystem}により、Notionの「ログイン時に開く」を設定できませんでした。これは通常、Notionの起動がシステム設定で構成されているか、権限が不十分な場合に発生します。この設定は、システム設定で手動で行うこともできます。","openAtLogin.dialog.title":"ログイン時に開く","updatePrompt.detail":"今すぐインストールしますか？ウィンドウとタブは復元されます。","updatePrompt.installAndRelaunch":"インストールして再起動","updatePrompt.message":"Notionの新バージョンがリリースされました！","updatePrompt.remindMeLater":"あとでリマインド","window.loadingError.message":"Notionの読み込みに失敗しました。インターネットに接続してください。","window.loadingError.reload":"再読み込み","window.tabLoadingError.cancel":"キャンセル","window.tabMenu.closeOtherTabs":"他のタブを閉じる","window.tabMenu.closeTab":"タブを閉じる","window.tabMenu.closeTabsToLeft":"左のタブを閉じる","window.tabMenu.closeTabsToRight":"右のタブを閉じる","window.tabMenu.copyLink":"リンクをコピー","window.tabMenu.duplicateTab":"タブを複製","window.tabMenu.moveToNewWindow":"タブを新しいウィンドウに移動","window.tabMenu.refresh":"タブを再読み込み"}')
        },
        332: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion - 명령어 검색","desktop.tabBar.backButtonLabel":"뒤로가기","desktop.tabBar.closeSidebarLabel":"사이드바 닫기","desktop.tabBar.closeTabLabel":"{tabTitle} 탭 닫기","desktop.tabBar.forwardButtonLabel":"앞으로 가기","desktop.tabBar.loadingPlaceholder":"로딩 중...","desktop.tabBar.newTabButtonLabel":"새 탭","desktop.tabBar.openSidebarLabel":"사이드바 열기","desktopInstaller.failedToMove.detail":"앱을 Applications 폴더로 이동시키지 못했습니다. 수동으로 이동시켜 주세요.","desktopInstaller.failedToMove.title":"앱 이동 실패","desktopInstaller.invalidInstallDialog.cancelButton.label":"취소","desktopInstaller.invalidInstallDialog.confirmMove":"Notion 애플리케이션이 정상적으로 설치되지 않았습니다. Notion 앱을 Applications 폴더로 이동시켜도 될까요?","desktopInstaller.invalidInstallDialog.okButton.label":"확인","desktopInstaller.invalidInstallDialog.title":"잘못된 설치","desktopSearch.doneButton.label":"완료","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} 일치} other {{matchCount} 일치}}","desktopSearch.noResults.message":"찾을 수 없음","desktopTopbar.appMenu.about":"Notion 소개","desktopTopbar.appMenu.checkForUpdate":"업데이트 확인","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"최신 버전의 Notion을 사용 중입니다!","desktopTopbar.appMenu.checkForUpdate.title":"업데이트 확인","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"새 버전의 Notion을 사용할 수 있으며 현재 백그라운드에서 다운로드 중입니다. 최신 상태를 유지해 주셔서 감사합니다!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"인터넷 연결 또는 업데이트 서버 자체에 문제가 있어 업데이트 서버에 연결하지 못했습니다. 나중에 다시 시도하세요.","desktopTopbar.appMenu.downloadingUpdate":"업데이트 다운로드 중({percentage}%)","desktopTopbar.appMenu.hide":"Notion 숨기기","desktopTopbar.appMenu.hideOthers":"다른 항목 숨기기","desktopTopbar.appMenu.preferences":"환경설정…","desktopTopbar.appMenu.quit":"끝내기","desktopTopbar.appMenu.quitWithoutSavingTabs":"탭 저장 없이 종료","desktopTopbar.appMenu.resetAndEraseAllLocalData":"앱 초기화 및 로컬 데이터 삭제","desktopTopbar.appMenu.resetAndUpdateApp":"앱 초기화 및 업데이트","desktopTopbar.appMenu.restartToApplyUpdate":"업데이트 적용을 위해 다시 시작","desktopTopbar.appMenu.services":"서비스","desktopTopbar.appMenu.unhide":"모두 표시하기","desktopTopbar.editMenu.copy":"복사","desktopTopbar.editMenu.cut":"잘라내기","desktopTopbar.editMenu.paste":"붙여넣기","desktopTopbar.editMenu.pasteAndMatchStyle":"서식 유지 붙여넣기","desktopTopbar.editMenu.redo":"다시 실행","desktopTopbar.editMenu.selectAll":"모두 선택","desktopTopbar.editMenu.speech":"말하기","desktopTopbar.editMenu.speech.startSpeaking":"말하기 시작","desktopTopbar.editMenu.speech.stopSpeaking":"말하기 중지","desktopTopbar.editMenu.title":"편집","desktopTopbar.editMenu.undo":"실행 취소","desktopTopbar.fileMenu.close":"창 닫기","desktopTopbar.fileMenu.closeTab":"탭 닫기","desktopTopbar.fileMenu.newTab":"새로운 탭","desktopTopbar.fileMenu.newWindow":"새 창","desktopTopbar.fileMenu.print":"인쇄","desktopTopbar.fileMenu.quit":"나가기","desktopTopbar.fileMenu.quitWithoutSavingTabs":"탭 저장 없이 종료","desktopTopbar.fileMenu.reopenClosedTab":"마지막으로 닫은 탭 다시 열기","desktopTopbar.fileMenu.title":"파일","desktopTopbar.helpMenu.disableDebugLogging":"고급 로깅 비활성화 후 다시 시작","desktopTopbar.helpMenu.disableHardwareAcceleration":"하드웨어 가속 비활성화 후 다시 시작","desktopTopbar.helpMenu.enableDebugLogging":"고급 로깅 활성화 후 다시 시작","desktopTopbar.helpMenu.enableHardwareAcceleration":"하드웨어 가속 활성화 후 다시 시작","desktopTopbar.helpMenu.openConsole":"콘솔 열기...","desktopTopbar.helpMenu.openHelpAndSupport":"도움말과 설명서 열기","desktopTopbar.helpMenu.recordPerformanceTrace":"성능 트레이스 기록","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"다음 30초 동안 성능 트레이스를 기록하시겠습니까? 완료되면 다운로드 폴더에 저장됩니다.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"취소","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"성능 트레이스 기록","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"성능 트레이스를 기록하시겠습니까?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"앱을 초기화하고 로컬 데이터 모두 삭제하기","desktopTopbar.helpMenu.showLogsInExplorer":"탐색기에서 로그 표시","desktopTopbar.helpMenu.showLogsInFinder":"Finder에서 로그 표시","desktopTopbar.helpMenu.title":"도움말","desktopTopbar.historyMenu.historyBack":"뒤로","desktopTopbar.historyMenu.historyForward":"앞으로","desktopTopbar.historyMenu.title":"기록","desktopTopbar.toggleDevTools":"개발자 도구 토글","desktopTopbar.toggleWindowDevTools":"Windows 개발자 도구 토글","desktopTopbar.troubleshootingMenu.title":"트러블슈팅","desktopTopbar.viewMenu.actualSize":"실제 크기","desktopTopbar.viewMenu.forceReload":"강제 새로고침","desktopTopbar.viewMenu.reload":"다시 불러오기","desktopTopbar.viewMenu.reloadAllTabs":"모든 탭 다시 불러오기","desktopTopbar.viewMenu.showHideSidebar":"사이드바 표시/숨기기","desktopTopbar.viewMenu.title":"보기","desktopTopbar.viewMenu.togglefullscreen":"전체 화면 토글","desktopTopbar.viewMenu.zoomIn":"확대","desktopTopbar.viewMenu.zoomOut":"축소","desktopTopbar.whatsNewMac.title":"MacOS용 Notion의 업데이트 내용 보기","desktopTopbar.whatsNewWindows.title":"Windows용 Notion의 업데이트 내용 보기","desktopTopbar.windowMenu.close":"닫기","desktopTopbar.windowMenu.front":"앞면","desktopTopbar.windowMenu.maximize":"최대화","desktopTopbar.windowMenu.minimize":"최소화","desktopTopbar.windowMenu.showNextTab":"다음 탭 표시","desktopTopbar.windowMenu.showPreviousTab":"이전 탭 표시","desktopTopbar.windowMenu.title":"창","desktopTopbar.windowMenu.zoom":"확대/축소","desktopTroubleshooting.showLogs.error.message.mac":"Finder에서 로그를 표시하는 동안 Notion에서 오류가 발생했습니다.","desktopTroubleshooting.showLogs.error.message.windows":"Explorer에서 로그를 표시하는 동안 Notion에서 오류가 발생했습니다.","desktopTroubleshooting.showLogs.error.title":"로그 표시에 실패했습니다.","menuBarIcon.menu.enableQuickSearch":"빠른 검색 활성화","menuBarIcon.menu.keepInBackground":"백그라운드에서 계속 실행","menuBarIcon.menu.launchPreferences":"시작 설정","menuBarIcon.menu.openCloseQuickSearch":"빠른 검색 열기/닫기","menuBarIcon.menu.openOnLogin":"로그인 시 Notion 열기","menuBarIcon.menu.quitNotion":"Notion 종료","menuBarIcon.menu.selectCommandSearchShortcut":"명령어 검색 단축키 변경","menuBarIcon.menu.showImmediately":"즉시 표시","menuBarIcon.menu.showNotionInMenuBar":"메뉴 모음에 Notion 표시","menuBarIcon.menu.toggleCommandSearch":"명령어 검색 토글","openAtLogin.dialog.detail":"{operatingSystem}에서 Notion이 \'로그인 시 열기\' 설정을 구성하지 못했습니다. 일반적으로 시스템 설정에서 Notion 시작을 구성했거나 권한이 충분하지 않은 경우 이 문제가 발생합니다. 시스템 설정에서 이 설정을 수동으로 구성할 수 있습니다.","openAtLogin.dialog.title":"로그인 시 열기","updatePrompt.detail":"지금 설치하시겠어요? 창과 탭이 다시 열립니다.","updatePrompt.installAndRelaunch":"설치 후 다시 시작","updatePrompt.message":"Notion의 새로운 버전이 출시되었습니다!","updatePrompt.remindMeLater":"나중에 다시 알림","window.loadingError.message":"Notion을 로드하는 동안 오류가 발생했습니다. 시작하려면 인터넷에 연결하세요.","window.loadingError.reload":"다시 불러오기","window.tabLoadingError.cancel":"취소","window.tabMenu.closeOtherTabs":"다른 탭 닫기","window.tabMenu.closeTab":"탭 닫기","window.tabMenu.closeTabsToLeft":"왼쪽 탭 닫기","window.tabMenu.closeTabsToRight":"오른쪽 탭 닫기","window.tabMenu.copyLink":"링크 복사","window.tabMenu.duplicateTab":"탭 복제","window.tabMenu.moveToNewWindow":"탭을 새 창에서 열기","window.tabMenu.refresh":"탭 새로고침"}')
        },
        996: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion - Kommandosøk","desktop.tabBar.backButtonLabel":"Tilbake","desktop.tabBar.closeSidebarLabel":"Lukk sidestolpe","desktop.tabBar.closeTabLabel":"Lukk fanen {tabTitle}","desktop.tabBar.forwardButtonLabel":"Framover","desktop.tabBar.loadingPlaceholder":"Laster inn …","desktop.tabBar.newTabButtonLabel":"Ny fane","desktop.tabBar.openSidebarLabel":"Åpne sidestolpen","desktopInstaller.failedToMove.detail":"Vi kan ikke flytte appen til Apper-mappen. Flytt den manuelt.","desktopInstaller.failedToMove.title":"Kan ikke flytte app","desktopInstaller.invalidInstallDialog.cancelButton.label":"Avbryt","desktopInstaller.invalidInstallDialog.confirmMove":"Notion-appen din er ikke riktig installert. Kan vi flytte Notion-appen til Apper-mappen?","desktopInstaller.invalidInstallDialog.okButton.label":"OK","desktopInstaller.invalidInstallDialog.title":"Ugyldig installasjon","desktopSearch.doneButton.label":"Ferdig","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} match} andre {{matchCount} matcher}}","desktopSearch.noResults.message":"Ikke funnet","desktopTopbar.appMenu.about":"Om Notion","desktopTopbar.appMenu.checkForUpdate":"Se etter oppdateringer …","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"Du bruker den nyeste versjonen av Notion!","desktopTopbar.appMenu.checkForUpdate.title":"Se etter oppdateringer","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"En ny versjon av Notion er tilgjengelig og lastes for øyeblikket ned i bakgrunnen. Takk for at du holder deg oppdatert!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion klarte ikke å koble til oppdateringsserveren, enten på grunn av et problem med internett-tilkoblingen eller selve oppdateringsserveren. Prøv igjen senere.","desktopTopbar.appMenu.downloadingUpdate":"Laster ned oppdatering ({percentage} %)","desktopTopbar.appMenu.hide":"Skjul Notion","desktopTopbar.appMenu.hideOthers":"Skjul andre","desktopTopbar.appMenu.preferences":"Instillinger …","desktopTopbar.appMenu.quit":"Avslutt","desktopTopbar.appMenu.quitWithoutSavingTabs":"Gå ut uten å lagre faner","desktopTopbar.appMenu.restartToApplyUpdate":"Start på nytt for å bruke oppdateringen","desktopTopbar.appMenu.services":"Tjenester","desktopTopbar.appMenu.unhide":"Vis alt","desktopTopbar.editMenu.copy":"Kopier","desktopTopbar.editMenu.cut":"Klipp ut","desktopTopbar.editMenu.paste":"Lim inn","desktopTopbar.editMenu.pasteAndMatchStyle":"Lim inn og match stil","desktopTopbar.editMenu.redo":"Gjør om","desktopTopbar.editMenu.selectAll":"Velg alle","desktopTopbar.editMenu.speech":"Tale","desktopTopbar.editMenu.speech.startSpeaking":"Begynn å snakke","desktopTopbar.editMenu.speech.stopSpeaking":"Slutt å snakke","desktopTopbar.editMenu.title":"Rediger","desktopTopbar.editMenu.undo":"Angre","desktopTopbar.fileMenu.close":"Lukk vindu","desktopTopbar.fileMenu.closeTab":"Lukk fanen","desktopTopbar.fileMenu.newTab":"Ny fane","desktopTopbar.fileMenu.newWindow":"Nytt vindu","desktopTopbar.fileMenu.print":"Skriv ut ...","desktopTopbar.fileMenu.quit":"Avslutt","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Avslutt uten å lagre faner","desktopTopbar.fileMenu.reopenClosedTab":"Åpne sist lukkede fane på nytt","desktopTopbar.fileMenu.title":"Fil","desktopTopbar.helpMenu.disableDebugLogging":"Deaktiver avansert logging og start på nytt","desktopTopbar.helpMenu.disableHardwareAcceleration":"Deaktiver maskinvareakselerasjon og start på nytt","desktopTopbar.helpMenu.enableDebugLogging":"Aktiver avansert logging og start på nytt","desktopTopbar.helpMenu.enableHardwareAcceleration":"Aktiver maskinvareakselerasjon og start på nytt","desktopTopbar.helpMenu.openConsole":"Åpne konsollen …","desktopTopbar.helpMenu.openHelpAndSupport":"Åpne hjelp og dokumentasjon","desktopTopbar.helpMenu.recordPerformanceTrace":"Registrer ytelsessporing ...","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"Vil du registrere et ytelsesspor for de neste 30 sekundene? Når det er gjort, vil det bli plassert i nedlastingsmappen.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Avbryt","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Registrer ytelsesspor","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"Registrer et ytelsesspor?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Tilbakestill og slett alle lokale data","desktopTopbar.helpMenu.showLogsInExplorer":"Vis logger i Explorer","desktopTopbar.helpMenu.showLogsInFinder":"Vis logger i Finder","desktopTopbar.helpMenu.title":"Hjelp","desktopTopbar.historyMenu.historyBack":"Tilbake","desktopTopbar.historyMenu.historyForward":"Framover","desktopTopbar.historyMenu.title":"Historikk","desktopTopbar.toggleDevTools":"Slå av/på utviklerverktøy","desktopTopbar.toggleWindowDevTools":"Slå av/på Windows Utviklerverktøy","desktopTopbar.troubleshootingMenu.title":"Feilsøking","desktopTopbar.viewMenu.actualSize":"Faktisk størrelse","desktopTopbar.viewMenu.forceReload":"Tving ny innlasting","desktopTopbar.viewMenu.reload":"Last inn på nytt","desktopTopbar.viewMenu.showHideSidebar":"Vis/skjul sidestolpe","desktopTopbar.viewMenu.title":"Vis","desktopTopbar.viewMenu.togglefullscreen":"Veksle fullskjerm","desktopTopbar.viewMenu.zoomIn":"Zoom inn","desktopTopbar.viewMenu.zoomOut":"Zoom ut","desktopTopbar.whatsNewMac.title":"Åpne Hva er nytt i Notion for macOS","desktopTopbar.whatsNewWindows.title":"Åpne Hva er nytt i Notion for Windows","desktopTopbar.windowMenu.close":"Lukk","desktopTopbar.windowMenu.front":"Front","desktopTopbar.windowMenu.maximize":"Maksimer","desktopTopbar.windowMenu.minimize":"Minimer","desktopTopbar.windowMenu.showNextTab":"Vis neste fane","desktopTopbar.windowMenu.showPreviousTab":"Vis forrige fane","desktopTopbar.windowMenu.title":"Vindu","desktopTopbar.windowMenu.zoom":"Zoom","desktopTroubleshooting.showLogs.error.message.mac":"Notion oppdaget en feil under forsøk på å vise loggene i Finder:","desktopTroubleshooting.showLogs.error.message.windows":"Notion oppdaget en feil under forsøk på å vise loggene i Explorer:","desktopTroubleshooting.showLogs.error.title":"Visning av loggene mislyktes","menuBarIcon.menu.enableQuickSearch":"Aktiver hurtigsøk","menuBarIcon.menu.keepInBackground":"Ha i bakgrunnen","menuBarIcon.menu.launchPreferences":"Startinnstillinger","menuBarIcon.menu.openOnLogin":"Åpne Notion ved pålogging","menuBarIcon.menu.quitNotion":"Avslutt Notion","menuBarIcon.menu.selectCommandSearchShortcut":"Endre hurtigtast for kommandosøk","menuBarIcon.menu.showImmediately":"Vis umiddelbart","menuBarIcon.menu.showNotionInMenuBar":"Vis Notion i statusfeltet","menuBarIcon.menu.toggleCommandSearch":"Vis/skjul kommandosøk","openAtLogin.dialog.detail":"{operatingSystem} hindret Notion fra å konfigurere «Åpne ved pålogging»-innstillingen. Dette skjer vanligvis når oppstarten til Notion er konfigurert i systeminnstillingene, eller hvis du mangler tilstrekkelige tillatelser. Du kan fortsatt konfigurere denne innstillingen manuelt i systeminnstillingene.","openAtLogin.dialog.title":"Åpne ved pålogging","updatePrompt.detail":"Vil du installere den nå? Vi åpner vinduene og fanene på nytt for deg.","updatePrompt.installAndRelaunch":"Installer og start på nytt","updatePrompt.message":"En ny versjon av Notion er tilgjengelig!","updatePrompt.remindMeLater":"Minn meg på det senere","window.loadingError.message":"Feil ved innlasting av Notion. Koble til Internett for å komme i gang.","window.loadingError.reload":"Last inn på nytt","window.tabLoadingError.cancel":"Avbryt","window.tabMenu.closeOtherTabs":"Lukk andre faner","window.tabMenu.closeTab":"Lukk fanen","window.tabMenu.closeTabsToLeft":"Lukk faner til venstre","window.tabMenu.closeTabsToRight":"Lukk faner til høyre","window.tabMenu.copyLink":"Kopier lenke","window.tabMenu.duplicateTab":"Dupliser fane","window.tabMenu.moveToNewWindow":"Flytt fane til nytt vindu","window.tabMenu.refresh":"Oppdater fane"}')
        },
        969: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion - Zoekopdrachten","desktop.tabBar.backButtonLabel":"Terug","desktop.tabBar.closeSidebarLabel":"Zijbalk vergrendelen","desktop.tabBar.closeTabLabel":"Tabblad {tabTitle} sluiten","desktop.tabBar.forwardButtonLabel":"Volgende","desktop.tabBar.loadingPlaceholder":"Aan het laden...","desktop.tabBar.newTabButtonLabel":"Nieuw tabblad","desktop.tabBar.openSidebarLabel":"Zijbalk openen","desktopInstaller.failedToMove.detail":"We zijn er niet in geslaagd de app naar je map Applicaties te verplaatsen. Verplaats deze handmatig.","desktopInstaller.failedToMove.title":"Kan app niet verplaatsen","desktopInstaller.invalidInstallDialog.cancelButton.label":"Annuleren","desktopInstaller.invalidInstallDialog.confirmMove":"Je Notion-applicatie is niet correct geïnstalleerd. Wil je de Notion-app verplaatsen naar je map Applicaties?","desktopInstaller.invalidInstallDialog.okButton.label":"Ok","desktopInstaller.invalidInstallDialog.title":"Ongeldige installatie","desktopSearch.doneButton.label":"Klaar","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} match} other {{matchCount} matches}}","desktopSearch.noResults.message":"Niet gevonden","desktopTopbar.appMenu.about":"Over Notion","desktopTopbar.appMenu.checkForUpdate":"Controleren op updates...","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"Je gebruikt de nieuwste versie van Notion!","desktopTopbar.appMenu.checkForUpdate.title":"Controleren op updates...","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"Er is een nieuwe versie van Notion beschikbaar die momenteel op de achtergrond wordt gedownload. Bedankt voor het installeren van de update!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion kan geen verbinding maken met de updateserver vanwege een probleem met je internetverbinding of met de updateserver zelf. Probeer het later opnieuw.","desktopTopbar.appMenu.downloadingUpdate":"Update wordt gedownload ({percentage}%)","desktopTopbar.appMenu.hide":"Verberg Notion","desktopTopbar.appMenu.hideOthers":"Verberg anderen","desktopTopbar.appMenu.preferences":"Voorkeuren…","desktopTopbar.appMenu.quit":"Stoppen","desktopTopbar.appMenu.quitWithoutSavingTabs":"Afsluiten zonder tabbladen op te slaan","desktopTopbar.appMenu.restartToApplyUpdate":"Start opnieuw op om de update toe te passen","desktopTopbar.appMenu.services":"Diensten","desktopTopbar.appMenu.unhide":"Toon alle","desktopTopbar.editMenu.copy":"Kopiëren","desktopTopbar.editMenu.cut":"Knippen","desktopTopbar.editMenu.paste":"Plakken","desktopTopbar.editMenu.pasteAndMatchStyle":"Stijl plakken en matchen","desktopTopbar.editMenu.redo":"Opnieuw","desktopTopbar.editMenu.selectAll":"Alles selecteren","desktopTopbar.editMenu.speech":"Spraak","desktopTopbar.editMenu.speech.startSpeaking":"Begin met spreken","desktopTopbar.editMenu.speech.stopSpeaking":"Stop met spreken","desktopTopbar.editMenu.title":"Bewerken","desktopTopbar.editMenu.undo":"Ongedaan maken","desktopTopbar.fileMenu.close":"Venster sluiten","desktopTopbar.fileMenu.closeTab":"Tabblad sluiten","desktopTopbar.fileMenu.newTab":"Nieuw tabblad","desktopTopbar.fileMenu.newWindow":"Nieuw venster","desktopTopbar.fileMenu.print":"Afdrukken…","desktopTopbar.fileMenu.quit":"Afsluiten","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Afsluiten zonder tabbladen op te slaan","desktopTopbar.fileMenu.reopenClosedTab":"Laatst gesloten tabblad opnieuw openen","desktopTopbar.fileMenu.title":"Bestand","desktopTopbar.helpMenu.disableDebugLogging":"Geavanceerde logboekregistratie uitschakelen en opnieuw opstarten","desktopTopbar.helpMenu.disableHardwareAcceleration":"Hardwareversnelling uitschakelen en opnieuw opstarten","desktopTopbar.helpMenu.enableDebugLogging":"Geavanceerde logboekregistratie inschakelen en opnieuw opstarten","desktopTopbar.helpMenu.enableHardwareAcceleration":"Hardwareversnelling inschakelen en opnieuw opstarten","desktopTopbar.helpMenu.openConsole":"Console openen…","desktopTopbar.helpMenu.openHelpAndSupport":"Hulp en documentatie openen","desktopTopbar.helpMenu.recordPerformanceTrace":"Prestatietracering opnemen…","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"Wilt u een prestatietracering opnemen voor de komende 30 seconden? Als u klaar bent, wordt het in uw map Downloads geplaatst.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Annuleren","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Prestatietracering opnemen","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"Een prestatietracering opnemen?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Alle lokale gegevens resetten en wissen","desktopTopbar.helpMenu.showLogsInExplorer":"Logboeken weergeven in Verkenner","desktopTopbar.helpMenu.showLogsInFinder":"Logboeken weergeven in Finder","desktopTopbar.helpMenu.title":"Help","desktopTopbar.historyMenu.historyBack":"Terug","desktopTopbar.historyMenu.historyForward":"Volgende","desktopTopbar.historyMenu.title":"Geschiedenis","desktopTopbar.toggleDevTools":"Schakelen naar ontwikkelaarstools","desktopTopbar.toggleWindowDevTools":"Schakelen naar venster ontwikkelaarstools","desktopTopbar.troubleshootingMenu.title":"Probleemoplossen","desktopTopbar.viewMenu.actualSize":"Werkelijke grootte","desktopTopbar.viewMenu.forceReload":"Opnieuw laden forceren","desktopTopbar.viewMenu.reload":"Opnieuw laden","desktopTopbar.viewMenu.showHideSidebar":"Zijbalk weergeven/verbergen","desktopTopbar.viewMenu.title":"Weergeven","desktopTopbar.viewMenu.togglefullscreen":"Schakelen naar volledige pagina","desktopTopbar.viewMenu.zoomIn":"Inzoomen","desktopTopbar.viewMenu.zoomOut":"Uitzoomen","desktopTopbar.whatsNewMac.title":"Wat is er nieuw in Notion voor macOS openen","desktopTopbar.whatsNewWindows.title":"Wat is er nieuw in Notion voor Windows openen","desktopTopbar.windowMenu.close":"Sluiten","desktopTopbar.windowMenu.front":"Voor","desktopTopbar.windowMenu.maximize":"Maximaliseren","desktopTopbar.windowMenu.minimize":"Minimaliseren","desktopTopbar.windowMenu.showNextTab":"Volgend tabblad weergeven","desktopTopbar.windowMenu.showPreviousTab":"Vorig tabblad weergeven","desktopTopbar.windowMenu.title":"Venster","desktopTopbar.windowMenu.zoom":"Zoom-vergadering","desktopTroubleshooting.showLogs.error.message.mac":"Notion heeft een fout ontdekt bij het weergeven van de logboeken in Finder:","desktopTroubleshooting.showLogs.error.message.windows":"Notion heeft een fout ontdekt bij het weergeven van de logboeken in Verkenner:","desktopTroubleshooting.showLogs.error.title":"Het weergeven van de logboeken is mislukt","menuBarIcon.menu.enableQuickSearch":"Snel zoeken inschakelen","menuBarIcon.menu.keepInBackground":"Op de achtergrond houden","menuBarIcon.menu.launchPreferences":"Voorkeuren openen","menuBarIcon.menu.openOnLogin":"Notion openen bij aanmelden","menuBarIcon.menu.quitNotion":"Notion afsluiten","menuBarIcon.menu.selectCommandSearchShortcut":"Snelkoppeling voor Zoekopdrachten wijzigen","menuBarIcon.menu.showImmediately":"Onmiddellijk tonen","menuBarIcon.menu.showNotionInMenuBar":"Toon Notion in de menubalk","menuBarIcon.menu.toggleCommandSearch":"Toggle zoekopdracht","openAtLogin.dialog.detail":"{operatingSystem} hield tegen dat Notion de instelling \'Openen bij inloggen\' kon configureren. Dit gebeurt meestal wanneer het opstarten van Notion is geconfigureerd in de systeeminstellingen of wanneer je onvoldoende machtigingen hebt. Je kunt deze instelling nog steeds handmatig configureren in de systeeminstellingen.","openAtLogin.dialog.title":"Openen bij aanmelden","updatePrompt.detail":"Wil je deze nu installeren? We zullen je vensters en tabbladen weer voor je openen.","updatePrompt.installAndRelaunch":"Installeren en opnieuw opstarten","updatePrompt.message":"Er is een nieuwe versie van Notion beschikbaar!","updatePrompt.remindMeLater":"Herinner mij hier later aan","window.loadingError.message":"Fout bij het laden van Notion. Maak verbinding met het internet om aan de slag te gaan.","window.loadingError.reload":"Opnieuw laden","window.tabLoadingError.cancel":"Annuleren","window.tabMenu.closeOtherTabs":"Andere tabbladen sluiten","window.tabMenu.closeTab":"Tabblad sluiten","window.tabMenu.closeTabsToLeft":"Tabbladen links sluiten","window.tabMenu.closeTabsToRight":"Tabbladen rechts sluiten","window.tabMenu.copyLink":"Koppeling kopiëren","window.tabMenu.duplicateTab":"Tabblad dupliceren","window.tabMenu.moveToNewWindow":"Tabblad naar nieuw venster verplaatsen","window.tabMenu.refresh":"Tabblad vernieuwen"}')
        },
        301: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion – Pesquisa por Atalho","desktop.tabBar.backButtonLabel":"Voltar","desktop.tabBar.closeSidebarLabel":"Fechar a barra lateral","desktop.tabBar.closeTabLabel":"Fechar a aba {tabTitle}","desktop.tabBar.forwardButtonLabel":"Avançar","desktop.tabBar.loadingPlaceholder":"Carregando...","desktop.tabBar.newTabButtonLabel":"Nova guia","desktop.tabBar.openSidebarLabel":"Abrir barra lateral","desktopInstaller.failedToMove.detail":"Falha ao mover o aplicativo para a pasta Aplicativos. Você precisa movê-lo manualmente.","desktopInstaller.failedToMove.title":"Falha ao mover o aplicativo","desktopInstaller.invalidInstallDialog.cancelButton.label":"Cancelar","desktopInstaller.invalidInstallDialog.confirmMove":"Seu aplicativo Notion não está instalado corretamente. Podemos movê-lo para a pasta Aplicativos?","desktopInstaller.invalidInstallDialog.okButton.label":"OK","desktopInstaller.invalidInstallDialog.title":"Instalação inválida","desktopSearch.doneButton.label":"Concluído","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} correspondência} other {{matchCount} correspondências}}","desktopSearch.noResults.message":"Não encontrado","desktopTopbar.appMenu.about":"Sobre o Notion","desktopTopbar.appMenu.checkForUpdate":"Verifique se há atualizações…","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"Você está usando a versão mais recente do Notion!","desktopTopbar.appMenu.checkForUpdate.title":"Verifique se há atualizações","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"Uma nova versão disponível do Notion está sendo baixada em segundo plano. Obrigado por se manter atualizado!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"O Notion não conseguiu estabelecer uma conexão com o servidor de atualização devido a um problema em sua conexão com a internet ou no próprio servidor. Tente novamente mais tarde.","desktopTopbar.appMenu.downloadingUpdate":"Baixando atualização ({percentage}%)","desktopTopbar.appMenu.hide":"Ocultar o Notion","desktopTopbar.appMenu.hideOthers":"Ocultar outros","desktopTopbar.appMenu.preferences":"Preferências…","desktopTopbar.appMenu.quit":"Sair","desktopTopbar.appMenu.quitWithoutSavingTabs":"Sair sem salvar guias","desktopTopbar.appMenu.resetAndEraseAllLocalData":"Redefinir e apagar todos os dados locais","desktopTopbar.appMenu.resetAndUpdateApp":"Redefinir e atualizar o aplicativo","desktopTopbar.appMenu.restartToApplyUpdate":"Reiniciar para aplicar a atualização","desktopTopbar.appMenu.services":"Serviços","desktopTopbar.appMenu.unhide":"Mostrar tudo","desktopTopbar.editMenu.copy":"Copiar","desktopTopbar.editMenu.cut":"Recortar","desktopTopbar.editMenu.paste":"Colar","desktopTopbar.editMenu.pasteAndMatchStyle":"Colar e usar mesmo estilo","desktopTopbar.editMenu.redo":"Refazer","desktopTopbar.editMenu.selectAll":"Selecionar tudo","desktopTopbar.editMenu.speech":"Fala","desktopTopbar.editMenu.speech.startSpeaking":"Começar a falar","desktopTopbar.editMenu.speech.stopSpeaking":"Parar de falar","desktopTopbar.editMenu.title":"Editar","desktopTopbar.editMenu.undo":"Desfazer","desktopTopbar.fileMenu.close":"Fechar janela","desktopTopbar.fileMenu.closeTab":"Fechar guia","desktopTopbar.fileMenu.newTab":"Nova guia","desktopTopbar.fileMenu.newWindow":"Nova janela","desktopTopbar.fileMenu.print":"Imprimir...","desktopTopbar.fileMenu.quit":"Sair","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Sair sem salvar guias","desktopTopbar.fileMenu.reopenClosedTab":"Reabrir a última guia fechada","desktopTopbar.fileMenu.title":"Arquivo","desktopTopbar.helpMenu.disableDebugLogging":"Desabilitar o registro avançado e reiniciar","desktopTopbar.helpMenu.disableHardwareAcceleration":"Desabilitar aceleração de hardware e reiniciar","desktopTopbar.helpMenu.enableDebugLogging":"Habilitar o registro avançado e reiniciar","desktopTopbar.helpMenu.enableHardwareAcceleration":"Habilitar aceleração de hardware e reiniciar","desktopTopbar.helpMenu.openConsole":"Abrir console…","desktopTopbar.helpMenu.openHelpAndSupport":"Abrir Ajuda e documentação","desktopTopbar.helpMenu.recordPerformanceTrace":"Gravar registro de desempenho…","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"Deseja gravar um registro de desempenho pelos próximos 30 segundos? Depois de concluído, ele será colocado na pasta Downloads.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Cancelar","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Gravar registro de desempenho","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"Quer gravar um registro de desempenho?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Redefinir e apagar todos os dados locais","desktopTopbar.helpMenu.showLogsInExplorer":"Mostrar registros no Explorer","desktopTopbar.helpMenu.showLogsInFinder":"Mostrar registros no Finder","desktopTopbar.helpMenu.title":"Ajuda","desktopTopbar.historyMenu.historyBack":"Voltar","desktopTopbar.historyMenu.historyForward":"Avançar","desktopTopbar.historyMenu.title":"Histórico","desktopTopbar.toggleDevTools":"Alternar Ferramentas do Desenvolvedor","desktopTopbar.toggleWindowDevTools":"Alternar janela de Ferramentas do Desenvolvedor","desktopTopbar.troubleshootingMenu.title":"Solução de problemas","desktopTopbar.viewMenu.actualSize":"Tamanho real","desktopTopbar.viewMenu.forceReload":"Forçar recarregar","desktopTopbar.viewMenu.reload":"Recarregar","desktopTopbar.viewMenu.reloadAllTabs":"Recarregar todas as guias","desktopTopbar.viewMenu.showHideSidebar":"Mostrar/ocultar barra lateral","desktopTopbar.viewMenu.title":"Visualizar","desktopTopbar.viewMenu.togglefullscreen":"Alternar tela cheia","desktopTopbar.viewMenu.zoomIn":"Mais zoom","desktopTopbar.viewMenu.zoomOut":"Menos zoom","desktopTopbar.whatsNewMac.title":"Abra as Novidades do Notion para macOS","desktopTopbar.whatsNewWindows.title":"Abra as Novidades do Notion para Windows","desktopTopbar.windowMenu.close":"Fechar","desktopTopbar.windowMenu.front":"Frente","desktopTopbar.windowMenu.maximize":"Maximizar","desktopTopbar.windowMenu.minimize":"Minimizar","desktopTopbar.windowMenu.showNextTab":"Mostrar próxima guia","desktopTopbar.windowMenu.showPreviousTab":"Mostrar guia anterior","desktopTopbar.windowMenu.title":"Janela","desktopTopbar.windowMenu.zoom":"Zoom","desktopTroubleshooting.showLogs.error.message.mac":"O Notion encontrou um erro ao tentar mostrar os registros no Finder:","desktopTroubleshooting.showLogs.error.message.windows":"O Notion encontrou um erro ao tentar mostrar os registros no Explorer:","desktopTroubleshooting.showLogs.error.title":"Falha ao mostrar os registros","menuBarIcon.menu.enableQuickSearch":"Ativar pesquisa rápida","menuBarIcon.menu.keepInBackground":"Manter em segundo plano","menuBarIcon.menu.launchPreferences":"Preferências de inicialização","menuBarIcon.menu.openCloseQuickSearch":"Abrir/fechar pesquisa rápida","menuBarIcon.menu.openOnLogin":"Abrir o Notion no login","menuBarIcon.menu.quitNotion":"Sair do Notion","menuBarIcon.menu.selectCommandSearchShortcut":"Alterar atalho da Pesquisa por Atalho","menuBarIcon.menu.showImmediately":"Mostrar imediatamente","menuBarIcon.menu.showNotionInMenuBar":"Mostrar o Notion na barra de menu","menuBarIcon.menu.toggleCommandSearch":"Alternar Pesquisa por Atalho","openAtLogin.dialog.detail":"{operatingSystem} impediu que o Notion definisse a configuração \\"Abrir no login\\". Isso geralmente acontece quando a inicialização do Notion é definida nas configurações do sistema ou quando você não tem autorizações suficientes. Você ainda pode definir essa configuração manualmente nas configurações do sistema.","openAtLogin.dialog.title":"Abrir no login","updatePrompt.detail":"Gostaria de instalar agora? Reabriremos suas janelas e guias logo após.","updatePrompt.installAndRelaunch":"Instalar e reabrir","updatePrompt.message":"Está disponível uma nova versão do Notion!","updatePrompt.remindMeLater":"Lembrar mais tarde","window.loadingError.message":"Erro ao carregar o Notion. Conecte-se à internet para começar.","window.loadingError.reload":"Recarregar","window.tabLoadingError.cancel":"Cancelar","window.tabMenu.closeOtherTabs":"Fechar outras guias","window.tabMenu.closeTab":"Fechar guia","window.tabMenu.closeTabsToLeft":"Fechar guias à esquerda","window.tabMenu.closeTabsToRight":"Fechar guias à direita","window.tabMenu.copyLink":"Copiar link","window.tabMenu.duplicateTab":"Duplicar guia","window.tabMenu.moveToNewWindow":"Mover guia para nova janela","window.tabMenu.refresh":"Atualizar guia"}')
        },
        144: e => {
            e.exports = JSON.parse('{"commandSearch.window.title":"Notion – Kommandosökning","desktop.tabBar.backButtonLabel":"Tillbaka","desktop.tabBar.closeSidebarLabel":"Stäng sidofältet","desktop.tabBar.closeTabLabel":"Stäng flik, {tabTitle}","desktop.tabBar.forwardButtonLabel":"Nästa","desktop.tabBar.loadingPlaceholder":"Laddar …","desktop.tabBar.newTabButtonLabel":"Ny flik","desktop.tabBar.openSidebarLabel":"Öppna sidofält","desktopInstaller.failedToMove.detail":"Det gick inte att flytta appen till din Applikations-mapp. Flytta den manuellt.","desktopInstaller.failedToMove.title":"Det gick inte att flytta appen","desktopInstaller.invalidInstallDialog.cancelButton.label":"Avbryt","desktopInstaller.invalidInstallDialog.confirmMove":"Din Notion-applikation är inte korrekt installerad. Kan vi flytta din Notion-app till din Applikations-mapp?","desktopInstaller.invalidInstallDialog.okButton.label":"OK","desktopInstaller.invalidInstallDialog.title":"Ogiltig installation","desktopSearch.doneButton.label":"Klart","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} träff} other {{matchCount} träffar}}","desktopSearch.noResults.message":"Hittades inte","desktopTopbar.appMenu.about":"Om Notion","desktopTopbar.appMenu.checkForUpdate":"Sök efter uppdateringar …","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"Du har den senaste versionen av Notion.","desktopTopbar.appMenu.checkForUpdate.title":"Sök efter uppdateringar","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"En ny version av Notion är tillgänglig och laddas för närvarande ner i bakgrunden. Tack för att du håller dig uppdaterad!","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion lyckades inte upprätta en anslutning till uppdateringsservern, antingen på grund av problem med din Internetanslutning eller uppdateringsservern. Försök igen senare.","desktopTopbar.appMenu.downloadingUpdate":"Ladda ned uppdatering ({percentage}%)","desktopTopbar.appMenu.hide":"Dölj Notion","desktopTopbar.appMenu.hideOthers":"Dölj andra","desktopTopbar.appMenu.preferences":"Inställningar …","desktopTopbar.appMenu.quit":"Avsluta","desktopTopbar.appMenu.quitWithoutSavingTabs":"Stäng utan att spara flikarna","desktopTopbar.appMenu.restartToApplyUpdate":"Starta om för att tillämpa uppdatering","desktopTopbar.appMenu.services":"Tjänster","desktopTopbar.appMenu.unhide":"Visa alla","desktopTopbar.editMenu.copy":"Kopiera","desktopTopbar.editMenu.cut":"Klipp","desktopTopbar.editMenu.paste":"Klistra in","desktopTopbar.editMenu.pasteAndMatchStyle":"Klistra in och matcha stil","desktopTopbar.editMenu.redo":"Gör om","desktopTopbar.editMenu.selectAll":"Välj alla","desktopTopbar.editMenu.speech":"Tal","desktopTopbar.editMenu.speech.startSpeaking":"Börja tala","desktopTopbar.editMenu.speech.stopSpeaking":"Sluta tala","desktopTopbar.editMenu.title":"Redigera","desktopTopbar.editMenu.undo":"Ångra","desktopTopbar.fileMenu.close":"Stäng fönster","desktopTopbar.fileMenu.closeTab":"Stäng flik","desktopTopbar.fileMenu.newTab":"Ny flik","desktopTopbar.fileMenu.newWindow":"Nytt fönster","desktopTopbar.fileMenu.print":"Skriv ut ...","desktopTopbar.fileMenu.quit":"Avsluta","desktopTopbar.fileMenu.quitWithoutSavingTabs":"Avsluta utan att spara flikarna","desktopTopbar.fileMenu.reopenClosedTab":"Öppna senast stängda flik igen","desktopTopbar.fileMenu.title":"Fil","desktopTopbar.helpMenu.disableDebugLogging":"Avaktivera avancerad loggning och omstart","desktopTopbar.helpMenu.disableHardwareAcceleration":"Inaktivera hårdvaruacceleration och omstart","desktopTopbar.helpMenu.enableDebugLogging":"Aktivera avancerad loggning och omstart","desktopTopbar.helpMenu.enableHardwareAcceleration":"Aktivera hårdvaruacceleration och omstart","desktopTopbar.helpMenu.openConsole":"Öppna konsol …","desktopTopbar.helpMenu.openHelpAndSupport":"Öppna hjälpen och dokumentationen","desktopTopbar.helpMenu.recordPerformanceTrace":"Spela in prestandaspårning …","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"Vill du spela in ett prestandaspår under de kommande 30 sekunderna? När du är klar kommer den att placeras i mappen Nedladdningar.","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"Avbryt","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"Spela in prestandaspårning","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"Spela in ett prestandaspår?","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"Återställ och radera alla lokala data","desktopTopbar.helpMenu.showLogsInExplorer":"Visa loggar i Explorer","desktopTopbar.helpMenu.showLogsInFinder":"Visa loggar i Finder","desktopTopbar.helpMenu.title":"Hjälp","desktopTopbar.historyMenu.historyBack":"Tillbaka","desktopTopbar.historyMenu.historyForward":"Nästa","desktopTopbar.historyMenu.title":"Historik","desktopTopbar.toggleDevTools":"Växla utvecklarverktyg","desktopTopbar.toggleWindowDevTools":"Växla Window Developer Tools","desktopTopbar.troubleshootingMenu.title":"Felsökning","desktopTopbar.viewMenu.actualSize":"Faktisk storlek","desktopTopbar.viewMenu.forceReload":"Tvinga omladdning","desktopTopbar.viewMenu.reload":"Läs in igen","desktopTopbar.viewMenu.showHideSidebar":"Visa/dölj sidofält","desktopTopbar.viewMenu.title":"Visa","desktopTopbar.viewMenu.togglefullscreen":"Växla helskärm","desktopTopbar.viewMenu.zoomIn":"Zooma in","desktopTopbar.viewMenu.zoomOut":"Zooma ut","desktopTopbar.whatsNewMac.title":"Öppna Nyheter i Notion för macOS","desktopTopbar.whatsNewWindows.title":"Öppna Nyheter i Notion för Windows","desktopTopbar.windowMenu.close":"Stäng","desktopTopbar.windowMenu.front":"Framsida","desktopTopbar.windowMenu.maximize":"Maximera","desktopTopbar.windowMenu.minimize":"Minimera","desktopTopbar.windowMenu.showNextTab":"Visa nästa flik","desktopTopbar.windowMenu.showPreviousTab":"Visa föregående flik","desktopTopbar.windowMenu.title":"Fönster","desktopTopbar.windowMenu.zoom":"Zoom","desktopTroubleshooting.showLogs.error.message.mac":"Notion stötte på ett fel när du försökte visa loggarna i Finder:","desktopTroubleshooting.showLogs.error.message.windows":"Notion stötte på ett fel när du försökte visa loggarna i Explorer:","desktopTroubleshooting.showLogs.error.title":"Det gick inte att visa loggarna","menuBarIcon.menu.enableQuickSearch":"Aktivera snabbsökning","menuBarIcon.menu.keepInBackground":"Behåll i bakgrunden","menuBarIcon.menu.launchPreferences":"Startinställningar","menuBarIcon.menu.openOnLogin":"Öppna Notion vid inloggning","menuBarIcon.menu.quitNotion":"Avsluta Notion","menuBarIcon.menu.selectCommandSearchShortcut":"Ändra snabbkommandon för kommandosökning","menuBarIcon.menu.showImmediately":"Visa omedelbart","menuBarIcon.menu.showNotionInMenuBar":"Visa Notion i menyfältet","menuBarIcon.menu.toggleCommandSearch":"Växla kommandosökning","openAtLogin.dialog.detail":"{operatingSystem} förhindrade att Notion konfigurerade inställningen Öppna vid inloggning.Det här inträffar vanligtvis när Notions uppstart har konfigurerats i systeminställningarna eller om du inte har tillräcklig behörighet.Du kan fortfarande konfigurera inställningen manuellt i systeminställningarna.","openAtLogin.dialog.title":"Öppna vid inloggning","updatePrompt.detail":"Vill du installera den nu? Vi öppnar dina fönster och flikar igen.","updatePrompt.installAndRelaunch":"Installera och starta om","updatePrompt.message":"En ny version av Notion finns tillgänglig.","updatePrompt.remindMeLater":"Påminn mig senare","window.loadingError.message":"Notion kunde inte laddas. Anslut till internet för att komma igång.","window.loadingError.reload":"Läs in igen","window.tabLoadingError.cancel":"Avbryt","window.tabMenu.closeOtherTabs":"Stäng andra flikar","window.tabMenu.closeTab":"Stäng flik","window.tabMenu.closeTabsToLeft":"Stäng flikar till vänster","window.tabMenu.closeTabsToRight":"Stäng flikar till höger","window.tabMenu.copyLink":"Kopiera länk","window.tabMenu.duplicateTab":"Duplicera fliken","window.tabMenu.moveToNewWindow":"Flytta fliken till ett nytt fönster","window.tabMenu.refresh":"Uppdatera fliken"}')
        },
        596: e => {
            e.exports = JSON.parse('{"desktop.tabBar.backButtonLabel":"返回","desktop.tabBar.closeSidebarLabel":"关闭侧边栏","desktop.tabBar.closeTabLabel":"关闭标签页 {tabTitle}","desktop.tabBar.forwardButtonLabel":"前进","desktop.tabBar.loadingPlaceholder":"载入中…","desktop.tabBar.newTabButtonLabel":"新标签页","desktop.tabBar.openSidebarLabel":"打开侧边栏","desktopInstaller.failedToMove.detail":"我们未能将应用程序移动到“应用程序”文件夹。请手动移动。","desktopInstaller.failedToMove.title":"移动应用程序失败","desktopInstaller.invalidInstallDialog.cancelButton.label":"取消","desktopInstaller.invalidInstallDialog.confirmMove":"你的 Notion 应用程序未正确安装。我们能否将 Notion 应用程序移到“应用程序”文件夹中？","desktopInstaller.invalidInstallDialog.okButton.label":"好的","desktopInstaller.invalidInstallDialog.title":"安装无效","desktopSearch.doneButton.label":"完成","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} 个匹配项} other {{matchCount} 个匹配项}}","desktopSearch.noResults.message":"未找到","desktopTopbar.appMenu.about":"关于 Notion","desktopTopbar.appMenu.checkForUpdate":"检查更新…","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"你使用的是最新版本的 Notion！","desktopTopbar.appMenu.checkForUpdate.title":"检查更新","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"新版 Notion 已经发布，目前正在后台下载。感谢你及时更新！","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion 无法与更新服务器建立连接，可能是由于你的互联网连接或更新服务器本身存在问题。请稍后再试。","desktopTopbar.appMenu.downloadingUpdate":"正在下载更新","desktopTopbar.appMenu.hide":"隐藏 Notion","desktopTopbar.appMenu.hideOthers":"隐藏其他","desktopTopbar.appMenu.preferences":"首选项...","desktopTopbar.appMenu.quit":"退出","desktopTopbar.appMenu.resetAndEraseAllLocalData":"重置和擦除所有本地数据","desktopTopbar.appMenu.resetAndUpdateApp":"重置并更新应用","desktopTopbar.appMenu.restartToApplyUpdate":"重新启动以应用更新","desktopTopbar.appMenu.services":"服务","desktopTopbar.appMenu.unhide":"显示所有","desktopTopbar.editMenu.copy":"复制","desktopTopbar.editMenu.cut":"剪切","desktopTopbar.editMenu.paste":"粘贴","desktopTopbar.editMenu.pasteAndMatchStyle":"粘贴和匹配样式","desktopTopbar.editMenu.redo":"重做","desktopTopbar.editMenu.selectAll":"全选","desktopTopbar.editMenu.speech":"语音","desktopTopbar.editMenu.speech.startSpeaking":"开始说话","desktopTopbar.editMenu.speech.stopSpeaking":"停止说话","desktopTopbar.editMenu.title":"编辑","desktopTopbar.editMenu.undo":"撤消","desktopTopbar.fileMenu.close":"关闭窗口","desktopTopbar.fileMenu.closeTab":"关闭标签页","desktopTopbar.fileMenu.newTab":"新标签页","desktopTopbar.fileMenu.newWindow":"新窗口","desktopTopbar.fileMenu.quit":"退出","desktopTopbar.fileMenu.reopenClosedTab":"重新打开上次关闭的标签页","desktopTopbar.fileMenu.title":"文件","desktopTopbar.helpMenu.disableDebugLogging":"禁用高级日志记录并重新启动","desktopTopbar.helpMenu.disableHardwareAcceleration":"禁用硬件加速并重新启动","desktopTopbar.helpMenu.enableDebugLogging":"启用高级日志记录并重新启动","desktopTopbar.helpMenu.enableHardwareAcceleration":"启用硬件加速并重新启动","desktopTopbar.helpMenu.openConsole":"打开控制台...","desktopTopbar.helpMenu.openHelpAndSupport":"打开帮助和文档","desktopTopbar.helpMenu.recordPerformanceTrace":"记录性能跟踪","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"您想记录未来 30 秒的性能跟踪吗？完成后，它将被放置在您的“下载”文件夹中。","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"取消","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"记录性能跟踪","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"记录性能跟踪？","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"重置并擦除所有本地数据","desktopTopbar.helpMenu.showLogsInExplorer":"在资源管理器中显示日志","desktopTopbar.helpMenu.showLogsInFinder":"在 Finder 中显示日志","desktopTopbar.helpMenu.title":"帮助","desktopTopbar.historyMenu.historyBack":"后退","desktopTopbar.historyMenu.historyForward":"前进","desktopTopbar.historyMenu.title":"历史","desktopTopbar.toggleDevTools":"切换开发工具","desktopTopbar.toggleWindowDevTools":"切换Windows开发人员工具","desktopTopbar.troubleshootingMenu.title":"故障排除","desktopTopbar.viewMenu.actualSize":"实际大小","desktopTopbar.viewMenu.forceReload":"强制重新加载","desktopTopbar.viewMenu.reload":"重新加载","desktopTopbar.viewMenu.reloadAllTabs":"重新加载所有标签页","desktopTopbar.viewMenu.showHideSidebar":"显示/隐藏侧边栏","desktopTopbar.viewMenu.title":"视图","desktopTopbar.viewMenu.togglefullscreen":"切换全屏","desktopTopbar.viewMenu.zoomIn":"放大","desktopTopbar.viewMenu.zoomOut":"缩小","desktopTopbar.windowMenu.close":"关闭","desktopTopbar.windowMenu.front":"前面","desktopTopbar.windowMenu.maximize":"最大化","desktopTopbar.windowMenu.minimize":"最小化","desktopTopbar.windowMenu.showNextTab":"显示下一个选项卡","desktopTopbar.windowMenu.showPreviousTab":"显示上一个选项卡","desktopTopbar.windowMenu.title":"窗口","desktopTopbar.windowMenu.zoom":"缩放","desktopTroubleshooting.showLogs.error.message.mac":"Notion 尝试在 Finder 中显示日志时遇到错误：","desktopTroubleshooting.showLogs.error.message.windows":"Notion 尝试在资源管理器中显示日志时遇到错误：","desktopTroubleshooting.showLogs.error.title":"显示日志失败","menuBarIcon.menu.enableQuickSearch":"启用快速搜索","menuBarIcon.menu.openCloseQuickSearch":"打开/关闭快速搜索","menuBarIcon.menu.quitNotion":"退出 Notion","menuBarIcon.menu.showNotionInMenuBar":"在菜单栏中显示 Notion","window.loadingError.message":"加载 Notion 时出错，请连接到 Internet 开始使用。","window.loadingError.reload":"重新加载","window.tabLoadingError.cancel":"取消","window.tabMenu.closeOtherTabs":"关闭其他标签页","window.tabMenu.closeTab":"关闭标签页","window.tabMenu.closeTabsToLeft":"关闭左侧的标签页","window.tabMenu.closeTabsToRight":"关闭右侧的标签页","window.tabMenu.copyLink":"复制链接","window.tabMenu.duplicateTab":"复制标签页","window.tabMenu.moveToNewWindow":"将标签页移动到新窗口","window.tabMenu.refresh":"刷新标签页"}')
        },
        44: e => {
            e.exports = JSON.parse('{"desktop.tabBar.backButtonLabel":"返回","desktop.tabBar.closeSidebarLabel":"關閉側邊欄","desktop.tabBar.closeTabLabel":"關閉分頁 {tabTitle}","desktop.tabBar.forwardButtonLabel":"前進","desktop.tabBar.loadingPlaceholder":"載入中...","desktop.tabBar.newTabButtonLabel":"新分頁","desktop.tabBar.openSidebarLabel":"開啟側邊欄","desktopInstaller.failedToMove.detail":"我們不能將 APP 移至你的應用程式資料夾。請手動將其移動。","desktopInstaller.failedToMove.title":"無法移動 APP","desktopInstaller.invalidInstallDialog.cancelButton.label":"取消","desktopInstaller.invalidInstallDialog.confirmMove":"Notion APP 並未正確安裝。我們可以將你的 Notion APP 移入應用程式資料夾內嗎？","desktopInstaller.invalidInstallDialog.okButton.label":"好","desktopInstaller.invalidInstallDialog.title":"安裝無效","desktopSearch.doneButton.label":"完成","desktopSearch.foundMatches.message":"{matchCount, plural, one {{matchCount} 個相符項目} other {{matchCount} 個相符項目}}","desktopSearch.noResults.message":"未找到","desktopTopbar.appMenu.about":"關於 Notion","desktopTopbar.appMenu.checkForUpdate":"檢查更新……","desktopTopbar.appMenu.checkForUpdate.noUpdateAvailable":"你正在使用最新版本的 Notion！","desktopTopbar.appMenu.checkForUpdate.title":"檢查更新","desktopTopbar.appMenu.checkForUpdate.updateAvailable":"新版 Notion 現已推出，目前正在後台下載。感謝你隨時掌握最新資訊！","desktopTopbar.appMenu.checkForUpdate.updateCheckFailed":"Notion 無法與更新的伺服器連線，原因在於你的網際網路連線，或者更新的伺服器本身出現問題。請稍後再試一次。","desktopTopbar.appMenu.downloadingUpdate":"正在下載更新","desktopTopbar.appMenu.hide":"隱藏 Notion","desktopTopbar.appMenu.hideOthers":"隱藏其他","desktopTopbar.appMenu.preferences":"偏好設定","desktopTopbar.appMenu.quit":"離開","desktopTopbar.appMenu.resetAndEraseAllLocalData":"重置並清除所有本機資料","desktopTopbar.appMenu.resetAndUpdateApp":"重置並更新應用程式","desktopTopbar.appMenu.restartToApplyUpdate":"重新啟動以套用更新","desktopTopbar.appMenu.services":"服務","desktopTopbar.appMenu.unhide":"全部顯示","desktopTopbar.editMenu.copy":"複製","desktopTopbar.editMenu.cut":"剪下","desktopTopbar.editMenu.paste":"貼上","desktopTopbar.editMenu.pasteAndMatchStyle":"貼上並匹配風格","desktopTopbar.editMenu.redo":"重做","desktopTopbar.editMenu.selectAll":"全選","desktopTopbar.editMenu.speech":"語音","desktopTopbar.editMenu.speech.startSpeaking":"開始說話","desktopTopbar.editMenu.speech.stopSpeaking":"停止說話","desktopTopbar.editMenu.title":"編輯","desktopTopbar.editMenu.undo":"還原","desktopTopbar.fileMenu.close":"關閉視窗","desktopTopbar.fileMenu.closeTab":"關閉分頁","desktopTopbar.fileMenu.newTab":"新分頁","desktopTopbar.fileMenu.newWindow":"新視窗","desktopTopbar.fileMenu.quit":"離開","desktopTopbar.fileMenu.reopenClosedTab":"重新開啟最後關閉的分頁","desktopTopbar.fileMenu.title":"檔案","desktopTopbar.helpMenu.disableDebugLogging":"停用進階登錄並重新啟動","desktopTopbar.helpMenu.disableHardwareAcceleration":"停用硬體加速並重新啟動","desktopTopbar.helpMenu.enableDebugLogging":"啟用進階登錄並重新啟動","desktopTopbar.helpMenu.enableHardwareAcceleration":"啟用硬體加速並重新啟動","desktopTopbar.helpMenu.openConsole":"開啟控制台……","desktopTopbar.helpMenu.openHelpAndSupport":"開啟說明與文件","desktopTopbar.helpMenu.recordPerformanceTrace":"記錄性能追蹤","desktopTopbar.helpMenu.recordPerformanceTraceConfirm":"是否要記錄接下來 30 秒的性能追蹤？完成後，該記錄即會留存在你的「下載」資料夾。","desktopTopbar.helpMenu.recordPerformanceTraceConfirmCancel":"取消","desktopTopbar.helpMenu.recordPerformanceTraceConfirmOk":"記錄性能追蹤","desktopTopbar.helpMenu.recordPerformanceTraceConfirmTitle":"是否記錄性能追蹤？","desktopTopbar.helpMenu.resetAndEraseAllLocalData":"重設並清除所有本機資料","desktopTopbar.helpMenu.showLogsInExplorer":"在 Explorer 中顯示日誌檔","desktopTopbar.helpMenu.showLogsInFinder":"在 Finder 中顯示日誌檔","desktopTopbar.helpMenu.title":"說明","desktopTopbar.historyMenu.historyBack":"返回","desktopTopbar.historyMenu.historyForward":"前進","desktopTopbar.historyMenu.title":"歷史","desktopTopbar.toggleDevTools":"切換開發者工具","desktopTopbar.toggleWindowDevTools":"切換Windows開發人員工具","desktopTopbar.troubleshootingMenu.title":"疑難排解","desktopTopbar.viewMenu.actualSize":"實際大小","desktopTopbar.viewMenu.forceReload":"強制重新載入","desktopTopbar.viewMenu.reload":"重新載入","desktopTopbar.viewMenu.reloadAllTabs":"重新載入所有分頁","desktopTopbar.viewMenu.showHideSidebar":"顯示/隱藏側邊欄","desktopTopbar.viewMenu.title":"視圖","desktopTopbar.viewMenu.togglefullscreen":"切換全熒幕","desktopTopbar.viewMenu.zoomIn":"縮小","desktopTopbar.viewMenu.zoomOut":"放大","desktopTopbar.windowMenu.close":"關閉","desktopTopbar.windowMenu.front":"前面","desktopTopbar.windowMenu.maximize":"最大化","desktopTopbar.windowMenu.minimize":"最小化","desktopTopbar.windowMenu.showNextTab":"顯示下一個分頁","desktopTopbar.windowMenu.showPreviousTab":"顯示上一個分頁","desktopTopbar.windowMenu.title":"視窗","desktopTopbar.windowMenu.zoom":"縮放","desktopTroubleshooting.showLogs.error.message.mac":"Notion 嘗試在 Finder 中顯示日誌檔時發生錯誤：","desktopTroubleshooting.showLogs.error.message.windows":"Notion 嘗試在 Explorer 中顯示日誌檔時發生錯誤：","desktopTroubleshooting.showLogs.error.title":"顯示日誌檔失敗","menuBarIcon.menu.enableQuickSearch":"啟用快速搜尋","menuBarIcon.menu.openCloseQuickSearch":"開啟/關閉快速搜尋","menuBarIcon.menu.quitNotion":"退出 Notion","menuBarIcon.menu.showNotionInMenuBar":"在選單列中顯示 Notion","window.loadingError.message":"載入 Notion 時出錯，連線到網際網路即可使用。","window.loadingError.reload":"重新載入","window.tabLoadingError.cancel":"取消","window.tabMenu.closeOtherTabs":"關閉其他分頁","window.tabMenu.closeTab":"關閉分頁","window.tabMenu.closeTabsToLeft":"關閉左側分頁","window.tabMenu.closeTabsToRight":"關閉右側分頁","window.tabMenu.copyLink":"複製連結","window.tabMenu.duplicateTab":"複製分頁","window.tabMenu.moveToNewWindow":"將分頁移至新視窗","window.tabMenu.refresh":"重新整理分頁"}')
        },
    }
    const __cache = {};

    function __require(id) {
        let module = __cache[id];
        if (void 0 !== module) {
            return module.exports;
        }
        module = __cache[id] = {exports: {}};
        __modules[id].call(module.exports, module, module.exports, __require)
        return module.exports
    }

    __require.n = module => {
        let t = module && module.__esModule ? () => module.default : () => module;
        __require.d(t, {a: t})
        return t
    }
    __require.d = (target, source) => {
        for (let key in source) {
            if (__require.o(source, key) && !__require.o(target, key)) {
                Object.defineProperty(target, key, {enumerable: !0, get: source[key]})
            }
        }
    }
    __require.o = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)
    __require.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"})
        Object.defineProperty(e, "__esModule", {value: !0})
    }
    void 0 !== __require && (__require.ab = "/native_modules/")
    __require(404)
})();
//# sourceMappingURL=preload.js.map
