export { inputParams } from "./schema/root.js";
export const toolName = `rerequestcheck`;
export const toolDescription = `Rerequest a check`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/deployments/{deploymentId}/checks/{checkId}/rerequest`;
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
        "deploymentId",
        "checkId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
