(() => {
    "use strict";
    const __modules = {
        542: function (module, exports, __require) {
            let __createBinding = this && this.__createBinding || (Object.create ? function (e, n, t, r) {
                void 0 === r && (r = t);
                var i = Object.getOwnPropertyDescriptor(n, t);
                i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function () {
                        return n[t]
                    }
                }), Object.defineProperty(e, r, i)
            } : function (e, n, t, r) {
                void 0 === r && (r = t), e[r] = n[t]
            })
            let __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (e, n) {
                Object.defineProperty(e, "default", {enumerable: !0, value: n})
            } : function (e, n) {
                e.default = n
            })
            let __importStar = this && this.__importStar || function (e) {
                if (e && e.__esModule) return e;
                var n = {};
                if (null != e) for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(n, e, t);
                return __setModuleDefault(n, e), n
            };

            Object.defineProperty(exports, "__esModule", {value: true});

            const electron = __require(288)
            const d = __importStar(__require(326));

            electron.contextBridge.exposeInMainWorld("__opener", {
                postMessage: (e, n) => {
                    d.sendToMain("notion:post-message", e)
                }
            })
            electron.webFrame.executeJavaScript('window["opener"] = __opener')
        },
        326: function (module, exports, __require) {
            let __importDefault = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };

            Object.defineProperty(exports, "__esModule", {value: true})


            const __electron = __importDefault(__require(288));

            exports.handleMainToNotionEvent = {
                addListener(e, n) {
                    __electron.default.ipcRenderer.addListener(e, n)
                },
                removeListener(e, n) {
                    __electron.default.ipcRenderer.removeListener(e, n)
                },
                listeners: e => __electron.default.ipcRenderer.listeners(e)
            }
            exports.handleMainToSearchEvent = {
                addListener(e, n) {
                    __electron.default.ipcRenderer.addListener(e, n)
                },
                removeListener(e, n) {
                    __electron.default.ipcRenderer.removeListener(e, n)
                },
                listeners: e => __electron.default.ipcRenderer.listeners(e)
            }
            exports.handleMainToTabsEvent = {
                addListener(e, n) {
                    __electron.default.ipcRenderer.addListener(e, n)
                },
                removeListener(e, n) {
                    __electron.default.ipcRenderer.removeListener(e, n)
                },
                listeners: e => __electron.default.ipcRenderer.listeners(e)
            };
            const o = new Map;

            function a(e, ...n) {
                __electron.default.ipcRenderer.send(e, ...n)
            }

            exports.broadcast = {
                emit(e, ...n) {
                    a("notion:broadcast", {channel: e, args: n})
                },
                addListener(e, t) {
                    const r = (n, r) => {
                        r.channel === e && t(...r.args)
                    };
                    o.set(t, r)
                    exports.handleMainToNotionEvent.addListener("notion:broadcast", r)
                },
                removeListener(e, t) {
                    const r = o.get(t);
                    if (r) {
                        exports.handleMainToNotionEvent.removeListener("notion:broadcast", r)
                        o.delete(t)
                    }
                }
            }
            exports.invokeInMainAndReturnResult = function (e, ...n) {
                return __electron.default.ipcRenderer.invoke(e, ...n)
            }
            exports.sendToMain = a
            exports.DEPRECATED_sendSyncToMainAndReturnResult = function (e, ...n) {
                return __electron.default.ipcRenderer.sendSync(e, ...n)
            }
        },
        288: module => {
            module.exports = require("electron")
        }
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

    void 0 !== __require && (__require.ab = "/native_modules/")
    __require(542)
})();
//# sourceMappingURL=preload.js.map
