import { z } from "zod";
export const inputParams = {
    "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme.")
};
