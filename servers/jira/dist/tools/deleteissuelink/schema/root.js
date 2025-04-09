import { z } from "zod";
export const inputParams = {
    "linkId": z.string().describe("The ID of the issue link.")
};
