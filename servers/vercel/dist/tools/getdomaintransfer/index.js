export { inputParams } from "./schema/root.js";
export const toolName = `getdomaintransfer`;
export const toolDescription = `Get domain transfer info.`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/domains/{domain}/registry`;
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
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
