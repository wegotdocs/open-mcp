import { z } from "zod"

export const inputParamsSchema = {
  "class": z.enum(["SYSTEM","DEVICE","USER","ALL"]).describe("Activity Class (System/Device) filter").optional(),
  "before": z.string().describe("Return activities recorded prior to specified date").optional(),
  "after": z.string().describe("Return activities recorded after to specified date").optional(),
  "olderThan": z.number().int().describe("Return activities recorded that are newer than specified activity ID").optional(),
  "newerThan": z.number().int().describe("Return activities recorded that are older than specified activity ID").optional(),
  "type": z.string().describe("Return activities of type").optional(),
  "status": z.string().describe("Return activities with status(es)").optional(),
  "user": z.string().describe("Return activities for user(s)").optional(),
  "seriesUid": z.string().describe("Return activities related to alert (series)").optional(),
  "df": z.string().describe("Device filter").optional(),
  "pageSize": z.number().int().gte(10).lte(1000).describe("Limit number of activities to return").optional(),
  "lang": z.string().describe("Language tag").optional(),
  "tz": z.string().describe("Time Zone").optional(),
  "sourceConfigUid": z.string().describe("Allows users to make a request directed to a specific script").optional()
}