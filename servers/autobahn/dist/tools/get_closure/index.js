export { inputParams } from "./schema/root.js";
export const toolName = `get_closure`;
export const toolDescription = `Details zu einer Sperrung`;
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`;
export const path = `/details/closure/{closureId}`;
export const method = `get`;
export const security = [];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "closureId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
