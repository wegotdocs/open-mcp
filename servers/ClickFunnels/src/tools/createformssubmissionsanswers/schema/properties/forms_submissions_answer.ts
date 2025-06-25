import { z } from "zod"

export const inputParamsSchema = {
  "field_id": z.number().int().describe("Field"),
  "fields_option_id": z.union([z.number().int().describe("ID of a record from the Forms::Fields::Option API."), z.null().describe("ID of a record from the Forms::Fields::Option API.")]).describe("ID of a record from the Forms::Fields::Option API.").optional(),
  "entry": z.union([z.string().describe("Entry"), z.null().describe("Entry")]).describe("Entry").optional(),
  "fields_option_ids": z.union([z.array(z.any()).describe("Fields Options"), z.null().describe("Fields Options")]).describe("Fields Options").optional()
}