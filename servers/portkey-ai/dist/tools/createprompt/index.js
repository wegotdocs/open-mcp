export { inputParams } from "./schema/root.js";
export const toolName = `createprompt`;
export const toolDescription = `Create a new prompt`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/prompts`;
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
        "name",
        "collection_id",
        "string",
        "parameters",
        "functions",
        "tools",
        "tool_choice",
        "model",
        "virtual_key",
        "version_description",
        "template_metadata"
    ]
};
export const flatMap = {};
