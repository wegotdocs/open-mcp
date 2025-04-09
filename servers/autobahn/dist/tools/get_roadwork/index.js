export { inputParams } from "./schema/root.js";
export const toolName = `get_roadwork`;
export const toolDescription = `Details einer Baustelle`;
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`;
export const path = `/details/roadworks/{roadworkId}`;
export const method = `get`;
export const security = [];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "roadworkId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
