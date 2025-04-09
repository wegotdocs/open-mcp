import { z } from "zod";
export const inputParams = {
    "limit": z.number().int().describe("The maximum number of results to return").optional()
};
