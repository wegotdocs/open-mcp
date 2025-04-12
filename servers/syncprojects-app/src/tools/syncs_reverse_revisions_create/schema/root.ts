import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("A unique integer value identifying this sync."),
  "user": z.number().int().readonly(),
  "sync_time": z.string().datetime({ offset: true }).readonly(),
  "changelog": z.array(z.object({ "id": z.number().int().readonly(), "text": z.string(), "song": z.number().int(), "date_created": z.string().datetime({ offset: true }).optional(), "user": z.string().readonly() })).readonly(),
  "project": z.number().int(),
  "songs": z.array(z.number().int())
}