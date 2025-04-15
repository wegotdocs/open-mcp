import { z } from "zod"

export const inputParamsSchema = {
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.").optional(),
  "ids": z.array(z.number().int()).describe("A list of worklog IDs.")
}