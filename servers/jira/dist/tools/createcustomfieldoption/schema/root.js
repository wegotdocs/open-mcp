import { z } from "zod";
export const inputParams = {
    "fieldId": z.string().describe("The ID of the custom field."),
    "contextId": z.number().int().describe("The ID of the context."),
    "options": z.array(z.object({ "disabled": z.boolean().describe("Whether the option is disabled.").optional(), "optionId": z.string().describe("For cascading options, the ID of a parent option.").optional(), "value": z.string().describe("The value of the custom field option.") }).strict().describe("Details of a custom field option to create.")).describe("Details of options to create.").optional()
};
