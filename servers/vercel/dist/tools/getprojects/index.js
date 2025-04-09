export { inputParams } from "./schema/root.js";
export const toolName = `getprojects`;
export const toolDescription = `Retrieve a list of projects`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v10/projects`;
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
        "from",
        "gitForkProtection",
        "limit",
        "search",
        "repo",
        "repoId",
        "repoUrl",
        "excludeRepos",
        "edgeConfigId",
        "edgeConfigTokenId",
        "deprecated",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
