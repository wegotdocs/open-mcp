import { z } from "zod";
export const inputParams = {
    "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall.")
};
