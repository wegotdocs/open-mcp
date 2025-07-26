import { z } from "zod"

export const inputParamsSchema = {
  "engagement_id": z.number().int(),
  "id": z.number().int().describe("A unique integer value identifying this Engagement Survey.")
}