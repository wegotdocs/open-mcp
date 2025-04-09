export { inputParams } from "./schema/root.js";
export const toolName = `getprojectdomains`;
export const toolDescription = `Retrieve project domains by project by id or name`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v9/projects/{idOrName}/domains`;
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
        "production",
        "target",
        "customEnvironmentId",
        "gitBranch",
        "redirects",
        "redirect",
        "verified",
        "limit",
        "since",
        "until",
        "order",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "idOrName"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
