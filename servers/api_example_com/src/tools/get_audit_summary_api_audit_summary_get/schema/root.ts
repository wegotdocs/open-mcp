import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.union([z.string(), z.null()]).describe("Start date (ISO format)").optional(),
  "end_date": z.union([z.string(), z.null()]).describe("End date (ISO format)").optional()
}