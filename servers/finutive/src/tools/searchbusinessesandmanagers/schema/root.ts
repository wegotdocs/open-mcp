import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string(),
  "size": z.number().int(),
  "offset": z.number().int()
}