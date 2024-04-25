"use strict";

Object.defineProperty(exports, "__esModule", {value: true});


class SystemTimeSource {
    setTimeout(callback, ms, ...args) {
        setTimeout(callback, ms, ...args);
    }
}

exports.SYSTEM_TIME_SOURCE = new SystemTimeSource();
//# sourceMappingURL=TimeSource.js.map
