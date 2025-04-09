export { inputParams } from "./schema/root.js";
export const toolName = `uploadfile`;
export const toolDescription = `Upload Deployment Files`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/files`;
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
    "header": [
        "Content-Length",
        "x-vercel-digest",
        "x-now-digest",
        "x-now-size"
    ],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
