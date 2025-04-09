export { inputParams } from "./schema/root.js";
export const toolName = `createedgeconfig`;
export const toolDescription = `Create an Edge Config`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/edge-config`;
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
        "b_slug",
        "items"
    ]
};
export const flatMap = {
    "b_slug": "slug"
};
