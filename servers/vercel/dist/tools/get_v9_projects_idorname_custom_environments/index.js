export { inputParams } from "./schema/root.js";
export const toolName = `get_v9_projects_idorname_custom_environments`;
export const toolDescription = `Retrieve custom environments`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v9/projects/{idOrName}/custom-environments`;
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
        "gitBranch",
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
