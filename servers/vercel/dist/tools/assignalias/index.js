export { inputParams } from "./schema/root.js";
export const toolName = `assignalias`;
export const toolDescription = `Assign an Alias`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/deployments/{id}/aliases`;
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
        "id"
    ],
    "cookie": [],
    "body": [
        "alias",
        "redirect"
    ]
};
export const flatMap = {};
