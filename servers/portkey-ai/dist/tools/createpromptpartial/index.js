export { inputParams } from "./schema/root.js";
export const toolName = `createpromptpartial`;
export const toolDescription = `Create a new prompt partial`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/prompts/partials`;
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
        "workspace_id",
        "name",
        "string",
        "version_description"
    ]
};
export const flatMap = {};
