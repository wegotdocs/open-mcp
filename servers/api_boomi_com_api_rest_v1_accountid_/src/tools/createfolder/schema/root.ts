import { z } from "zod"

export const inputParamsSchema = {
  "PermittedRoles": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PermittedRoles` to the tool, first call the tool `expandSchema` with \"/properties/PermittedRoles\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional. The defined role assigned to the available folder object.</property-description>").optional(),
  "deleted": z.boolean().describe("Read only. Indicates if the component is deleted. A true value indicates a deleted status, whereas a false value indicates an active status.").optional(),
  "fullPath": z.string().describe("Read only. The full path of the folder location in which the component most currently resides within the Component Explorer hierarchy.").optional(),
  "id": z.string().describe("Required. Read only. The -generated, unique identifier of the folder.").optional(),
  "name": z.string().describe("Required. The user-defined name given to the folder.").optional(),
  "parentId": z.string().describe("Required. The -generated, unique identifier of the parent folder.").optional(),
  "parentName": z.string().optional()
}