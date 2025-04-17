import { z } from "zod"

export const inputParamsSchema = {
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "metricId": z.number().describe("Unique identifier of the Weather Metric"),
  "from": z.string().date().describe("Start date of the duration for which Weather histories are requested"),
  "to": z.string().date().describe("End date of the duration for which Weather histories are requested"),
  "type": z.enum(["DAILY","MONTHLY","QUARTERLY","YEARLY"]).describe("The interval to which the Histories are aggregated to e.g. an interval of _MONTHLY_ will rollup all timestamps into a single timestamp per month, from the first to the last day of the month inclusive")
}