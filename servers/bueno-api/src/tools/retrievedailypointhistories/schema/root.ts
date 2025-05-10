import { z } from "zod"

export const inputParamsSchema = {
  "pointId": z.string().uuid().describe("Unique identifier of the Point"),
  "from": z.string().date().describe("Start date of the duration for which Point histories are requested"),
  "to": z.string().date().describe("End date of the duration for which Point histories are requested"),
  "type": z.enum(["DAILY","MONTHLY","QUARTERLY","YEARLY"]).describe("Interval")
}