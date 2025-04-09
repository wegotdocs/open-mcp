export { inputParams } from "./schema/root.js";
export const toolName = `createfeedback`;
export const toolDescription = `Create new feedback`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/feedback`;
export const method = `post`;
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
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "trace_id",
        "value",
        "weight",
        "metadata"
    ]
};
export const flatMap = {};
