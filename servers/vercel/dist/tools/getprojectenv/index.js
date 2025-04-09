export { inputParams } from "./schema/root.js";
export const toolName = `getprojectenv`;
export const toolDescription = `Retrieve the decrypted value of an environment variable of a project by id`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/projects/{idOrName}/env/{id}`;
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
        "id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
