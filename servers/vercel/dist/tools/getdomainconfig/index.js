export { inputParams } from "./schema/root.js";
export const toolName = `getdomainconfig`;
export const toolDescription = `Get a Domain's configuration`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v6/domains/{domain}/config`;
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
        "strict",
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
