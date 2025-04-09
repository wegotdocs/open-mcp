import { z } from "zod";
export const inputParams = {
    "deploymentId": z.string().describe("The deployment to get the check for."),
    "checkId": z.string().describe("The check to fetch"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
