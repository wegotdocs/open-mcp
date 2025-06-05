import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this scorecard."),
  "content_ids": z.array(z.number().int())
}