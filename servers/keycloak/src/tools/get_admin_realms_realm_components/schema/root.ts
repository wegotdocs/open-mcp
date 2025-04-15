import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "parent": z.string().optional(),
  "type": z.string().optional()
}