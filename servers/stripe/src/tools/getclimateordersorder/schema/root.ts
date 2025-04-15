import { z } from "zod"

export const inputParamsSchema = {
  "order": z.string().max(5000).describe("Unique identifier of the order."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}