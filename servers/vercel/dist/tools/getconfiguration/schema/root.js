import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("ID of the configuration to check"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
