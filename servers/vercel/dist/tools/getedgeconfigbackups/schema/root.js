import { z } from "zod";
export const inputParams = {
    "edgeConfigId": z.string(),
    "next": z.string().optional(),
    "limit": z.number().gte(0).lte(50).optional(),
    "metadata": z.string().optional(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
