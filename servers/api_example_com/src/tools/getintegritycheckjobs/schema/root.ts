import { z } from "zod"

export const inputParamsSchema = {
  "df": z.string().describe("Device filter.").optional(),
  "ddf": z.string().describe("Deleted device filter.").optional(),
  "sf": z.string().describe("Backup job status filter.").optional(),
  "ptf": z.string().describe("Backup job planType filter.").optional(),
  "stf": z.string().describe("Backup job startTime filter.").optional(),
  "include": z.string().describe("Which devices include (active|deleted|all) default value active.").optional(),
  "cursor": z.string().describe("Cursor name.").optional(),
  "pageSize": z.number().int().gte(1).lte(10000).describe("Limit number of records per page.").optional()
}