import { z } from "zod"

export const inputParamsSchema = {
  "api_key": z.string().optional(),
  "enabled": z.boolean().optional(),
  "site": z.string().optional()
}