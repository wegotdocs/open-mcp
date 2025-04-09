export { inputParams } from "./schema/root.js";
export const toolName = `reservedips_list`;
export const toolDescription = `List All Reserved IPs`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/reserved_ips`;
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
