import { z } from "zod"

export const inputParamsSchema = {
  "pointId": z.string().uuid().describe("Unique identifier of the Point"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the duration for which the Point Histories are requested"),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the duration for which the Point Histories are requested"),
  "type": z.enum(["FIVE_MINUTE","QUARTER_HOURLY","HALF_HOURLY","HOURLY"]).describe("The interval to which the histories are aggregated to e.g. an interval of _HOURLY_ will rollup all timestamps into a single timestamp per hour on the hour")
}