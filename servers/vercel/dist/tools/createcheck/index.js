export { inputParams } from "./schema/root.js";
export const toolName = `createcheck`;
export const toolDescription = `Creates a new Check`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/deployments/{deploymentId}/checks`;
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
        "deploymentId"
    ],
    "cookie": [],
    "body": [
        "name",
        "path",
        "blocking",
        "detailsUrl",
        "externalId",
        "rerequestable"
    ]
};
export const flatMap = {};
