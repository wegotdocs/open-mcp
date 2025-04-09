import { z } from "zod";
export const inputParams = {
    "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
    "X-Dangerous": z.boolean().describe("Acknowledge this action will destroy the autoscale pool and its associated resources and _can not_ be reversed.")
};
