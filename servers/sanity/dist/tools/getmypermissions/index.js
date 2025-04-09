export { inputParams } from "./schema/root.js";
export const toolName = `getmypermissions`;
export const toolDescription = `Get current user permissions.`;
export const baseUrl = `https://api.sanity.io`;
export const path = `/vX/access/permissions/me`;
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
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
