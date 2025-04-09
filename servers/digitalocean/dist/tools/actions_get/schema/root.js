import { z } from "zod";
export const inputParams = {
    "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action.")
};
