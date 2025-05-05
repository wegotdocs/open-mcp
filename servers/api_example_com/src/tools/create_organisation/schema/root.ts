import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(64),
  "description": z.string().max(1048576),
  "taskRule": z.string().min(1).max(64).optional(),
  "observableRule": z.string().min(1).max(64).optional(),
  "locked": z.boolean().optional()
}