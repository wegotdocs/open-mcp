import { z } from "zod"

export const inputParamsSchema = {
  "is_designer": z.string().optional(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}