import { z } from "zod";
export const inputParams = {
    "fieldId": z.string().describe("The ID of the custom field."),
    "contextId": z.number().int().describe("The ID of the context."),
    "after": z.string().describe("The ID of the custom field option or cascading option to place the moved options after. Required if `position` isn't provided.").optional(),
    "customFieldOptionIds": z.array(z.string()).describe("A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both."),
    "position": z.enum(["First", "Last"]).describe("The position the custom field options should be moved to. Required if `after` isn't provided.").optional()
};
