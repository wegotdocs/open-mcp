import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name").optional(),
  "variant_ids": z.union([z.array(z.any()).describe("Variant IDs"), z.null().describe("Variant IDs")]).describe("Variant IDs").optional()
}