export { inputParams } from "./schema/root.js";
export const toolName = `createprojecttransferrequest`;
export const toolDescription = `Create project transfer request`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/projects/{idOrName}/transfer-request`;
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
    "path": [
        "idOrName"
    ],
    "cookie": [],
    "body": [
        "callbackUrl",
        "callbackSecret"
    ]
};
export const flatMap = {};
