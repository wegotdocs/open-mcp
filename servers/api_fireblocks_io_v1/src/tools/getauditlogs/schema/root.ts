import { z } from "zod"

export const inputParamsSchema = {
  "timePeriod": z.enum(["DAY","WEEK"]).describe("The last time period to fetch audit logs").optional(),
  "cursor": z.string().describe("The next id to start fetch audit logs from").optional()
}