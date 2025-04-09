import { z } from "zod";
export const inputParams = {
    "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall."),
    "droplet_ids": z.array(z.number().int()).describe("An array containing the IDs of the Droplets to be removed from the firewall.").optional()
};
