import { z } from "zod";
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
export const inputParams = {
    "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
    "node_pool_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes node pool."),
    "node_id": z.string().uuid().describe("A unique ID that can be used to reference a node in a Kubernetes node pool."),
    "skip_drain": z.number().int().gte(0).lte(1).describe("Specifies whether or not to drain workloads from a node before it is deleted. Setting it to `1` causes node draining to be skipped. Omitting the query parameter or setting its value to `0` carries out draining prior to deletion.").optional(),
    "replace": z.number().int().gte(0).lte(1).describe("Specifies whether or not to replace a node after it has been deleted. Setting it to `1` causes the node to be replaced by a new one after deletion. Omitting the query parameter or setting its value to `0` deletes without replacement.").optional()
};
