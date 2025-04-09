import { z } from "zod";
export const inputParams = {
    "screenId": z.number().int().describe("The ID of the screen."),
    "tabId": z.number().int().describe("The ID of the screen tab."),
    "id": z.string().describe("The ID of the field."),
    "after": z.string().url().describe("The ID of the screen tab field after which to place the moved screen tab field. Required if `position` isn't provided.").optional(),
    "position": z.enum(["Earlier", "Later", "First", "Last"]).describe("The named position to which the screen tab field should be moved. Required if `after` isn't provided.").optional()
};
