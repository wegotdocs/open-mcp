export { inputParams } from "./schema/root.js";
export const toolName = `canceldeployment`;
export const toolDescription = `Cancel a deployment`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v12/deployments/{id}/cancel`;
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
        "id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
