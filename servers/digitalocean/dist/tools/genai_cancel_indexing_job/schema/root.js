import { z } from "zod";
export const inputParams = {
    "uuid": z.string().describe("A unique identifier for an indexing job."),
    "b_uuid": z.string().describe("A unique identifier for an indexing job.").optional()
};
