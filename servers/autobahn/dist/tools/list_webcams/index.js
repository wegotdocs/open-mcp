export { inputParams } from "./schema/root.js";
export const toolName = `list_webcams`;
export const toolDescription = `Liste verfügbarer Webcams`;
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`;
export const path = `/{roadId}/services/webcam`;
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
