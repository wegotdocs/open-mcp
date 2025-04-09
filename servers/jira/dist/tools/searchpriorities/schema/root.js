import { z } from "zod";
export const inputParams = {
    "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
    "id": z.array(z.string()).describe("The list of priority IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=2&id=3`.").optional(),
    "projectId": z.array(z.string()).describe("The list of projects IDs. To include multiple IDs, provide an ampersand-separated list. For example, `projectId=10010&projectId=10111`.").optional(),
    "priorityName": z.string().describe("The name of priority to search for.").optional(),
    "onlyDefault": z.boolean().describe("Whether only the default priority is returned.").optional(),
    "expand": z.string().describe("Use `schemes` to return the associated priority schemes for each priority. Limited to returning first 15 priority schemes per priority.").optional()
};
