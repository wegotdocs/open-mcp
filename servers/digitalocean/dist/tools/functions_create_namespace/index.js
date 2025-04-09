export { inputParams } from "./schema/root.js";
export const toolName = `functions_create_namespace`;
export const toolDescription = `Create Namespace`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/functions/namespaces`;
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
        "region",
        "label"
    ]
};
export const flatMap = {};
