import { z } from "zod";
export const inputParams = {
    "issueIdOrKey": z.string().describe("The key or ID of the issue.")
};
