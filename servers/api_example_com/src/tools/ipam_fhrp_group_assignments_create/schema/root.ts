import { z } from "zod"

export const inputParamsSchema = {
  "group": z.number().int(),
  "interface_type": z.string(),
  "interface_id": z.number().int().gte(0).lte(9223372036854776000),
  "priority": z.number().int().gte(0).lte(255)
}