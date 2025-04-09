export { inputParams } from "./schema/root.js";
export const toolName = `kubernetes_run_clusterlint`;
export const toolDescription = `Run Clusterlint Checks on a Kubernetes Cluster`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/kubernetes/clusters/{cluster_id}/clusterlint`;
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
    "path": [
        "cluster_id"
    ],
    "cookie": [],
    "body": [
        "include_groups",
        "include_checks",
        "exclude_groups",
        "exclude_checks"
    ]
};
export const flatMap = {};
