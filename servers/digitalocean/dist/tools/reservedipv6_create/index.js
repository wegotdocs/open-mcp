export { inputParams } from "./schema/root.js";
export const toolName = `reservedipv6_create`;
export const toolDescription = `[Public Preview] Create a New Reserved IPv6`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/reserved_ipv6`;
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
        "region_slug"
    ]
};
export const flatMap = {};
