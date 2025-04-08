import { z } from "zod";
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
export const inputParams = {
    "id": z.string().uuid().describe("A unique ID that can be used to identify and reference a Kubernetes cluster.").readonly().optional(),
    "name": z.string().describe("A human-readable name for a Kubernetes cluster."),
    "region": z.string().describe("The slug identifier for the region where the Kubernetes cluster is located."),
    "version": z.string().describe("The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. \"1.14\"), the latest version within it will be used (e.g. \"1.14.6-do.1\"); if set to \"latest\", the latest published version will be used. See the `/v2/kubernetes/options` endpoint to find all currently available versions."),
    "cluster_subnet": z.string().describe("The range of IP addresses for the overlay network of the Kubernetes cluster in CIDR notation.").optional(),
    "service_subnet": z.string().describe("The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation.").optional(),
    "vpc_uuid": z.string().uuid().describe("A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.").optional(),
    "ipv4": z.string().describe("The public IPv4 address of the Kubernetes master node. This will not be set if high availability is configured on the cluster (v1.21+)").readonly().optional(),
    "endpoint": z.string().describe("The base URL of the API server on the Kubernetes master node.").readonly().optional(),
    "tags": z.array(z.string()).describe("An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`.").optional(),
    "node_pools": z.array(z.string()).describe("An object specifying the details of the worker nodes available to the Kubernetes cluster."),
    "maintenance_policy": z.object({ "start_time": z.string().describe("The start time in UTC of the maintenance window policy in 24-hour clock format / HH:MM notation (e.g., `15:00`).").optional(), "duration": z.string().describe("The duration of the maintenance window policy in human-readable format.").readonly().optional(), "day": z.enum(["any", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]).describe("The day of the maintenance window policy. May be one of `monday` through `sunday`, or `any` to indicate an arbitrary week day.").optional() }).nullable().describe("An object specifying the maintenance window policy for the Kubernetes cluster.").optional(),
    "auto_upgrade": z.boolean().describe("A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.").optional(),
    "status": z.object({ "state": z.enum(["running", "provisioning", "degraded", "error", "deleted", "upgrading", "deleting"]).describe("A string indicating the current status of the cluster.").optional(), "message": z.string().describe("An optional message providing additional information about the current cluster state.").optional() }).describe("An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.").readonly().optional(),
    "created_at": z.string().datetime({ offset: true }).describe("A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was created.").readonly().optional(),
    "updated_at": z.string().datetime({ offset: true }).describe("A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was last updated.").readonly().optional(),
    "surge_upgrade": z.boolean().describe("A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.").optional(),
    "ha": z.boolean().describe("A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.").optional(),
    "registry_enabled": z.boolean().describe("A read-only boolean value indicating if a container registry is integrated with the cluster.").readonly().optional(),
    "control_plane_firewall": z.object({ "enabled": z.boolean().describe("Indicates whether the control plane firewall is enabled.").optional(), "allowed_addresses": z.array(z.string()).describe("An array of public addresses (IPv4 or CIDR) allowed to access the control plane.").optional() }).nullable().describe("An object specifying the control plane firewall for the Kubernetes cluster. Control plane firewall is in early availability (invite only).").optional(),
    "cluster_autoscaler_configuration": z.object({ "scale_down_utilization_threshold": z.number().describe("Used to customize when cluster autoscaler scales down non-empty nodes by setting the node utilization threshold.").optional(), "scale_down_unneeded_time": z.string().describe("Used to customize how long a node is unneeded before being scaled down.").optional() }).nullable().describe("An object specifying custom cluster autoscaler configuration.").optional(),
    "routing_agent": z.object({ "enabled": z.boolean().describe("Indicates whether the routing-agent component is enabled.").optional() }).nullable().describe("An object specifying whether the routing-agent component should be enabled for the Kubernetes cluster.").optional()
};
