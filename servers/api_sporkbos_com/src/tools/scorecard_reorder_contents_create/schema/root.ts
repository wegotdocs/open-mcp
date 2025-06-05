import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this scorecard."),
  "category_id": z.number().int(),
  "contents": z.array(z.number().int())
}