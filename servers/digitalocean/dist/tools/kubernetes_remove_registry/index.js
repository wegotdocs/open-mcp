export { inputParams } from "./schema/root.js";
export const toolName = `kubernetes_remove_registry`;
export const toolDescription = `Remove Container Registry from Kubernetes Clusters`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/kubernetes/registry`;
export const method = `delete`;
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
        "cluster_uuids"
    ]
};
export const flatMap = {};
