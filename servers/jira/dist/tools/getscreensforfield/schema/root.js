import { z } from "zod";
export const inputParams = {
    "fieldId": z.string().describe("The ID of the field to return screens for."),
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
    "expand": z.string().describe("Use [expand](#expansion) to include additional information about screens in the response. This parameter accepts `tab` which returns details about the screen tabs the field is used in.").optional()
};
