"use strict";

const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });


const electron_1 = require("electron");
const config_1 = __importDefault(require("../config"));

let simulateAirplaneMode = false;
function shouldShowDevOnlyTools() {
    return config_1.default.env === "local" || config_1.default.env === "development";
}
function getDevOnlyViewMenuItems() {
    if (!shouldShowDevOnlyTools()) {
        return [];
    }
    return [
        {
            label: "Simulate airplane mode",
            type: "checkbox",
            click(menuItem) {
                void setSimulateAirplaneMode(menuItem.checked);
            },
        },
    ];
}

exports.getDevOnlyViewMenuItems = getDevOnlyViewMenuItems;

async function setSimulateAirplaneMode(newValue) {
    if (!shouldShowDevOnlyTools()) {
        throw new Error("Dev tools are disabled, this should never be called!");
    }
    if (simulateAirplaneMode === newValue) {
        return;
    }
    simulateAirplaneMode = newValue;
    for (const wc of electron_1.webContents.getAllWebContents()) {
        await setOfflineMode(wc, simulateAirplaneMode);
    }
    if (simulateAirplaneMode) {
        electron_1.app.addListener("web-contents-created", enableOfflineMode);
    }
    else {
        electron_1.app.removeListener("web-contents-created", enableOfflineMode);
    }
}
function shouldSimulateAirplaneMode() {
    return simulateAirplaneMode;
}

exports.shouldSimulateAirplaneMode = shouldSimulateAirplaneMode;

function enableOfflineMode(event, webContents) {
    void setOfflineMode(webContents, true);
}
async function setOfflineMode(webContents, offline) {
    const dbg = webContents.debugger;
    if (!dbg.isAttached()) {
        dbg.attach();
    }
    await dbg.sendCommand("Network.enable");
    await dbg.sendCommand("Network.emulateNetworkConditions", {
        offline,
        latency: 0,
        downloadThroughput: -1,
        uploadThroughput: -1,
    });
}
//# sourceMappingURL=devOnlyTools.js.map
