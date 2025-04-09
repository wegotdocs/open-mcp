export { inputParams } from "./schema/root.js";
export const toolName = `status`;
export const toolDescription = `Get status of Remote Caching for this principal`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v8/artifacts/status`;
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
