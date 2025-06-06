import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique ID for the resource."),
  "name": z.string().describe("Shipping zone name.").optional(),
  "order": z.number().int().describe("Shipping zone order.").optional()
}