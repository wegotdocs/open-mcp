import { z } from "zod"

export const inputParamsSchema = {
  "timeoff_id": z.number().int().describe("time off id to delete")
}