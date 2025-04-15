import { z } from "zod"

export const inputParamsSchema = {
  "atsu": z.string().regex(new RegExp("^[A-Z]{3,4}$")).describe("ATSU Identifier"),
  "date": z.string().date().describe("Date (in YYYY-MM-DD format).")
}