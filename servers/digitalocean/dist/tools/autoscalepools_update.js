import { z } from "zod";
export const toolName = `autoscalepools_update`;
export const toolDescription = `Update Autoscale Pool`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets/autoscale/{autoscale_pool_id}`;
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
        "autoscale_pool_id"
    ],
    "cookie": [],
    "body": [
        "name",
        "config",
        "droplet_template"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."), "name": z.string().describe("The human-readable name of the autoscale pool. This field cannot be updated"), "config": z.record(z.any()).and(z.object({ "target_number_instances": z.number().int().gte(1).lte(1000).describe("Fixed number of instances in an autoscale pool.") })).describe("The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration)."), "droplet_template": z.object({ "name": z.string().describe("The name(s) to be applied to all Droplets in the autoscale pool.").optional(), "region": z.enum(["nyc1", "nyc2", "nyc3", "ams2", "ams3", "sfo1", "sfo2", "sfo3", "sgp1", "lon1", "fra1", "tor1", "blr1", "syd1"]).describe("The datacenter in which all of the Droplets will be created."), "size": z.string().describe("The Droplet size to be used for all Droplets in the autoscale pool."), "image": z.string().describe("The Droplet image to be used for all Droplets in the autoscale pool. You may specify the slug or the image ID."), "ssh_keys": z.array(z.string()).describe("The SSH keys to be installed on the Droplets in the autoscale pool. You can either specify the key ID or the fingerprint."), "tags": z.array(z.string()).describe("The tags to apply to each of the Droplets in the autoscale pool.").optional(), "vpc_uuid": z.string().describe("The VPC where the Droplets in the autoscale pool will be created. The VPC must be in the region where you want to create the Droplets.").optional(), "with_droplet_agent": z.boolean().describe("Installs the Droplet agent. This must be set to true to monitor Droplets for resource utilization scaling.").optional(), "project_id": z.string().describe("The project that the Droplets in the autoscale pool will belong to.").optional(), "ipv6": z.boolean().describe("Assigns a unique IPv6 address to each of the Droplets in the autoscale pool.").optional(), "user_data": z.string().describe("A string containing user data that cloud-init consumes to configure a Droplet on first boot. User data is often a cloud-config file or Bash script. It must be plain text and may not exceed 64 KiB in size.").optional() }) }).shape;
