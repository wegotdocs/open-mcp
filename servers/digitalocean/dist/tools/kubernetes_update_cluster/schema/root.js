import { z } from "zod";
export const inputParams = {
    "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
    "name": z.string().describe("A human-readable name for a Kubernetes cluster."),
    "tags": z.array(z.string()).describe("An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`.").optional(),
    "maintenance_policy": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `maintenance_policy` to the tool, first call the tool `expandSchema` with \"/properties/maintenance_policy\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An object specifying the maintenance window policy for the Kubernetes cluster.</property-description>").optional(),
    "auto_upgrade": z.boolean().describe("A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.").optional(),
    "surge_upgrade": z.boolean().describe("A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.").optional(),
    "ha": z.boolean().describe("A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.").optional(),
    "control_plane_firewall": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `control_plane_firewall` to the tool, first call the tool `expandSchema` with \"/properties/control_plane_firewall\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An object specifying the control plane firewall for the Kubernetes cluster. Control plane firewall is in early availability (invite only).</property-description>").optional(),
    "cluster_autoscaler_configuration": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `cluster_autoscaler_configuration` to the tool, first call the tool `expandSchema` with \"/properties/cluster_autoscaler_configuration\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An object specifying custom cluster autoscaler configuration.</property-description>").optional(),
    "routing_agent": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `routing_agent` to the tool, first call the tool `expandSchema` with \"/properties/routing_agent\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An object specifying whether the routing-agent component should be enabled for the Kubernetes cluster.</property-description>").optional()
};
