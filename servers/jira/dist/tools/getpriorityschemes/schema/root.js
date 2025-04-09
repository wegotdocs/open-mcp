import { z } from "zod";
export const inputParams = {
    "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
    "priorityId": z.array(z.number().int()).describe("A set of priority IDs to filter by. To include multiple IDs, provide an ampersand-separated list. For example, `priorityId=10000&priorityId=10001`.").optional(),
    "schemeId": z.array(z.number().int()).describe("A set of priority scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `schemeId=10000&schemeId=10001`.").optional(),
    "schemeName": z.string().describe("The name of scheme to search for.").optional(),
    "onlyDefault": z.boolean().describe("Whether only the default priority is returned.").optional(),
    "orderBy": z.enum(["name", "+name", "-name"]).describe("The ordering to return the priority schemes by.").optional(),
    "expand": z.string().describe("A comma separated list of additional information to return. \"priorities\" will return priorities associated with the priority scheme. \"projects\" will return projects associated with the priority scheme. `expand=priorities,projects`.").optional()
};
