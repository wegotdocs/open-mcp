import { z } from "zod"

export const inputParamsSchema = {
  "milestone_id": z.number().int().describe("milestone id to delete")
}