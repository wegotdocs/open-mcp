import { z } from "zod"

export const inputParams = {
  "id": z.number().int().readonly(),
  "start": z.number().gte(0),
  "end": z.number().gte(0),
  "name": z.string().max(50),
  "color": z.string().max(6),
  "song": z.number().int()
}