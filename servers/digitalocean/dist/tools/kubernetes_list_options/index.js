export { inputParams } from "./schema/root.js";
export const toolName = `kubernetes_list_options`;
export const toolDescription = `List Available Regions, Node Sizes, and Versions of Kubernetes`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/kubernetes/options`;
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
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
