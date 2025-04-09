import { z } from "zod";
export const inputParams = {
    "screenId": z.array(z.number().int()).describe("The list of screen IDs. To include multiple screen IDs, provide an ampersand-separated list. For example, `screenId=10000&screenId=10001`.").optional(),
    "tabId": z.array(z.number().int()).describe("The list of tab IDs. To include multiple tab IDs, provide an ampersand-separated list. For example, `tabId=10000&tabId=10001`.").optional(),
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResult": z.number().int().describe("The maximum number of items to return per page. The maximum number is 100,").optional()
};
