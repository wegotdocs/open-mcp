import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("The ID of the field configuration."),
    "fieldConfigurationItems": z.array(z.object({ "description": z.string().describe("The description of the field within the field configuration.").optional(), "id": z.string().describe("The ID of the field within the field configuration."), "isHidden": z.boolean().describe("Whether the field is hidden in the field configuration.").optional(), "isRequired": z.boolean().describe("Whether the field is required in the field configuration.").optional(), "renderer": z.string().describe("The renderer type for the field within the field configuration.").optional() }).strict().describe("A field within a field configuration.")).describe("Details of fields in a field configuration.")
};
