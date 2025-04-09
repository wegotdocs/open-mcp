export { inputParams } from "./schema/root.js";
export const toolName = `createortransferdomain`;
export const toolDescription = `Register or transfer-in a new Domain`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v5/domains`;
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
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "method"
    ]
};
export const flatMap = {};
