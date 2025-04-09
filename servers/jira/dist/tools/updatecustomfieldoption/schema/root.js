import { z } from "zod";
export const inputParams = {
    "fieldId": z.string().describe("The ID of the custom field."),
    "contextId": z.number().int().describe("The ID of the context."),
    "options": z.array(z.object({ "disabled": z.boolean().describe("Whether the option is disabled.").optional(), "id": z.string().describe("The ID of the custom field option."), "value": z.string().describe("The value of the custom field option.").optional() }).strict().describe("Details of a custom field option for a context.")).describe("Details of the options to update.").optional()
};
