import { z } from "zod";
export const inputParams = {
    "fieldId": z.string().describe("The ID of the custom field."),
    "description": z.string().describe("The description of the context.").optional(),
    "id": z.string().describe("The ID of the context.").readonly().optional(),
    "issueTypeIds": z.array(z.string()).describe("The list of issue types IDs for the context. If the list is empty, the context refers to all issue types.").optional(),
    "name": z.string().describe("The name of the context."),
    "projectIds": z.array(z.string()).describe("The list of project IDs associated with the context. If the list is empty, the context is global.").optional()
};
