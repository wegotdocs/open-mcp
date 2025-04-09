export { inputParams } from "./schema/root.js";
export const toolName = `registry_validate_name`;
export const toolDescription = `Validate a Container Registry Name`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/registry/validate-name`;
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
        "name"
    ]
};
export const flatMap = {};
