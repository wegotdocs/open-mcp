import { z } from "zod";
export const inputParams = {
    "account": z.string().max(5000),
    "id": z.string().describe("Unique identifier for the external account to be retrieved."),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
};
