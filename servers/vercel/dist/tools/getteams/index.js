export { inputParams } from "./schema/root.js";
export const toolName = `getteams`;
export const toolDescription = `List all teams`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/teams`;
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
        "limit",
        "since",
        "until"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
