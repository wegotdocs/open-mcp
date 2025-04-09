import { z } from "zod";
export const inputParams = {
    "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool.")
};
