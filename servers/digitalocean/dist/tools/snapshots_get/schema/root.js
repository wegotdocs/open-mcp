import { z } from "zod";
export const inputParams = {
    "snapshot_id": z.union([z.number().int().describe("The ID of a Droplet snapshot."), z.string().describe("The ID of a volume snapshot.")]).describe("Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.")
};
