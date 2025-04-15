import { z } from "zod"

export const inputParamsSchema = {
  "from": z.string().datetime({ offset: true }).nullable().describe("The date and time from which the consent should be active, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format.").optional(),
  "to": z.string().datetime({ offset: true }).nullable().describe("The date and time at which the consent expires, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format.").optional()
}