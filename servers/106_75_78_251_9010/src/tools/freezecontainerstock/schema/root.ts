import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "qty": z.number().int().gte(1)
}