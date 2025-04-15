import { z } from "zod"

export const inputParamsSchema = {
  "since": z.number().int().describe("The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.").optional()
}