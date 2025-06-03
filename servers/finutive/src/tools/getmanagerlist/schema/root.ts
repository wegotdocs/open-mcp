import { z } from "zod"

export const inputParamsSchema = {
  "include_admins": z.boolean().optional()
}