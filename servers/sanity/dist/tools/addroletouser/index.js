export { inputParams } from "./schema/root.js";
export const toolName = `addroletouser`;
export const toolDescription = `Add a role to a user.`;
export const baseUrl = `https://api.sanity.io`;
export const path = `/vX/access/{resourceType}/{resourceId}/users/{sanityUserId}/roles/{roleName}`;
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
        "sanityUserId",
        "roleName"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
