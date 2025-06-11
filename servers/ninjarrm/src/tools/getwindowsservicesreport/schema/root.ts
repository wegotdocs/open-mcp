import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter").optional(),
  "name": z.string().describe("Service name").optional(),
  "state": z.enum(["UNKNOWN","STOPPED","START_PENDING","RUNNING","STOP_PENDING","PAUSE_PENDING","PAUSED","CONTINUE_PENDING"]).describe("Service state").optional(),
  "cursor": z.string().describe("Cursor name").optional(),
  "pageSize": z.number().int().gte(10).lte(10000).describe("Limit number of records per page").optional()
}