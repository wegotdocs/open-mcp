export { inputParams } from "./schema/root.js";
export const toolName = `updaterole`;
export const toolDescription = `Update a role`;
export const baseUrl = `https://api.sanity.io`;
export const path = `/vX/access/{resourceType}/{resourceId}/roles/{roleName}`;
export const method = `put`;
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
        "resourceId",
        "roleName"
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
