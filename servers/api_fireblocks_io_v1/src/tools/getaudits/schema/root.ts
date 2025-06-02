import { z } from "zod"

export const inputParamsSchema = {
  "timePeriod": z.enum(["DAY","WEEK"]).describe("The last time period to fetch audit logs").optional()
}