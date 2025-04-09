import { z } from "zod";
export const inputParams = {
    "includeTrashed": z.boolean().describe("Whether to include trashed plans in the results.").optional(),
    "includeArchived": z.boolean().describe("Whether to include archived plans in the results.").optional(),
    "cursor": z.string().describe("The cursor to start from. If not provided, the first page will be returned.").optional(),
    "maxResults": z.number().int().describe("The maximum number of plans to return per page. The maximum value is 50. The default value is 50.").optional()
};
