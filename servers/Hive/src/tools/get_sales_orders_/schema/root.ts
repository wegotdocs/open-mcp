import { z } from "zod"

export const inputParamsSchema = {
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}