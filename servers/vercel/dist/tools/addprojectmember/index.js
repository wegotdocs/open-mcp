export { inputParams } from "./schema/root.js";
export const toolName = `addprojectmember`;
export const toolDescription = `Adds a new member to a project.`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/projects/{idOrName}/members`;
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
        "uid",
        "username",
        "email",
        "role"
    ]
};
export const flatMap = {};
