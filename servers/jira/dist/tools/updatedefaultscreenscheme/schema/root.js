import { z } from "zod";
export const inputParams = {
    "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."),
    "screenSchemeId": z.string().describe("The ID of the screen scheme.")
};
