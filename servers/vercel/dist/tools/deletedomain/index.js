export { inputParams } from "./schema/root.js";
export const toolName = `deletedomain`;
export const toolDescription = `Remove a domain by name`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v6/domains/{domain}`;
export const method = `delete`;
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
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "domain"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
