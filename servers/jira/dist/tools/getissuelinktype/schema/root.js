import { z } from "zod";
export const inputParams = {
    "issueLinkTypeId": z.string().describe("The ID of the issue link type.")
};
