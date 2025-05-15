import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "Description": z.string().describe("Description of the role").optional(),
  "Privileges": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Privileges` to the tool, first call the tool `expandSchema` with \"/properties/Privileges\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>One or more privileges assigned to the role.</property-description>").optional(),
  "accountId": z.string().describe("The account ID under which the role exists.").optional(),
  "b_id": z.string().describe("The ID of the role.").optional(),
  "name": z.string().describe("The name of the role.").optional(),
  "parentId": z.string().describe("The ID of the role from which this role inherits privileges.").optional()
}