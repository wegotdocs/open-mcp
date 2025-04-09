import { z } from "zod";
export const inputParams = {
    "fieldId": z.string().describe("The ID of the custom field."),
    "defaultValues": z.array(z.record(z.never()).and(z.object({ "cascadingOptionId": z.string().describe("The ID of the default cascading option.").optional(), "contextId": z.string().describe("The ID of the context."), "optionId": z.string().describe("The ID of the default option."), "type": z.string() }).describe("The default value for a cascading select custom field."))).optional()
};
