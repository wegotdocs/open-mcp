export { inputParams } from "./schema/root.js";
export const toolName = `getuserpermissions`;
export const toolDescription = `List permissions for a user`;
export const baseUrl = `https://api.sanity.io`;
export const path = `/vX/access/{resourceType}/{resourceId}/users/{sanityUserId}/permissions`;
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
        "sanityUserId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
