export { inputParams } from "./schema/root.js";
export const toolName = `createpromptrender`;
export const toolDescription = `Prompts Render`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/prompts/{promptId}/render`;
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
    "path": [
        "promptId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
