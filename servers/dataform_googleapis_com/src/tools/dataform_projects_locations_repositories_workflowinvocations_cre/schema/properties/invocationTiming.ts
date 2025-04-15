import { z } from "zod"

export const inputParamsSchema = {
  "endTime": z.string().describe("Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.").optional(),
  "startTime": z.string().describe("Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.").optional()
}