export { inputParams } from "./schema/root.js";
export const toolName = `createsecret`;
export const toolDescription = `Create a new secret`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/secrets/{name}`;
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
        "name",
        "value",
        "decryptable"
    ]
};
export const flatMap = {};
