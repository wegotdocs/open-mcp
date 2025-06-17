import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Host ID"),
  "from": z.string().datetime({ offset: true }).describe("Start of the chart interval, as ISO8601 timestamp"),
  "to": z.string().datetime({ offset: true }).describe("End of the chart interval, as ISO8601 timestamp")
}