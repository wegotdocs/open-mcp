export { inputParams } from "./schema/root.js";
export const toolName = `getpermissions`;
export const toolDescription = `Get Permissions.`;
export const baseUrl = `https://api.sanity.io`;
export const path = `/vX/access/{resourceType}/{resourceId}/permissions`;
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
    "query": [
        "nextCursor",
        "limit"
    ],
    "header": [],
    "path": [
        "resourceType",
        "resourceId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
