export { inputParams } from "./schema/root.js";
export const toolName = `projects_assign_resources_default`;
export const toolDescription = `Assign Resources to Default Project`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/projects/default/resources`;
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
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "resources"
    ]
};
export const flatMap = {};
