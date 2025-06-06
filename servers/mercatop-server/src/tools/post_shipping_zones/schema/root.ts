import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Shipping zone name.").optional(),
  "order": z.number().int().describe("Shipping zone order.").optional()
}