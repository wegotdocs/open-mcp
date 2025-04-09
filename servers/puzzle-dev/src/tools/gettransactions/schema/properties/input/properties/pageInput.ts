import { z } from "zod"

export const inputParams = {
  "count": z.number().int(),
  "after": z.string().optional()
}