import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name"),
  "variant_ids": z.union([z.array(z.any()).describe("Variant IDs"), z.null().describe("Variant IDs")]).describe("Variant IDs").optional()
}