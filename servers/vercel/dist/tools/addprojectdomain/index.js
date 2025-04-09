export { inputParams } from "./schema/root.js";
export const toolName = `addprojectdomain`;
export const toolDescription = `Add a domain to a project`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v10/projects/{idOrName}/domains`;
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
        "name",
        "gitBranch",
        "customEnvironmentId",
        "redirect",
        "redirectStatusCode"
    ]
};
export const flatMap = {};
