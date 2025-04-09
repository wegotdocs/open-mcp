export { inputParams } from "./schema/root.js";
export const toolName = `kubernetes_destroy_associatedresourcesdangerous`;
export const toolDescription = `Delete a Cluster and All of its Associated Resources (Dangerous)`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/dangerous`;
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
    "path": [
        "cluster_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
