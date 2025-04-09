export { inputParams } from "./schema/root.js";
export const toolName = `reservedipv6_list`;
export const toolDescription = `[Public Preview] List All Reserved IPv6s`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/reserved_ipv6`;
export const method = `get`;
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
    "query": [
        "per_page",
        "page"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
