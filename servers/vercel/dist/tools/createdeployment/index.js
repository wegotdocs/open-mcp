export { inputParams } from "./schema/root.js";
export const toolName = `createdeployment`;
export const toolDescription = `Create a new deployment`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v13/deployments`;
export const method = `post`;
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
        "forceNew",
        "skipAutoDetectionConfirmation",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "customEnvironmentSlugOrId",
        "deploymentId",
        "files",
        "gitMetadata",
        "gitSource",
        "meta",
        "monorepoManager",
        "name",
        "project",
        "projectSettings",
        "target",
        "withLatestCommit"
    ]
};
export const flatMap = {};
