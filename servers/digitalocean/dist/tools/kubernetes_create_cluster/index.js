export { inputParams } from "./schema/root.js";
export const toolName = `kubernetes_create_cluster`;
export const toolDescription = `Create a New Kubernetes Cluster`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/kubernetes/clusters`;
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
        "id",
        "name",
        "region",
        "version",
        "cluster_subnet",
        "service_subnet",
        "vpc_uuid",
        "ipv4",
        "endpoint",
        "tags",
        "node_pools",
        "maintenance_policy",
        "auto_upgrade",
        "status",
        "created_at",
        "updated_at",
        "surge_upgrade",
        "ha",
        "registry_enabled",
        "control_plane_firewall",
        "cluster_autoscaler_configuration",
        "routing_agent"
    ]
};
export const flatMap = {};
