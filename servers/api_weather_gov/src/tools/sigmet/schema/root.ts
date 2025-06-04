import { z } from "zod"

export const inputParamsSchema = {
  "atsu": z.string().regex(new RegExp("^[A-Z]{3,4}$")).describe("ATSU Identifier"),
  "date": z.string().date().describe("Date (in YYYY-MM-DD format)."),
  "time": z.string().regex(new RegExp("^([01][0-9]|2[0-3])[0-5][0-9]$")).describe("A time (in HHMM format). This is always specified in UTC (Zulu) time.")
}