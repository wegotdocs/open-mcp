import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this custom field choice set."),
  "name": z.string().min(1).max(100).optional(),
  "description": z.string().max(200).optional(),
  "base_choices": z.union([z.literal("IATA"), z.literal("ISO_3166"), z.literal("UN_LOCODE"), z.literal(""), z.literal(null)]).nullable().describe("Base set of predefined choices (optional)\n\n* `IATA` - IATA (Airport codes)\n* `ISO_3166` - ISO 3166 (Country codes)\n* `UN_LOCODE` - UN/LOCODE (Location codes)").optional(),
  "extra_choices": z.array(z.array(z.any()).min(2).max(2)).optional(),
  "order_alphabetically": z.boolean().describe("Choices are automatically ordered alphabetically").optional()
}