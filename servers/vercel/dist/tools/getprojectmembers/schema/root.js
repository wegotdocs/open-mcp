import { z } from "zod";
export const inputParams = {
    "idOrName": z.string().describe("The ID or name of the Project."),
    "limit": z.number().int().gte(1).lte(100).describe("Limit how many project members should be returned").optional(),
    "since": z.number().int().describe("Timestamp in milliseconds to only include members added since then.").optional(),
    "until": z.number().int().describe("Timestamp in milliseconds to only include members added until then.").optional(),
    "search": z.string().describe("Search project members by their name, username, and email.").optional(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
