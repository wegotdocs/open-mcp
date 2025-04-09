export { inputParams } from "./schema/root.js";
export const toolName = `updateprojectdatacache`;
export const toolDescription = `Update the data cache feature`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/data-cache/projects/{projectId}`;
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
        "projectId"
    ],
    "cookie": [],
    "body": [
        "disabled"
    ]
};
export const flatMap = {};
