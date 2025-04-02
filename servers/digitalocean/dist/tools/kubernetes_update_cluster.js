import { z } from "zod";
export const toolName = `kubernetes_update_cluster`;
export const toolDescription = `Update a Kubernetes Cluster`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/kubernetes/clusters/{cluster_id}`;
export const method = `put`;
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
        "name",
        "tags",
        "maintenance_policy",
        "auto_upgrade",
        "surge_upgrade",
        "ha",
        "control_plane_firewall",
        "cluster_autoscaler_configuration",
        "routing_agent"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."), "name": z.string().describe("A human-readable name for a Kubernetes cluster."), "tags": z.array(z.string()).describe("An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`.").optional(), "maintenance_policy": z.object({ "start_time": z.string().describe("The start time in UTC of the maintenance window policy in 24-hour clock format / HH:MM notation (e.g., `15:00`).").optional(), "duration": z.string().describe("The duration of the maintenance window policy in human-readable format.").readonly().optional(), "day": z.enum(["any", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]).describe("The day of the maintenance window policy. May be one of `monday` through `sunday`, or `any` to indicate an arbitrary week day.").optional() }).nullable().describe("An object specifying the maintenance window policy for the Kubernetes cluster.").optional(), "auto_upgrade": z.boolean().describe("A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window."), "surge_upgrade": z.boolean().describe("A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes."), "ha": z.boolean().describe("A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled."), "control_plane_firewall": z.object({ "enabled": z.boolean().describe("Indicates whether the control plane firewall is enabled.").optional(), "allowed_addresses": z.array(z.string()).describe("An array of public addresses (IPv4 or CIDR) allowed to access the control plane.").optional() }).nullable().describe("An object specifying the control plane firewall for the Kubernetes cluster. Control plane firewall is in early availability (invite only).").optional(), "cluster_autoscaler_configuration": z.object({ "scale_down_utilization_threshold": z.number().describe("Used to customize when cluster autoscaler scales down non-empty nodes by setting the node utilization threshold.").optional(), "scale_down_unneeded_time": z.string().describe("Used to customize how long a node is unneeded before being scaled down.").optional() }).nullable().describe("An object specifying custom cluster autoscaler configuration.").optional(), "routing_agent": z.object({ "enabled": z.boolean().describe("Indicates whether the routing-agent component is enabled.").optional() }).nullable().describe("An object specifying whether the routing-agent component should be enabled for the Kubernetes cluster.").optional() }).shape;
