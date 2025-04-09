import { z } from "zod";
export const inputParams = {
    "idOrName": z.string().describe("The ID or name of the Project."),
    "uid": z.string().describe("The user ID of the member."),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
