import { z } from "zod"

export const inputParamsSchema = {
  "label": z.string().describe("Label"),
  "field_type": z.union([z.string().describe("Field Type"), z.null().describe("Field Type")]).describe("Field Type").optional(),
  "allow_multiple": z.union([z.boolean().describe("Allow Multiple"), z.null().describe("Allow Multiple")]).describe("Allow Multiple").optional(),
  "key": z.string().describe("Key"),
  "hidden": z.union([z.boolean().describe("Hidden"), z.null().describe("Hidden")]).describe("Hidden").optional()
}