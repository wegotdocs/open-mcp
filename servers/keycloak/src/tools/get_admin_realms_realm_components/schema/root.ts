import { z } from "zod"

export const inputParams = {
  "name": z.string().optional(),
  "parent": z.string().optional(),
  "type": z.string().optional()
}