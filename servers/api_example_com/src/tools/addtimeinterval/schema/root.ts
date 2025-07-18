import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().nullable().describe("The name of the time interval.").optional()
}