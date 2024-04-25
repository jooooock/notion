"use strict";

const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};

Object.defineProperty(exports, "__esModule", {value: true});


const lodash_1 = __importDefault(require("lodash"));

function uniqDeep(items) {
    return lodash_1.default.uniqWith(items, lodash_1.default.isEqual);
}

exports.uniqDeep = uniqDeep;

function uniq(items) {
    return Array.from(new Set(items));
}

exports.uniq = uniq;
const isNotDefined = function (value) {
    return value === null || value === undefined;
};
exports.isNotDefined = isNotDefined;

function defaultValue(optional, value) {
    if (exports.isNotDefined(optional)) {
        return value;
    } else {
        return optional;
    }
}

exports.defaultValue = defaultValue;

function nullify(obj) {
    const result = obj;
    for (const key in result) {
        if (result[key] === undefined) {
            result[key] = null;
        }
    }
    return result;
}

exports.nullify = nullify;

function keys(obj) {
    return Object.keys(obj);
}

exports.keys = keys;

function unionToArray(obj) {
    return Object.keys(obj);
}

exports.unionToArray = unionToArray;

function values(obj) {
    return keys(obj).map(key => obj[key]);
}

exports.values = values;
const mapValues = (obj, fn) => {
    return lodash_1.default.mapValues(obj, fn);
};
exports.mapValues = mapValues;
const objectFromEntries = (entries) => Object.assign({}, ...entries.map(([key, value]) => ({[key]: value})));
exports.objectFromEntries = objectFromEntries;

function pick(obj, keys) {
    const result = lodash_1.default.pick(obj, keys);
    return result;
}

exports.pick = pick;

function omit(obj, keys) {
    return lodash_1.default.omit(obj, keys);
}

exports.omit = omit;

function ignoreFirst(fn) {
    let called = false;
    return (...args) => {
        if (called) {
            return fn(...args);
        } else {
            called = true;
        }
    };
}

exports.ignoreFirst = ignoreFirst;
const popN = function (array, num) {
    const popped = [];
    while (array.length > 0 && popped.length < num) {
        const val = array.pop();
        if (val) {
            popped.push(val);
        }
    }
    return popped;
};
exports.popN = popN;
const shiftN = function (array, num) {
    const shifted = [];
    while (array.length > 0 && shifted.length < num) {
        const val = array.shift();
        if (val) {
            shifted.push(val);
        }
    }
    return shifted;
};
exports.shiftN = shiftN;

function filterOut(array, isRemoved) {
    return array.filter((item) => !isRemoved(item));
}

exports.filterOut = filterOut;
const timeScale = 1;
exports.SecondMs = 1000 * timeScale;
exports.MinuteMs = 60 * exports.SecondMs;
exports.HourMs = 60 * exports.MinuteMs;
exports.DayMs = 24 * exports.HourMs;
exports.SecondS = 1 * timeScale;
exports.MinuteS = 60 * exports.SecondS;
exports.HourS = 60 * exports.MinuteS;
exports.DayS = 24 * exports.HourS;

function roundDownToNearestMinute(timeMs) {
    return Math.round(Math.floor(timeMs / exports.MinuteMs) * exports.MinuteMs);
}

exports.roundDownToNearestMinute = roundDownToNearestMinute;
exports.KiloByte = 1024;

function trimQuery(query) {
    const lines = query.split("\n");
    return lodash_1.default.map(lines, (line) => {
        return line.trim();
    }).join("\n");
}

exports.trimQuery = trimQuery;

function regexpMatchAll(givenRegexp, text) {
    let regexp = givenRegexp;
    if (regexp.sticky || !regexp.global) {
        const newFlags = lodash_1.default(regexp.flags.split(""))
            .pull("y", "g")
            .concat("g")
            .value()
            .join("");
        regexp = new RegExp(givenRegexp.source, newFlags);
    }
    const initialLastIndex = regexp.lastIndex;
    const result = [];
    let match = null;
    while ((match = regexp.exec(text)) !== null) {
        result.push(match);
    }
    regexp.lastIndex = initialLastIndex;
    return result;
}

exports.regexpMatchAll = regexpMatchAll;

function isNumber(value) {
    return lodash_1.default.isFinite(value);
}

exports.isNumber = isNumber;

function groupBy(array, fn) {
    const grouped = new Map();
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        const key = fn(value, i);
        let group = grouped.get(key);
        if (!group) {
            group = [];
            grouped.set(key, group);
        }
        group.push(value);
    }
    return grouped;
}

exports.groupBy = groupBy;

function safeJSONParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return undefined;
    }
}

exports.safeJSONParse = safeJSONParse;

function diff(expected, actual) {
    const normalize = (value) => {
        if (value === NaN || value === null) {
            return undefined;
        }
        if (lodash_1.default.isFinite(value)) {
            return Math.round(value * 10000);
        }
        return value;
    };
    const omitValueFuncion = (x) => {
        if (lodash_1.default.isNumber(x)) {
            return !lodash_1.default.isFinite(x) || lodash_1.default.isNaN(x);
        }
        return lodash_1.default.isNil(x);
    };
    const recursiveNormalize = (obj) => {
        if (lodash_1.default.isArray(obj)) {
            return obj.map(innerObj => recursiveNormalize(innerObj));
        } else if (lodash_1.default.isObject(obj)) {
            const beforeOmit = exports.mapValues(obj, val => recursiveNormalize(val));
            const afterOmit = lodash_1.default.omitBy(beforeOmit, omitValueFuncion);
            return afterOmit;
        } else {
            return normalize(obj);
        }
    };
    const source = recursiveNormalize(expected);
    const target = recursiveNormalize(actual);
    if (!lodash_1.default.isEqual(source, target)) {
        return true;
    }
    return false;
}

exports.diff = diff;
//# sourceMappingURL=utils.js.map
