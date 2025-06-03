import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "active": z.boolean().optional(),
  "type": z.enum(["banks","analytics","accountings"]).describe("An enumeration.").optional(),
  "accountingName": z.string().optional(),
  "collective": z.boolean().describe("collective accounting account").optional(),
  "additionalInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `additionalInfo` to the tool, first call the tool `expandSchema` with \"/properties/additionalInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "attributes": z.array(z.object({ "customId": z.string().optional(), "value": z.string().optional(), "valueCustomId": z.string().optional() })).optional(),
  "accountingCode": z.string()
}