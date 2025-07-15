import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().optional(),
  "id": z.string().optional(),
  "type": z.string().optional()
}