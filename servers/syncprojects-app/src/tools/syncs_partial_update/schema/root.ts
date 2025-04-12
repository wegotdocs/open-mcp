import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("A unique integer value identifying this sync."),
  "user": z.number().int().readonly().optional(),
  "sync_time": z.string().datetime({ offset: true }).readonly().optional(),
  "changelog": z.array(z.object({ "id": z.number().int().readonly(), "text": z.string(), "song": z.number().int(), "date_created": z.string().datetime({ offset: true }).optional(), "user": z.string().readonly() })).readonly().optional(),
  "project": z.number().int().optional(),
  "songs": z.array(z.number().int()).optional()
}