import { z } from "zod"

export const inputParamsSchema = {
  "Disabled": z.boolean().optional(),
  "id": z.string().optional(),
  "secret": z.string().optional()
}