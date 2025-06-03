import { z } from "zod"

export const inputParamsSchema = {
  "Disabled": z.boolean().optional(),
  "package_name": z.string().optional(),
  "secret": z.string().optional()
}