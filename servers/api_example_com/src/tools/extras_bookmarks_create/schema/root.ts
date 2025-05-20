import { z } from "zod"

export const inputParamsSchema = {
  "object_type": z.string(),
  "object_id": z.number().int().gte(0).lte(9223372036854776000),
  "user": z.number().int()
}