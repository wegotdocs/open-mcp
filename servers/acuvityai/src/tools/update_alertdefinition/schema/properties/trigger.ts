import { z } from "zod"

export const inputParamsSchema = {
  "interval": z.string().describe("What time window to look for an alert event."),
  "occurrences": z.number().int().describe("The number of times an alert event is seen to cause a trigger.")
}