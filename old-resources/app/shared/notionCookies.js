"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thirdPartyServiceToCookiePrefixes = exports.thirdPartyServiceToTrackingType = exports.cookieToTrackingType = exports.notionCookies = exports.trackingTypes = void 0;
exports.trackingTypes = [
    "necessary",
    "preference",
    "performance",
    "targeting",
];
exports.notionCookies = [
    "notion_user_id",
    "notion_users",
    "notion_public_domain_user_id",
    "notion_browser_id",
    "notion_ghost_admin_user_id",
    "notion_ghost_preferred_role",
    "notion_cookie_consent",
    "notion_check_cookie_consent",
    "notion_locale",
    "notion_experiment_device_id",
    "csrf",
    "NEXT_LOCALE",
];
exports.cookieToTrackingType = {
    token_v2: "necessary",
    notion_user_id: "necessary",
    notion_users: "necessary",
    notion_public_domain_user_id: "performance",
    notion_browser_id: "performance",
    notion_ghost_admin_user_id: "necessary",
    notion_ghost_preferred_role: "necessary",
    notion_cookie_consent: "necessary",
    notion_check_cookie_consent: "necessary",
    notion_locale: "necessary",
    notion_experiment_device_id: "necessary",
    NEXT_LOCALE: "necessary",
    eap_csrf: "necessary",
    csrf: "necessary",
    ajs_anonymous_id: "performance",
    ajs_user_id: "performance",
    io: "necessary",
    _fbp: "targeting",
};
exports.thirdPartyServiceToTrackingType = {
    amplitude: "performance",
    segment: "targeting",
    intercom: "preference",
    statsig: "necessary",
    clearbit: "targeting",
    loggly: "necessary",
    mutiny: "performance",
    google_tag_manager: "targeting",
    marketo: "targeting",
};
exports.thirdPartyServiceToCookiePrefixes = {
    amplitude: ["amp_", "amplitude_"],
    segment: ["ajs_"],
    intercom: ["intercom"],
    statsig: ["STATSIG_"],
    clearbit: ["cb_"],
    loggly: ["loggly"],
    mutiny: ["mutiny", "_mutiny"],
    google_tag_manager: ["_gcl_"],
    marketo: ["_mkto_"],
};
//# sourceMappingURL=notionCookies.js.map