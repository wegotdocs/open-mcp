export { inputParams } from "./schema/root.js";
export const toolName = `list_warnings`;
export const toolDescription = `Liste aktueller Verkehrsmeldungen`;
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`;
export const path = `/{roadId}/services/warning`;
export const method = `get`;
export const security = [];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "roadId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
