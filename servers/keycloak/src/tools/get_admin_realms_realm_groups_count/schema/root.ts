import { z } from "zod"

export const inputParams = {
  "search": z.string().optional(),
  "top": z.boolean().optional()
}