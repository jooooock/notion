(() => {
    "use strict";
    const __modules = {
        239: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {value: !0});
            const o = t(272);
            n.default = o
        },
        326: function (e, n, t) {
            var o = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(n, "__esModule", {value: !0}), n.DEPRECATED_sendSyncToMainAndReturnResult = n.sendToMain = n.invokeInMainAndReturnResult = n.broadcast = n.handleMainToTabsEvent = n.handleMainToSearchEvent = n.handleMainToNotionEvent = void 0;
            const i = o(t(288));
            n.handleMainToNotionEvent = {
                addListener(e, n) {
                    i.default.ipcRenderer.addListener(e, n)
                }, removeListener(e, n) {
                    i.default.ipcRenderer.removeListener(e, n)
                }, listeners: e => i.default.ipcRenderer.listeners(e)
            }, n.handleMainToSearchEvent = {
                addListener(e, n) {
                    i.default.ipcRenderer.addListener(e, n)
                }, removeListener(e, n) {
                    i.default.ipcRenderer.removeListener(e, n)
                }, listeners: e => i.default.ipcRenderer.listeners(e)
            }, n.handleMainToTabsEvent = {
                addListener(e, n) {
                    i.default.ipcRenderer.addListener(e, n)
                }, removeListener(e, n) {
                    i.default.ipcRenderer.removeListener(e, n)
                }, listeners: e => i.default.ipcRenderer.listeners(e)
            };
            const a = new Map;

            function r(e, ...n) {
                i.default.ipcRenderer.send(e, ...n)
            }

            n.broadcast = {
                emit(e, ...n) {
                    r("notion:broadcast", {channel: e, args: n})
                }, addListener(e, t) {
                    const o = (n, o) => {
                        o.channel === e && t(...o.args)
                    };
                    a.set(t, o), n.handleMainToNotionEvent.addListener("notion:broadcast", o)
                }, removeListener(e, t) {
                    const o = a.get(t);
                    o && (n.handleMainToNotionEvent.removeListener("notion:broadcast", o), a.delete(t))
                }
            }, n.invokeInMainAndReturnResult = function (e, ...n) {
                return i.default.ipcRenderer.invoke(e, ...n)
            }, n.sendToMain = r, n.DEPRECATED_sendSyncToMainAndReturnResult = function (e, ...n) {
                return i.default.ipcRenderer.sendSync(e, ...n)
            }
        },
        840: function (e, n, t) {
            var o = this && this.__createBinding || (Object.create ? function (e, n, t, o) {
                void 0 === o && (o = t);
                var i = Object.getOwnPropertyDescriptor(n, t);
                i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function () {
                        return n[t]
                    }
                }), Object.defineProperty(e, o, i)
            } : function (e, n, t, o) {
                void 0 === o && (o = t), e[o] = n[t]
            }), i = this && this.__setModuleDefault || (Object.create ? function (e, n) {
                Object.defineProperty(e, "default", {enumerable: !0, value: n})
            } : function (e, n) {
                e.default = n
            }), a = this && this.__importStar || function (e) {
                if (e && e.__esModule) return e;
                var n = {};
                if (null != e) for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && o(n, e, t);
                return i(n, e), n
            }, r = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(n, "__esModule", {value: !0}), n.navigationHistory = void 0;
            const d = r(t(852)), s = t(288), l = r(t(239)), c = a(t(326)), p = new Map, u = new Map, v = {
                readText: () => c.invokeInMainAndReturnResult("notion:clipboard:read-text"),
                writeText: e => c.invokeInMainAndReturnResult("notion:clipboard:write-text", e),
                readHtml: () => c.invokeInMainAndReturnResult("notion:clipboard:read-html"),
                writeHtml: e => c.invokeInMainAndReturnResult("notion:clipboard:write-html", e),
                readRtf: () => c.invokeInMainAndReturnResult("notion:clipboard:read-rtf"),
                writeRtf: e => c.invokeInMainAndReturnResult("notion:clipboard:write-rtf", e),
                readImage: () => c.invokeInMainAndReturnResult("notion:clipboard:read-image"),
                writeImage: e => c.invokeInMainAndReturnResult("notion:clipboard:write-image", e),
                readBookmark: () => c.invokeInMainAndReturnResult("notion:clipboard:read-bookmark"),
                writeBookmark: e => c.invokeInMainAndReturnResult("notion:clipboard:write-bookmark", e),
                clear: () => c.invokeInMainAndReturnResult("notion:clipboard:clear"),
                availableFormats: () => c.invokeInMainAndReturnResult("notion:clipboard:available-formats"),
                has: e => c.invokeInMainAndReturnResult("notion:clipboard:has", e),
                read: e => c.invokeInMainAndReturnResult("notion:clipboard:read", e),
                readBuffer: e => c.invokeInMainAndReturnResult("notion:clipboard:read-buffer", e),
                write: e => c.invokeInMainAndReturnResult("notion:clipboard:write", e),
                writeBuffer: (e, n) => c.invokeInMainAndReturnResult("notion:clipboard:write-buffer", e, n)
            };
            n.navigationHistory = {
                handleBackMetaClick: () => {
                    c.sendToMain("notion:navigation-meta-click", "back")
                }, handleForwardMetaClick: () => {
                    c.sendToMain("notion:navigation-meta-click", "forward")
                }, handleTabHistoryMenu(e, n, t) {
                    c.sendToMain("notion:show-tab-history-menu", e, n, t)
                }
            };
            const M = {
                openInNewWindow(e) {
                    c.sendToMain("notion:create-window", e)
                },
                openInNewTab(e, n, t) {
                    c.sendToMain("notion:new-tab-from-notion", e, Boolean(n), t || "after-children")
                },
                openExternalUrl(e) {
                    c.sendToMain("notion:open-external-url", {url: e})
                },
                clearBrowserHistory() {
                    c.sendToMain("notion:clear-browser-history")
                },
                async getAppVersion() {
                    const e = await c.invokeInMainAndReturnResult("notion:get-app-version");
                    return e.error ? "0.0.0" : e.value
                },
                setBadge(e) {
                    if ("" === e) return void c.sendToMain("notion:set-badge", {
                        badgeString: "",
                        badgeImageDataUrl: null,
                        devicePixelRatio: window.devicePixelRatio
                    });
                    const n = document.createElement("canvas");
                    n.width = 16 * window.devicePixelRatio, n.height = 16 * window.devicePixelRatio;
                    const t = n.getContext("2d");
                    if (!t) return void c.sendToMain("notion:set-badge", {
                        badgeString: "",
                        badgeImageDataUrl: null,
                        devicePixelRatio: window.devicePixelRatio
                    });
                    const o = .9, i = n.width / 2 / o, a = n.height / 2 / o, r = n.width / 2 * o * o;
                    t.beginPath(), t.arc(i, a, r, 0, 2 * Math.PI, !1), t.fillStyle = "rgba(247,94,79,0.95)", t.fill(), t.font = 8.1 * window.devicePixelRatio + "px sans-serif", t.fillStyle = "white", t.textAlign = "center", t.fillText(e, i, a + 3.15 * window.devicePixelRatio);
                    const d = n.toDataURL("image/png");
                    c.sendToMain("notion:set-badge", {
                        badgeString: e,
                        badgeImageDataUrl: d,
                        devicePixelRatio: window.devicePixelRatio
                    })
                },
                setOverlay(e) {
                    c.sendToMain("notion:set-tab-is-overlay-active", e)
                },
                fullscreen: {
                    get() {
                        const e = c.DEPRECATED_sendSyncToMainAndReturnResult("notion:get-fullscreen");
                        return !e.error && e.value
                    }, addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:full-screen-changed", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:full-screen-changed", e)
                    }
                },
                inPageSearch: {
                    start(e) {
                        c.sendToMain("notion:search-start", e)
                    }, stop() {
                        c.sendToMain("notion:search-stop-from-notion")
                    }, started: {
                        addListener(e) {
                            c.handleMainToNotionEvent.addListener("notion:search-started", e)
                        }, removeListener(e) {
                            c.handleMainToNotionEvent.removeListener("notion:search-started", e)
                        }
                    }, stopped: {
                        addListener(e) {
                            c.handleMainToNotionEvent.addListener("notion:search-stopped", e)
                        }, removeListener(e) {
                            c.handleMainToNotionEvent.removeListener("notion:search-stopped", e)
                        }
                    }
                },
                zoom: {
                    set(e) {
                        c.sendToMain("notion:zoom", e)
                    }, get: () => s.webFrame.getZoomFactor()
                },
                loadSpellcheck: () => {
                },
                getSpellCheckerLanguages: () => c.invokeInMainAndReturnResult("notion:get-spellchecker-languages"),
                getAvailableSpellCheckerLanguages: () => c.invokeInMainAndReturnResult("notion:get-available-spellchecker-languages"),
                setSpellCheckerLanguages: e => {
                    c.sendToMain("notion:set-spellchecker-languages", e)
                },
                setSpellCheckerEnabled: e => {
                    c.sendToMain("notion:set-spellchecker-enabled", e)
                },
                addToDictionary: e => {
                    c.sendToMain("notion:add-to-dictionary", e)
                },
                contextMenu: {
                    addListener: e => {
                        const n = {
                            preventDefault: () => {
                            }
                        }, t = (t, o) => {
                            e(n, o)
                        };
                        p.set(e, t), c.handleMainToNotionEvent.addListener("notion:context-menu", t)
                    }, removeListener: e => {
                        const n = p.get(e);
                        n && c.handleMainToNotionEvent.removeListener("notion:context-menu", n)
                    }
                },
                replaceMisspelling: e => {
                    c.sendToMain("notion:replace-misspelling", e)
                },
                cut: () => {
                    c.sendToMain("notion:cut")
                },
                copy: () => {
                    c.sendToMain("notion:copy")
                },
                paste: () => {
                    c.sendToMain("notion:paste")
                },
                copyText: e => {
                    v.writeText(e)
                },
                copyImage: e => {
                    const n = document.createElement("canvas"), t = n.getContext("2d"), o = new Image;
                    o.crossOrigin = "Anonymous", o.onload = () => {
                        if (n.height = o.height, n.width = o.width, t) {
                            t.drawImage(o, 0, 0);
                            const e = n.toDataURL("image/png");
                            v.writeImage(e)
                        }
                    }, o.src = e
                },
                openDevTools: () => {
                    c.sendToMain("notion:open-dev-tools")
                },
                setWindowTitle: e => {
                    c.sendToMain("notion:set-window-title", {title: e})
                },
                toggleMaximized: () => {
                    c.sendToMain("notion:toggle-maximized")
                },
                checkForUpdates() {
                    c.sendToMain("notion:check-for-updates")
                },
                updateReady: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:update-ready", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:update-ready", e)
                    }
                },
                installUpdate() {
                    c.sendToMain("notion:install-update")
                },
                installAppJsUpdate(e) {
                    c.sendToMain("notion:install-appjs-update", e)
                },
                updateError: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:update-error", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:update-error", e)
                    }
                },
                updateChecking: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:checking-for-update", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:checking-for-update", e)
                    }
                },
                updateAvailable: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:update-available", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:update-available", e)
                    }
                },
                updateProgress: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:update-progress", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:update-progress", e)
                    }
                },
                updateNotAvailable: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:update-not-available", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:update-not-available", e)
                    }
                },
                checkForAppUpdates() {
                    c.sendToMain("notion:check-for-app-updates")
                },
                appUpdateReady: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:app-update-ready", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:app-update-ready", e)
                    }
                },
                appUpdateError: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:app-update-error", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:app-update-error", e)
                    }
                },
                appUpdateChecking: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:checking-for-app-update", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:checking-for-app-update", e)
                    }
                },
                appUpdateAvailable: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:app-update-available", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:app-update-available", e)
                    }
                },
                appUpdateProgress: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:app-update-progress", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:app-update-progress", e)
                    }
                },
                appUpdateNotAvailable: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:app-update-not-available", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:app-update-not-available", e)
                    }
                },
                appUpdateFinished: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:app-update-finished", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:app-update-finished", e)
                    }
                },
                appUpdateInstall: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:app-update-install", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:app-update-install", e)
                    }
                },
                async getSubstitutions() {
                    const e = await c.invokeInMainAndReturnResult("notion:get-substitutions");
                    return e.error ? [] : e.value
                },
                isRunningUnderArm64Translation: async () => c.invokeInMainAndReturnResult("notion:get-is-running-under-arm64-translation"),
                async isMainWindow() {
                    if (M.isMainTab) return M.isMainTab();
                    throw new Error("electronApi.isMainTab should not be undefined since it was added in the same commit")
                },
                async isMainTab() {
                    const e = await c.invokeInMainAndReturnResult("notion:is-main-tab");
                    return !e.error && e.value
                },
                isActiveTab: {
                    get: () => c.invokeInMainAndReturnResult("notion:is-active-tab"), addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:set-is-active-tab", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:set-is-active-tab", e)
                    }
                },
                async windowIsVisible() {
                    const e = await c.invokeInMainAndReturnResult("notion:is-window-visible");
                    return !e.error && e.value
                },
                setTheme(e) {
                    c.sendToMain("notion:set-theme", e)
                },
                setTabColors(e) {
                    c.sendToMain("notion:set-tab-colors", e)
                },
                newWindow: {
                    addListener: e => {
                        const n = {
                            preventDefault: () => {
                            }
                        }, t = (t, o) => {
                            e(n, o)
                        };
                        u.set(e, t), c.handleMainToNotionEvent.addListener("notion:new-window", t)
                    }, removeListener: e => {
                        const n = u.get(e);
                        n && c.handleMainToNotionEvent.removeListener("notion:new-window", n)
                    }
                },
                openOauthPopup: async e => (c.sendToMain("notion:create-popup", e), new Promise((e => {
                    const n = (t, o) => {
                        c.handleMainToNotionEvent.removeListener("notion:popup-callback", n), e(o)
                    };
                    c.handleMainToNotionEvent.addListener("notion:popup-callback", n)
                }))),
                openGoogleDrivePickerPopup: async e => (c.sendToMain("notion:create-google-drive-picker", e), new Promise((e => {
                    const n = (t, o) => {
                        c.handleMainToNotionEvent.removeListener("notion:google-drive-picker-callback", n), e(o)
                    };
                    c.handleMainToNotionEvent.addListener("notion:google-drive-picker-callback", n)
                }))),
                getCookie: e => c.invokeInMainAndReturnResult("notion:get-cookie", e),
                setCookie: e => {
                    c.sendToMain("notion:set-cookie", e)
                },
                setLoggerData: e => {
                    c.sendToMain("notion:set-logger-data", e)
                },
                clearCookies: () => {
                    c.sendToMain("notion:clear-cookies")
                },
                appUpdateReload: {
                    emit: e => {
                        c.broadcast.emit("notion:app-update-reload", e)
                    }, addListener(e) {
                        c.broadcast.addListener("notion:app-update-reload", e)
                    }, removeListener(e) {
                        c.broadcast.removeListener("notion:app-update-reload", e)
                    }
                },
                async getAppPath() {
                    const e = await c.invokeInMainAndReturnResult("notion:get-app-path");
                    return e.error ? "" : e.value
                },
                clearAllCookies: () => {
                    c.sendToMain("notion:clear-all-cookies")
                },
                downloadUrl(e) {
                    c.sendToMain("notion:download-url", {url: e})
                },
                onNavigate: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:navigate-to-url", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:navigate-to-url", e)
                    }
                },
                onOpenSettings: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:open-settings", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:open-settings", e)
                    }
                },
                getSqliteMeta: () => c.invokeInMainAndReturnResult("notion:get-sqlite-meta"),
                refreshAll: e => c.invokeInMainAndReturnResult("notion:refresh-all", e),
                ready: () => c.invokeInMainAndReturnResult("notion:ready"),
                sqliteServerEnabled: !0,
                electronAppFeatures: {
                    get: () => c.invokeInMainAndReturnResult("notion:get-electron-app-features"),
                    setPreference(e, n) {
                        c.sendToMain("notion:set-user-preference", e, n)
                    },
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:set-electron-app-features", e)
                    },
                    removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:set-electron-app-features", e)
                    }
                },
                sidebarState: {
                    set(e) {
                        c.sendToMain("notion:set-sidebar-state", e)
                    }, addSetSidebarOpenListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:set-sidebar-open", e)
                    }, removeSetSidebarOpenListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:set-sidebar-open", e)
                    }, addToggleListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:toggle-sidebar-expanded", e)
                    }, removeToggleListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:toggle-sidebar-expanded", e)
                    }
                },
                windowSidebarState: {
                    get: () => c.invokeInMainAndReturnResult("notion:get-window-sidebar-state"),
                    set(e) {
                        c.sendToMain("notion:set-window-sidebar-state", e)
                    },
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:set-window-sidebar-state", e)
                    },
                    removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:set-window-sidebar-state", e)
                    }
                },
                setAppStoreState(e) {
                    c.sendToMain("notion:set-app-store-state", e)
                },
                clipboard: v,
                track: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:track", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:track", e)
                    }
                },
                closeGlobalSearchModal() {
                    c.sendToMain("notion:close-global-search-modal")
                },
                openPageFromGlobalSearch(e) {
                    c.sendToMain("notion:open-page-from-global-search", e)
                },
                openSearchModalForNewTab: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("notion:open-search-for-new-tab", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("notion:open-search-for-new-tab", e)
                    }, listeners: () => c.handleMainToNotionEvent.listeners("notion:open-search-for-new-tab")
                },
                closeQuickSearch() {
                    c.sendToMain("notion:quick-search-close")
                },
                openQuickSearchResult(e) {
                    c.sendToMain("notion:quick-search-open-result", e)
                },
                quickSearchReady() {
                    c.sendToMain("notion:quick-search-ready")
                },
                quickSearchNotReady() {
                    c.sendToMain("notion:quick-search-not-ready")
                },
                quickSearchRefresh() {
                    c.sendToMain("notion:quick-search-refresh")
                },
                openQuickSearchShortcutSetting() {
                    c.sendToMain("notion:quick-search-open-shortcut-settings")
                },
                setIsMediaActive(e) {
                    c.sendToMain("notion:set-is-media-active", e)
                },
                quickSearchVisibilityState: {
                    isVisible: () => c.invokeInMainAndReturnResult("notion:is-quick-search-visible"),
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("quick-search:visibility-state-changed", e)
                    },
                    removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("quick-search:visibility-state-changed", e)
                    }
                },
                openSearchModalFromQuickSearch: {
                    addListener(e) {
                        c.handleMainToNotionEvent.addListener("quick-search:open-search-modal", e)
                    }, removeListener(e) {
                        c.handleMainToNotionEvent.removeListener("quick-search:open-search-modal", e)
                    }
                },
                getAnalyticsInfo: () => c.invokeInMainAndReturnResult("notion:get-analytics-info"),
                isProtocolRegistered: e => c.invokeInMainAndReturnResult("notion:get-is-protocol-registered", e),
                openAppMenu: () => {
                    c.sendToMain("notion:open-app-menu")
                },
                navigationHistory: n.navigationHistory
            };
            s.contextBridge.exposeInMainWorld("__electronApi", M), s.contextBridge.exposeInMainWorld("__isElectron", !0), s.contextBridge.exposeInMainWorld("__platform", d.default.platform), s.contextBridge.exposeInMainWorld("__desktopConfig", l.default), M.getAnalyticsInfo().then((e => {
                s.contextBridge.exposeInMainWorld("__desktopDeviceInfo", e)
            })).catch((e => {
                console.error(e)
            })), window.addEventListener("keydown", (e => {
                "Alt" === e.key ? e.ctrlKey || e.shiftKey || e.metaKey || c.sendToMain("notion:alt-key-down") : c.sendToMain("notion:cancel-alt-menu-open")
            })), window.addEventListener("keyup", (e => {
                "Alt" === e.key && c.sendToMain("notion:alt-key-up")
            })), window.addEventListener("keyup", (e => {
                "Alt" === e.key && c.sendToMain("notion:alt-key-up")
            }), {capture: !0}), window.addEventListener("focus", (() => {
                c.sendToMain("notion:focus")
            })), window.addEventListener("blur", (() => {
                c.sendToMain("notion:blur")
            }))
        },
        232: function (e, n, t) {
            var o = this && this.__createBinding || (Object.create ? function (e, n, t, o) {
                void 0 === o && (o = t);
                var i = Object.getOwnPropertyDescriptor(n, t);
                i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function () {
                        return n[t]
                    }
                }), Object.defineProperty(e, o, i)
            } : function (e, n, t, o) {
                void 0 === o && (o = t), e[o] = n[t]
            }), i = this && this.__setModuleDefault || (Object.create ? function (e, n) {
                Object.defineProperty(e, "default", {enumerable: !0, value: n})
            } : function (e, n) {
                e.default = n
            }), a = this && this.__importStar || function (e) {
                if (e && e.__esModule) return e;
                var n = {};
                if (null != e) for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && o(n, e, t);
                return i(n, e), n
            };
            Object.defineProperty(n, "__esModule", {value: !0}), n.tabsApi = void 0;
            const r = t(288), d = a(t(326)), s = t(840);
            n.tabsApi = {
                tabBarState: {
                    addListener(e) {
                        d.handleMainToTabsEvent.addListener("tabs:set-state", e)
                    }, removeListener(e) {
                        d.handleMainToTabsEvent.removeListener("tabs:set-state", e)
                    }
                }, navigationHistory: s.navigationHistory, goBack() {
                    d.sendToMain("notion:go-back")
                }, goForward() {
                    d.sendToMain("notion:go-forward")
                }, newTab() {
                    d.sendToMain("notion:new-tab-from-tab-bar")
                }, toggleSidebarExpansion() {
                    d.sendToMain("notion:toggle-sidebar-expanded")
                }, setSidebarOpen(e) {
                    d.sendToMain("notion:set-sidebar-open", e)
                }, toggleMaximized() {
                    d.sendToMain("notion:toggle-maximized")
                }, handleTabClicked(e) {
                    d.sendToMain("notion:tab-clicked", e)
                }, handleTabClose(e) {
                    d.sendToMain("notion:close-tab", e)
                }, handleTabMenu(e, n, t) {
                    d.sendToMain("notion:show-tab-menu", e, n, t)
                }, handleRendererVisibilityChange(e) {
                    d.sendToMain("notion:renderer-visibility-changed", e)
                }, updateTabOrder(e) {
                    d.sendToMain("notion:set-tab-order", e)
                }, openApplicationMenu() {
                    d.sendToMain("notion:open-app-menu")
                }
            }, r.contextBridge.exposeInMainWorld("tabsApi", n.tabsApi)
        },
        288: e => {
            e.exports = require("electron")
        },
        852: e => {
            e.exports = process
        },
        272: e => {
            e.exports = JSON.parse('{"env":"production","isLocalhost":false,"domainName":"www.notion.so","domainBaseUrl":"https://www.notion.so","protocol":"notion","desktopAppId":"notion.id","offline":true,"desktopS3Url":"https://desktop-release.notion-static.com","splunkConfig":{"host":"http-inputs-notion.splunkcloud.com","path":"services/collector/raw","token":"EA76605A-F565-4B17-A496-34435622A1EB","maxBatchCount":0,"port":443}}')
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

    void 0 !== __require && (__require.ab = "/native_modules/")
    __require(232)
})();
//# sourceMappingURL=preload.js.map
