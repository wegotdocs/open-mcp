import { z } from "zod";
export const inputParams = {
    "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
    "reserved_ips": z.array(z.string()).describe("An array of unique identifiers for the reserved IPs to be scheduled for deletion.").optional(),
    "snapshots": z.array(z.string()).describe("An array of unique identifiers for the snapshots to be scheduled for deletion.").optional(),
    "volumes": z.array(z.string()).describe("An array of unique identifiers for the volumes to be scheduled for deletion.").optional(),
    "volume_snapshots": z.array(z.string()).describe("An array of unique identifiers for the volume snapshots to be scheduled for deletion.").optional()
};
