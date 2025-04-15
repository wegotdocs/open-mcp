import { z } from "zod"

export const inputParamsSchema = {
  "days_requested": z.number().int().gte(1).lte(731).describe("The number of days of data to request for the Bank Income product")
}