"use strict";

const __createBinding = (this && this.__createBinding) || (Object.create ? (function (target, source, key, bindName) {
    if (bindName === undefined) bindName = key;

    Object.defineProperty(target, bindName, {
        enumerable: true,
        get: function () {
            return source[key];
        }
    });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
const __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (target, value) {
    Object.defineProperty(target, "default", {enumerable: true, value: value});
}) : function (target, value) {
    target["default"] = value;
});
const __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;

    const result = {};
    if (mod != null) {
        for (const key in mod) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(mod, key)) {
                __createBinding(result, mod, key);
            }
        }
    }
    __setModuleDefault(result, mod);
    return result;
};
const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};

Object.defineProperty(exports, "__esModule", {value: true});


const __electron = require("electron");
require("isomorphic-fetch");
require("./crashReporter");
const __autoUpdater = require("./autoUpdater");
const __systemMenu = require("./systemMenu");
require("./security");
const __schemeHandler = require("./schemeHandler");
const __createWindow = require("./createWindow");
const __createPopup = require("./createPopup");
const __createGoogleDrivePicker = require("./createGoogleDrivePicker");
const __config = __importDefault(require("../config"));
const __notionIpc = __importStar(require("../helpers/notionIpc"));
const __loggly = require("../helpers/loggly");
const __assetCache = require("./assetCache");
const __schemeHelpers = __importStar(require("../shared/schemeHelpers"));
const __urlHelpers = __importStar(require("../shared/urlHelpers"));
const __fs = __importDefault(require("fs"));
const __localizationHelper = require("../helpers/localizationHelper");
const __notion_intl = require("notion-intl");
const __path = __importDefault(require("path"));
const __child_process = require("child_process");
const __electron_log = __importDefault(require("electron-log"));
const __get_port = __importDefault(require("get-port"));
const __crypto = __importDefault(require("crypto"));
const urlHelpers_1 = require("../helpers/urlHelpers");
const logglyHelpers_1 = require("../shared/logglyHelpers");
const Sentry = __importStar(require("./sentry"));
const desktopLocaleHelpers_1 = require("../shared/desktopLocaleHelpers");


__electron.dialog.showErrorBox = function (title, content) {}

function makeRelativeUrl(url) {
    try {
        new URL(url);
    } catch (error) {
        return;
    }
    const fixedUrl = __schemeHelpers.fixSchemeUrl({
        url: url,
        protocol: __config.default.protocol,
        baseUrl: __config.default.domainBaseUrl,
    });
    const httpUrl = __schemeHelpers.getHttpUrl({
        schemeUrl: fixedUrl,
        baseUrl: __config.default.domainBaseUrl,
    });
    const relativeUrl = __urlHelpers.removeBaseUrl(httpUrl);
    return relativeUrl;
}

function handleActivate(relativeUrl) {
    const allWindows = __electron.BrowserWindow.getAllWindows();
    const {isLocalhost, env} = __config.default;
    const isLocal = env === "local" || isLocalhost;
    if (allWindows.length === 1 && allWindows[0].isVisible()) {
        const win = allWindows[0];
        if (relativeUrl) {
            void win.webContents.loadURL(urlHelpers_1.getIndexUrl(relativeUrl));
        }
        win.focus();
    } else {
        const win = __createWindow.createWindow(relativeUrl, {isLocalhost: isLocal});
        if (isLocal) {
            win.minimize();
        } else {
            win.focus();
        }
    }
}

async function handleReady() {
    const locale = desktopLocaleHelpers_1.externalLocaleToNotionLocale(__electron.app.getLocale(), __config.default.env === "production");
    const intl = __localizationHelper.createIntlShape(locale);
    const messages = __notion_intl.defineMessages({
        invalidInstallMessage: {
            id: "desktopInstaller.invalidInstallDialog.title",
            defaultMessage: "Invalid Install",
        },
        invalidInstallDetail: {
            id: "desktopInstaller.invalidInstallDialog.message",
            defaultMessage: "Your Notion application is not installed properly. You need to move your Notion app into your Applications folder.",
        },
        okButton: {
            id: "desktopInstaller.invalidInstallDialog.okButton.label",
            defaultMessage: "OK",
        },
    });
    if (isOpenedFromNonWritableDirectory()) {
        await __electron.dialog.showMessageBox({
            type: "error",
            buttons: [intl.formatMessage(messages.okButton)],
            message: intl.formatMessage(messages.invalidInstallMessage),
            detail: [intl.formatMessage(messages.invalidInstallDetail)].join("\n"),
        });
        const helpUrl = locale === "ko-KR"
            ? "https://www.notion.so/fe244a58c73b4174a89effb4828b86c5"
            : "https://www.notion.so/b2be23041a0b4b948aa675184abc9165";
        await __electron.shell.openExternal(helpUrl);
        __electron.app.quit();
        return;
    }
    let relativeUrl;
    if (process.platform === "win32") {
        const {argv} = process;
        const url = argv.find(arg => arg.startsWith(`${__config.default.protocol}:`));
        if (url) {
            relativeUrl = makeRelativeUrl(url);
        }
    }
    void startup(relativeUrl);
}

let serverProcess;
let serverProcessPort;
const authToken = __crypto.default.randomBytes(20).toString("hex");

async function assignServerProcessPort() {
    serverProcessPort = await __get_port.default({host: "127.0.0.1"});
}

