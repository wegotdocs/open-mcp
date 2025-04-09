import { z } from "zod";
export const inputParams = {
    "projectId": z.string().describe("The unique project identifier"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
