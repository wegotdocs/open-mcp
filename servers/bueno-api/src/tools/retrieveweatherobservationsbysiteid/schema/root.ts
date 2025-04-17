import { z } from "zod"

export const inputParamsSchema = {
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the period requested").optional(),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the period requested").optional(),
  "aggregateType": z.enum(["RAW","FIVE_MINUTE","QUARTER_HOURLY","HALF_HOURLY","HOURLY","DAILY","MONTHLY","QUARTERLY","YEARLY"]).describe("Duration at which weather observations are aggregated").optional(),
  "unitSystem": z.enum(["METRIC","USC"]).describe("Unit system applied to response data").optional()
}