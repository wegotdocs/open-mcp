import { z } from "zod"

export const inputParamsSchema = {
  "createdAt": z.string().datetime({ offset: true }).optional(),
  "updatedAt": z.string().datetime({ offset: true }).optional()
}