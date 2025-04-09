export { inputParams } from "./schema/root.js";
export const toolName = `acceptprojecttransferrequest`;
export const toolDescription = `Accept project transfer request`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/projects/transfer-request/{code}`;
export const method = `put`;
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
        "code"
    ],
    "cookie": [],
    "body": [
        "newProjectName",
        "paidFeatures"
    ]
};
export const flatMap = {};
