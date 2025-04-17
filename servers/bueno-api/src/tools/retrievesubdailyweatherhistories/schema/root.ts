import { z } from "zod"

export const inputParamsSchema = {
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "metricId": z.number().describe("Unique identifier of the Weather Metric"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the duration for which the Weather Histories are requested"),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the duration for which the Weather Histories are requested"),
  "type": z.enum(["FIVE_MINUTE","QUARTER_HOURLY","HALF_HOURLY","HOURLY"]).describe("The interval to which the Histories are aggregated to e.g. an interval of _HOURLY_ will rollup all timestamps into a single timestamp per hour on the hour")
}