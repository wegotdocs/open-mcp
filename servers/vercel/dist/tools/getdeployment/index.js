export { inputParams } from "./schema/root.js";
export const toolName = `getdeployment`;
export const toolDescription = `Get a deployment by ID or URL`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v13/deployments/{idOrUrl}`;
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
        "withGitRepoInfo",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "idOrUrl"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
