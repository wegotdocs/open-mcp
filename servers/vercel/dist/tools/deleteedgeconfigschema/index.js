export { inputParams } from "./schema/root.js";
export const toolName = `deleteedgeconfigschema`;
export const toolDescription = `Delete an Edge Config's schema`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/edge-config/{edgeConfigId}/schema`;
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
    "body": []
};
export const flatMap = {};
