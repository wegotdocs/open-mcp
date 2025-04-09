export { inputParams } from "./schema/root.js";
export const toolName = `kubernetes_delete_node`;
export const toolDescription = `Delete a Node in a Kubernetes Cluster`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/nodes/{node_id}`;
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
    "query": [
        "skip_drain",
        "replace"
    ],
    "header": [],
    "path": [
        "cluster_id",
        "node_pool_id",
        "node_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
