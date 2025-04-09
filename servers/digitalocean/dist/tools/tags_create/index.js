export { inputParams } from "./schema/root.js";
export const toolName = `tags_create`;
export const toolDescription = `Create a New Tag`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/tags`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "name",
        "resources"
    ]
};
export const flatMap = {};
