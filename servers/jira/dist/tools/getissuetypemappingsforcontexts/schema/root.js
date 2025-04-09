import { z } from "zod";
export const inputParams = {
    "fieldId": z.string().describe("The ID of the custom field."),
    "contextId": z.array(z.number().int()).describe("The ID of the context. To include multiple contexts, provide an ampersand-separated list. For example, `contextId=10001&contextId=10002`.").optional(),
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
};
