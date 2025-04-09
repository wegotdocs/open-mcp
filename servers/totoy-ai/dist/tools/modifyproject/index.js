export { inputParams } from "./schema/root.js";
export const toolName = `modifyproject`;
export const toolDescription = `Modifies a Project.`;
export const baseUrl = `https://api.totoy.ai/v1`;
export const path = `/projects/{project_id}`;
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
    "query": [],
    "header": [],
    "path": [
        "project_id"
    ],
    "cookie": [],
    "body": [
        "name"
    ]
};
export const flatMap = {};
