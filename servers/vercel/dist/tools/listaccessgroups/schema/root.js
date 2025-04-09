import { z } from "zod";
export const inputParams = {
    "projectId": z.string().describe("Filter access groups by project.").optional(),
    "search": z.string().describe("Search for access groups by name.").optional(),
    "membersLimit": z.number().int().gte(1).lte(100).describe("Number of members to include in the response.").optional(),
    "projectsLimit": z.number().int().gte(1).lte(100).describe("Number of projects to include in the response.").optional(),
    "limit": z.number().int().gte(1).lte(100).describe("Limit how many access group should be returned.").optional(),
    "next": z.string().describe("Continuation cursor to retrieve the next page of results.").optional(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
