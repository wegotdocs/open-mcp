export { inputParams } from "./schema/root.js";
export const toolName = `listlabels`;
export const toolDescription = `List labels`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/labels`;
export const method = `get`;
export const security = [
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    }
];
export const keys = {
    "query": [
        "organisation_id",
        "workspace_id",
        "search",
        "current_page",
        "page_size"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
