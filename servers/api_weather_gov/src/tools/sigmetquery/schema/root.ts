import { z } from "zod"

export const inputParams = {
  "start": z.string().datetime({ offset: true }).describe("Start time").optional(),
  "end": z.string().datetime({ offset: true }).describe("End time").optional(),
  "date": z.string().date().describe("Date (in YYYY-MM-DD format).").optional(),
  "atsu": z.string().regex(new RegExp("^[A-Z]{3,4}$")).describe("ATSU Identifier").optional(),
  "sequence": z.string().describe("SIGMET sequence number").optional()
}