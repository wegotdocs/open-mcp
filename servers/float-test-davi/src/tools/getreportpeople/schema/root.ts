import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().describe("**Required:** Start date of the report duration in the format YYYY-MM-DD."),
  "end_date": z.string().describe("**Required:** End date of the report duration in the format YYYY-MM-DD."),
  "people_id": z.number().int().describe("A people ID to filter the response on").optional()
}