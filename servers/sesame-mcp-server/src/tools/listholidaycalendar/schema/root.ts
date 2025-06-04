import { z } from "zod"

export const inputParamsSchema = {
  "holidayCalendarId": z.string().uuid().describe("Holiday Calendar Id"),
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}