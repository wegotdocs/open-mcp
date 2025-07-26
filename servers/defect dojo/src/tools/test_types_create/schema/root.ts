import { z } from "zod"

export const inputParamsSchema = {
  "tags": z.array(z.string().min(1)).optional(),
  "name": z.string().min(1).max(200),
  "static_tool": z.boolean().optional(),
  "dynamic_tool": z.boolean().optional(),
  "active": z.boolean().optional()
}