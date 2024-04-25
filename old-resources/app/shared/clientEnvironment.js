"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


exports.ENVIRONMENT_NAMES = [
    "local",
    "staging",
    "development",
    "production",
];

function isEnvironmentName(s) {
    return typeof s === "string" && exports.ENVIRONMENT_NAMES.includes(s);
}

exports.isEnvironmentName = isEnvironmentName;
//# sourceMappingURL=clientEnvironment.js.map
