export { inputParams } from "./schema/root.js";
export const toolName = `cdn_create_endpoint`;
export const toolDescription = `Create a New CDN Endpoint`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/cdn/endpoints`;
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
        "id",
        "origin",
        "endpoint",
        "ttl",
        "certificate_id",
        "custom_domain",
        "created_at"
    ]
};
export const flatMap = {};
