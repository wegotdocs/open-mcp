export { inputParams } from "./schema/root.js";
export const toolName = `createrole`;
export const toolDescription = `Create a role`;
export const baseUrl = `https://api.sanity.io`;
export const path = `/vX/access/{resourceType}/{resourceId}/roles`;
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
    "query": [],
    "header": [],
    "path": [
        "resourceType",
        "resourceId"
    ],
    "cookie": [],
    "body": [
        "title",
        "name",
        "description",
        "appliesToUsers",
        "appliesToRobots",
        "permissions"
    ]
};
export const flatMap = {};
