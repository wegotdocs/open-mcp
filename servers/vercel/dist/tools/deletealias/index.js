export { inputParams } from "./schema/root.js";
export const toolName = `deletealias`;
export const toolDescription = `Delete an Alias`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/aliases/{aliasId}`;
export const method = `delete`;
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
        "aliasId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
