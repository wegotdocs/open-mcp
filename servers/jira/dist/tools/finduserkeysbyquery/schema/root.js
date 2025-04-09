import { z } from "zod";
export const inputParams = {
    "query": z.string().describe("The search query."),
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResult": z.number().int().describe("The maximum number of items to return per page.").optional()
};
