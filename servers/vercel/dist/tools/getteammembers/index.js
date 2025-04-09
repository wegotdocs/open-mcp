export { inputParams } from "./schema/root.js";
export const toolName = `getteammembers`;
export const toolDescription = `List team members`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v3/teams/{teamId}/members`;
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
        "until",
        "search",
        "role",
        "excludeProject",
        "eligibleMembersForProjectId"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
