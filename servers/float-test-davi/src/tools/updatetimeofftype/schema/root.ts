import { z } from "zod"

export const inputParamsSchema = {
  "timeoff_type_id": z.number().int().describe("The time off type's ID")
}