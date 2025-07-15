import { z } from "zod"

export const inputParamsSchema = {
  "milestone_id": z.number().int().describe("The milestone's ID")
}