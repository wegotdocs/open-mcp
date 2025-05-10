import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "firstDayOfWeek": z.number().int().optional(),
  "calendarWeekColumnHeader": z.string().nullable().optional(),
  "movieRuntimeFormat": z.enum(["hoursMinutes","minutes"]).optional(),
  "shortDateFormat": z.string().nullable().optional(),
  "longDateFormat": z.string().nullable().optional(),
  "timeFormat": z.string().nullable().optional(),
  "showRelativeDates": z.boolean().optional(),
  "enableColorImpairedMode": z.boolean().optional(),
  "movieInfoLanguage": z.number().int().optional(),
  "uiLanguage": z.number().int().optional(),
  "theme": z.string().nullable().optional()
}