import { z } from "zod";
export const inputParams = {
    "customer": z.string().max(5000),
    "payment_method": z.string().max(5000),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
};
