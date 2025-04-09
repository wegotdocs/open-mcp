export { inputParams } from "./schema/root.js";
export const toolName = `getcustomenvironment`;
export const toolDescription = `Retrieve a custom environment`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}`;
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
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "idOrName",
        "environmentSlugOrId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
