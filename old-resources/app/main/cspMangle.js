"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


const parser_1 = require("csp_evaluator/dist/parser");
function ensureCspFrameAncestorsParityWithNotionWebsite(args) {
    const parsed = new parser_1.CspParser(args.cspHeader);
    const values = parsed.csp.directives["frame-ancestors"];
    if (values && values.includes("https:")) {
        values.push(`${args.customProtocol}:`);
        return parsed.csp.convertToString().trim();
    }
    return args.cspHeader;
}

exports.ensureCspFrameAncestorsParityWithNotionWebsite = ensureCspFrameAncestorsParityWithNotionWebsite;
//# sourceMappingURL=cspMangle.js.map
