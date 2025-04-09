import { z } from "zod";
export const inputParams = {
    "idOrAlias": z.string().describe("The alias or alias ID to be retrieved"),
    "from": z.number().describe("Get the alias only if it was created after the provided timestamp").optional(),
    "projectId": z.string().describe("Get the alias only if it is assigned to the provided project ID").optional(),
    "since": z.number().describe("Get the alias only if it was created after this JavaScript timestamp").optional(),
    "until": z.number().describe("Get the alias only if it was created before this JavaScript timestamp").optional(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
