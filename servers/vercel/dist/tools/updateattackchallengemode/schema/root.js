import { z } from "zod";
export const inputParams = {
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "projectId": z.string(),
    "attackModeEnabled": z.boolean(),
    "attackModeActiveUntil": z.number().nullable().optional()
};
