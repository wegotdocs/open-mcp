import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "visibility": z.enum(["all","members","admin","self"]).optional(),
  "is_private": z.boolean().optional(),
  "created_at": z.string().datetime({ offset: true }).optional(),
  "created_by": z.number().int().optional(),
  "updated_at": z.string().datetime({ offset: true }).optional(),
  "updated_by": z.number().int().optional()
}