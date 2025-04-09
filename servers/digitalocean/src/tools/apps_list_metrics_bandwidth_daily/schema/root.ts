import { z } from "zod"

export const inputParams = {
  "app_ids": z.array(z.string()).max(100).describe("A list of app IDs to query bandwidth metrics for."),
  "date": z.string().datetime({ offset: true }).describe("Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday.").optional()
}