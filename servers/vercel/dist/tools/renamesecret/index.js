export { inputParams } from "./schema/root.js";
export const toolName = `renamesecret`;
export const toolDescription = `Change secret name`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/secrets/{name}`;
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
        "name"
    ],
    "cookie": [],
    "body": [
        "b_name"
    ]
};
export const flatMap = {
    "b_name": "name"
};
