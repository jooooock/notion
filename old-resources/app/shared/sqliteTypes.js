"use strict";

Object.defineProperty(exports, "__esModule", {value: true});


function isSqliteError(result) {
    return (result.type === "Error" ||
        result.type === "ErrorBefore" ||
        result.type === "PreconditionFailed" ||
        result.type === "OutOfSpace");
}

exports.isSqliteError = isSqliteError;

function makeSqliteBatch(batch) {
    return batch;
}

exports.makeSqliteBatch = makeSqliteBatch;
//# sourceMappingURL=sqliteTypes.js.map