async function startupServer() {
    const userDataPath = __electron.app.getPath("userData");
    const executorPath = __path.default.join(__dirname, "sqlite", "SqliteServer.js");
    await assignServerProcessPort();
    if (!serverProcessPort) {
        throw new Error("No process port assigned.");
    }
    const process = __child_process.fork(executorPath, [userDataPath, serverProcessPort.toString(), authToken], {
        stdio: ["pipe", "inherit", "pipe", "ipc"],
    });
    process.on("error", error => {
        Sentry.capture(error);
    });
    if (process.stderr) {
        process.stderr.on("data", data => {
            Sentry.captureMessage(data.toString());
        });
    }
    if (process.stdout) {
        process.stdout.on("data", data => {
            Sentry.captureMessage(data.toString());
        });
    }
    return process;
}

async function startup(relativeUrl) {
    Sentry.initialize(__electron.app);
    __autoUpdater.initializeAutoUpdater();
    const locale = desktopLocaleHelpers_1.externalLocaleToNotionLocale(__electron.app.getLocale(), __config.default.env === "production");
    __systemMenu.setupSystemMenu(locale);
    await __schemeHandler.migrateCookies();
    await __assetCache.assetCache.initialize();
    if (!serverProcess) {
        serverProcess = await startupServer();
    }
    __schemeHandler.registerUrlSchemeProxy();
    handleActivate(relativeUrl);
    await __schemeHandler.wipeTransientCsrfCookie();
}

__electron.app.on("ready", handleReady);
__electron.app.setAppUserModelId(__config.default.desktopAppId);
__electron.app.setAsDefaultProtocolClient(__config.default.protocol);
__electron.app.on("open-url", (event, url) => {
    event.preventDefault();
    const relativeUrl = makeRelativeUrl(url);
    if (__electron.app.isReady()) {
        const focusedWindow = __electron.BrowserWindow.getFocusedWindow();
        const allWindows = __electron.BrowserWindow.getAllWindows();
        const targetWindow = (() => {
            if (focusedWindow && focusedWindow.isVisible()) {
                return focusedWindow;
            }
            if (allWindows.length > 0) {
                return allWindows[0];
            }
        })();
        if (targetWindow && relativeUrl) {
            __notionIpc.sendMainToNotionWindow(targetWindow, "notion:navigate-to-url", relativeUrl);
            targetWindow.focus();
        } else {
            const win = __createWindow.createWindow(relativeUrl);
            win.focus();
        }
    } else {
        __electron.app.removeListener("ready", handleReady);
        __electron.app.on("ready", async () => startup(relativeUrl));
    }
});
if (__electron.app.requestSingleInstanceLock()) {
    __electron.app.on("second-instance", (_event, argv, workingDirectory) => {
        if (process.platform === "win32") {
            const url = argv.find(arg => arg.startsWith(`${__config.default.protocol}:`));
            const urlPath = url && makeRelativeUrl(url);
            handleActivate(urlPath);
        }
    });
} else {
    __electron.app.quit();
}
__electron.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        __electron.app.quit();
    }
});
__electron.app.on("before-quit", () => {
    __electron_log.default.info("Quitting...");
    if (serverProcess) {
        __electron_log.default.info("Killing child process");
        serverProcess.kill("SIGTERM");
        serverProcess = undefined;
    }
});
__electron.app.on("activate", (_event, hasVisibleWindows) => {
    if (!hasVisibleWindows) {
        __createWindow.createWindow();
    }
});
let refreshInterval;
__electron.app.on("browser-window-blur", () => {
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        if (!__electron.BrowserWindow.getFocusedWindow()) {
            if (Math.random() <= 0.0005) {
                __notionIpc.sendMainToNotion("notion:app-update-install");
            } else {
                __notionIpc.sendMainToNotion("notion:windows-backgrounded");
            }
        }
    }, 10 * 1000);
});
__electron.app.on("browser-window-focus", () => {
    clearInterval(refreshInterval);
});

__notionIpc.receiveMainFromRenderer.addListener("notion:create-window", (_event, urlPath) => {
    __createWindow.createWindow(urlPath);
});
__notionIpc.receiveMainFromRenderer.addListener("notion:create-popup", (_event, args) => {
    __createPopup.createPopup(args);
});
__notionIpc.receiveMainFromRenderer.addListener("notion:create-google-drive-picker", (_event, args) => {
    __createGoogleDrivePicker.createGoogleDrivePicker(args);
});
__notionIpc.addMainHandler("notion:get-sqlite-meta", _event => {
    if (!serverProcessPort) {
        throw new Error("Port not yet assigned, should not be possible.");
    }
    return {value: {serverProcessPort, authToken}};
});
__notionIpc.receiveMainFromRenderer.addListener("notion:broadcast", (_event, args) => {
    __notionIpc.sendMainToNotion("notion:broadcast", args);
});


process.on("uncaughtException", error => {
    Sentry.capture(error);
    void __loggly.loggly.log({
        level: "error",
        from: "main",
        type: "uncaughtException",
        error: logglyHelpers_1.convertErrorToLog(error),
    });
});
process.on("unhandledRejection", error => {
    Sentry.capture(error);
    void __loggly.loggly.log({
        level: "error",
        from: "main",
        type: "unhandledRejection",
        error: logglyHelpers_1.convertErrorToLog(error),
    });
});

function isOpenedFromNonWritableDirectory() {
    if (process.platform === "darwin") {
        try {
            __fs.default.accessSync(__electron.app.getPath("exe"), __fs.default.constants.W_OK);
            return false;
        } catch (error) {
            return true;
        }
    }
    return false;
}

//# sourceMappingURL=main.js.map
