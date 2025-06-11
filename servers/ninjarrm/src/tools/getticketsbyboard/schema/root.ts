import { z } from "zod"

export const inputParamsSchema = {
  "boardId": z.number().int(),
  "sortBy": z.array(z.object({ "field": z.string().optional(), "direction": z.enum(["ASC","DESC"]).optional() })).optional(),
  "filters": z.array(z.object({ "field": z.string().optional(), "operator": z.string().optional(), "value": z.string().optional() })).optional(),
  "pageSize": z.number().int().optional(),
  "searchCriteria": z.string().min(0).max(512).optional(),
  "includeColumns": z.array(z.string()).optional(),
  "lastCursorId": z.number().int().optional()
}