import { z } from "zod"

export const inputParamsSchema = {
  "fromTime": z.number().int().describe("Start of time range in ms since 1970").optional(),
  "toTime": z.number().int().describe("End of time range in ms since 1970").optional()
}