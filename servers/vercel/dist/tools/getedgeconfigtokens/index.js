export { inputParams } from "./schema/root.js";
export const toolName = `getedgeconfigtokens`;
export const toolDescription = `Get all tokens of an Edge Config`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/edge-config/{edgeConfigId}/tokens`;
export const method = `get`;
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
    "body": []
};
export const flatMap = {};
