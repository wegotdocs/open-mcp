export { inputParams } from "./schema/root.js";
export const toolName = `createprojectenv`;
export const toolDescription = `Create one or more environment variables`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v10/projects/{idOrName}/env`;
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
        "upsert",
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
