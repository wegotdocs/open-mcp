import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "document": z.string().optional(),
  "issued_by": z.string().optional(),
  "number": z.string().nullable().optional(),
  "sub_type": z.string().nullable().optional(),
  "type": z.string().optional(),
  "valid_from": z.string().datetime({ offset: true }).nullable().optional(),
  "valid_to": z.string().datetime({ offset: true }).nullable().optional(),
  "passthrough": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `passthrough` to the tool, first call the tool `expandSchema` with \"/properties/passthrough\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Value to pass through to the provider</property-description>").optional(),
  "x-account-id": z.string().describe("The account identifier")
}