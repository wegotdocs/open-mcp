import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("A unique integer value identifying this song region."),
  "b_id": z.number().int().readonly().optional(),
  "start": z.number().gte(0).optional(),
  "end": z.number().gte(0).optional(),
  "name": z.string().max(50).optional(),
  "color": z.string().max(6).optional(),
  "song": z.number().int().optional()
}