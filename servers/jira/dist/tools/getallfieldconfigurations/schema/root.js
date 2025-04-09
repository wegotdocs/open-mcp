import { z } from "zod";
export const inputParams = {
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
    "id": z.array(z.number().int()).describe("The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.").optional(),
    "isDefault": z.boolean().describe("If *true* returns default field configurations only.").optional(),
    "query": z.string().describe("The query string used to match against field configuration names and descriptions.").optional()
};
