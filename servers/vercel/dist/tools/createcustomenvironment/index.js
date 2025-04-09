export { inputParams } from "./schema/root.js";
export const toolName = `createcustomenvironment`;
export const toolDescription = `Create a custom environment for the current project.`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v9/projects/{idOrName}/custom-environments`;
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
    "path": [
        "idOrName"
    ],
    "cookie": [],
    "body": [
        "b_slug",
        "description",
        "branchMatcher",
        "copyEnvVarsFrom"
    ]
};
export const flatMap = {
    "b_slug": "slug"
};
