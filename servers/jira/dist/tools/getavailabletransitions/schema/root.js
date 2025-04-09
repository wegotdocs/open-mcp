import { z } from "zod";
export const inputParams = {
    "issueIdsOrKeys": z.string().describe("Comma (,) separated Ids or keys of the issues to get transitions available for them."),
    "endingBefore": z.string().describe("(Optional)The end cursor for use in pagination.").optional(),
    "startingAfter": z.string().describe("(Optional)The start cursor for use in pagination.").optional()
};
