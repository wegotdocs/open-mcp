export { inputParams } from "./schema/root.js";
export const toolName = `createproject`;
export const toolDescription = `Create a new project`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v11/projects`;
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
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "buildCommand",
        "commandForIgnoringBuildStep",
        "devCommand",
        "environmentVariables",
        "framework",
        "gitRepository",
        "installCommand",
        "name",
        "outputDirectory",
        "publicSource",
        "rootDirectory",
        "serverlessFunctionRegion",
        "serverlessFunctionZeroConfigFailover",
        "oidcTokenConfig",
        "enableAffectedProjectsDeployments"
    ]
};
export const flatMap = {};
