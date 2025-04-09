import { z } from "zod";
export const inputParams = {
    "value": z.number().int().gte(0).lte(100).nullable().describe("The calculated Virtual Experience Score value, between 0 and 100"),
    "previousValue": z.number().int().gte(0).lte(100).describe("A previous Virtual Experience Score value to display a delta, between 0 and 100").optional(),
    "source": z.literal("web-vitals")
};
