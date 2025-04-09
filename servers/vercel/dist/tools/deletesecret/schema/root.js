import { z } from "zod";
export const inputParams = {
    "idOrName": z.string().describe("The name or the unique identifier to which the secret belongs to."),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
