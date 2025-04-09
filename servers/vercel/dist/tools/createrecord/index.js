export { inputParams } from "./schema/root.js";
export const toolName = `createrecord`;
export const toolDescription = `Create a DNS record`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/domains/{domain}/records`;
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
        "domain"
    ],
    "cookie": [],
    "body": [
        "type"
    ]
};
export const flatMap = {};
