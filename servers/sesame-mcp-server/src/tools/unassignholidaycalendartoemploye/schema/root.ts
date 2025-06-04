import { z } from "zod"

export const inputParamsSchema = {
  "holidayCalendarId": z.string().uuid().describe("Holiday Calendar Id"),
  "employees": z.array(z.string().uuid()).optional()
}