import { z } from "zod";
export const inputParams = {
    "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address."),
    "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action.")
};
