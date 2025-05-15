import { z } from "zod"

export const inputParamsSchema = {
  "OrganizationContactInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `OrganizationContactInfo` to the tool, first call the tool `expandSchema` with \"/properties/OrganizationContactInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "componentId": z.string().describe("A unique ID assigned by the system to the component.").optional(),
  "componentName": z.string().describe("A user-defined name for the component.").optional(),
  "deleted": z.boolean().describe("Indicates if the component is deleted. A value of `true` indicates a deleted status, whereas `false` indicates an active status.").optional(),
  "description": z.string().describe("Description of the component. \n\n>**Note:** Although this field is in the object, operations do not support the field. For example, the system ignores the field if it is present in a QUERY, CREATE, or UPDATE request.").optional(),
  "folderId": z.number().int().describe("The ID of the folder in which the component currently resides.").optional(),
  "folderName": z.string().describe("The folder location of the component within Component Explorer.").optional()
}