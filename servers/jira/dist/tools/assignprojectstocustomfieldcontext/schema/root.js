import { z } from "zod";
export const inputParams = {
    "fieldId": z.string().describe("The ID of the custom field."),
    "contextId": z.number().int().describe("The ID of the context."),
    "projectIds": z.array(z.string()).describe("The IDs of projects.")
};
