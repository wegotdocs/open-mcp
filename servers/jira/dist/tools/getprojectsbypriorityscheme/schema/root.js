import { z } from "zod";
export const inputParams = {
    "schemeId": z.string().describe("The priority scheme ID."),
    "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
    "projectId": z.array(z.number().int()).describe("The project IDs to filter by. For example, `projectId=10000&projectId=10001`.").optional(),
    "query": z.string().describe("The string to query projects on by name.").optional()
};
