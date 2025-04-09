import { z } from "zod";
export const inputParams = {
    "serves_inference": z.boolean().describe("Include datacenters that serve inference.").optional(),
    "serves_batch": z.boolean().describe("Include datacenters that are capable of running batch jobs.").optional()
};
