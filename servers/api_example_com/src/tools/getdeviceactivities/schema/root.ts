import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "olderThan": z.number().int().describe("Return activities recorded that are newer than specified activity ID").optional(),
  "newerThan": z.number().int().describe("Return activities recorded that are older than specified activity ID").optional(),
  "activityType": z.string().describe("Return activities of type").optional(),
  "status": z.string().describe("Return activities with status(es)").optional(),
  "seriesUid": z.string().describe("Return activities related to alert (series)").optional(),
  "pageSize": z.number().int().gte(10).lte(1000).describe("Limit number of activities to return").optional(),
  "lang": z.string().describe("Language tag").optional(),
  "tz": z.string().describe("Time Zone").optional()
}