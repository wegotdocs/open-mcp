export { inputParams } from "./schema/root.js";
export const toolName = `getedgeconfigitem`;
export const toolDescription = `Get an Edge Config item`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/edge-config/{edgeConfigId}/item/{edgeConfigItemKey}`;
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
        "edgeConfigId",
        "edgeConfigItemKey"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
