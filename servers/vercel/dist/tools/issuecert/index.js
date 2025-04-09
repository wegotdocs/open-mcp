export { inputParams } from "./schema/root.js";
export const toolName = `issuecert`;
export const toolDescription = `Issue a new cert`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v7/certs`;
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
        "cns"
    ]
};
export const flatMap = {};
