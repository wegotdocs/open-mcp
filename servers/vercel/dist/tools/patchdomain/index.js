export { inputParams } from "./schema/root.js";
export const toolName = `patchdomain`;
export const toolDescription = `Update or move apex domain`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v3/domains/{domain}`;
export const method = `patch`;
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
