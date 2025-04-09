import { z } from "zod";
export const inputParams = {
    "schemeId": z.string().describe("The ID of the issue security scheme."),
    "levelId": z.string().describe("The ID of the issue security level."),
    "memberId": z.string().describe("The ID of the issue security level member to be removed.")
};
