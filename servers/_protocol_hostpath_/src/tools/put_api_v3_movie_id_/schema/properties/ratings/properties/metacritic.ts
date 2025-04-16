import { z } from "zod"

export const inputParamsSchema = {
  "votes": z.number().int().optional(),
  "value": z.number().optional(),
  "type": z.enum(["user","critic"]).optional()
}