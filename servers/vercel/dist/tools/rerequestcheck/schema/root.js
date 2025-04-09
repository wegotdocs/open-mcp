import { z } from "zod";
export const inputParams = {
    "deploymentId": z.string().describe("The deployment to rerun the check for."),
    "checkId": z.string().describe("The check to rerun"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
