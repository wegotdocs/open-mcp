import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include."),
  "abuseTypes": z.array(z.object({ "id": z.string().optional() })).optional(),
  "description": z.string().optional(),
  "relatedEntities": z.array(z.object({ "entity": z.object({ "id": z.string().optional(), "typeId": z.string().optional(), "url": z.string().optional() }).optional() })).optional(),
  "subject": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `subject` to the tool, first call the tool `expandSchema` with \"/properties/subject\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}