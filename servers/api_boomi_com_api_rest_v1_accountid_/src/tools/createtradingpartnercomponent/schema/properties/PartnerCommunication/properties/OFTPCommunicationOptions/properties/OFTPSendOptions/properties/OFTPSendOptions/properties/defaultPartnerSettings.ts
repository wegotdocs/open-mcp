import { z } from "zod"

export const inputParamsSchema = {
  "cd": z.boolean().optional(),
  "operation": z.string().optional(),
  "sfiddesc": z.string().optional(),
  "sfiddsn": z.string().optional()
}