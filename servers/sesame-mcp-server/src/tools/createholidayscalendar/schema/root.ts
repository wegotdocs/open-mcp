import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the holidays"),
  "daysOff": z.array(z.object({ "name": z.string().optional(), "date": z.string().optional() }))
}