export { inputParams } from "./schema/root.js";
export const toolName = `deleteedgeconfigtokens`;
export const toolDescription = `Delete one or more Edge Config tokens`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/edge-config/{edgeConfigId}/tokens`;
export const method = `delete`;
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
        "edgeConfigId"
    ],
    "cookie": [],
    "body": [
        "tokens"
    ]
};
export const flatMap = {};
