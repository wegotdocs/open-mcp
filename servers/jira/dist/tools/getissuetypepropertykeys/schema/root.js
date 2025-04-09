import { z } from "zod";
export const inputParams = {
    "issueTypeId": z.string().describe("The ID of the issue type.")
};
