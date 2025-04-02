import { z } from "zod";
export const toolName = `droplets_destroy_withassociatedresourcesselective`;
export const toolDescription = `Selectively Destroy a Droplet and its Associated Resources`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/droplets/{droplet_id}/destroy_with_associated_resources/selective`;
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
        "droplet_id"
    ],
    "cookie": [],
    "body": [
        "reserved_ips",
        "snapshots",
        "volumes",
        "volume_snapshots"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."), "reserved_ips": z.array(z.string()).describe("An array of unique identifiers for the reserved IPs to be scheduled for deletion.").optional(), "snapshots": z.array(z.string()).describe("An array of unique identifiers for the snapshots to be scheduled for deletion.").optional(), "volumes": z.array(z.string()).describe("An array of unique identifiers for the volumes to be scheduled for deletion.").optional(), "volume_snapshots": z.array(z.string()).describe("An array of unique identifiers for the volume snapshots to be scheduled for deletion.").optional() }).shape;
