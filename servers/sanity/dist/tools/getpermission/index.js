export { inputParams } from "./schema/root.js";
export const toolName = `getpermission`;
export const toolDescription = `Get a permission`;
export const baseUrl = `https://api.sanity.io`;
export const path = `/vX/access/{resourceType}/{resourceId}/permissions/{permissionName}`;
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
    "query": [],
    "header": [],
    "path": [
        "resourceType",
        "resourceId",
        "permissionName"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
