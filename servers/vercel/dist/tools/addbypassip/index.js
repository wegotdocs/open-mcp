export { inputParams } from "./schema/root.js";
export const toolName = `addbypassip`;
export const toolDescription = `Create System Bypass Rule`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/security/firewall/bypass`;
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
    "query": [
        "projectId",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "domain",
        "projectScope",
        "sourceIp",
        "allSources",
        "ttl",
        "note"
    ]
};
export const flatMap = {};
