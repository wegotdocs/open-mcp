import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The unique identifier of the deployment."),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
