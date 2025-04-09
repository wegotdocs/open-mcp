import { z } from "zod";
export const inputParams = {
    "maxResults": z.number().int().describe("The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page.").optional(),
    "after": z.number().int().describe("The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch.").optional()
};
