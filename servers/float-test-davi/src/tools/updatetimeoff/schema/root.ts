import { z } from "zod"

export const inputParamsSchema = {
  "timeoff_id": z.number().int().describe("The time off's ID")
}