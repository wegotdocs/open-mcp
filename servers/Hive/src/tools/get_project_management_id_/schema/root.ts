import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}