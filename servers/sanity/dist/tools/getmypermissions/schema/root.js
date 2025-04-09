import { z } from "zod";
export const inputParams = {
    "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(),
    "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.").optional()
};
