import { z } from "zod";
export const inputParams = {
    "scheduled_query_run": z.string().max(5000),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
};
