import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.number().int().nullable().optional(),
  "role_id": z.number().int().nullable().optional(),
  "access": z.enum(["read","write","delete","admin"]),
  "created_by": z.number().int().optional(),
  "updated_at": z.string().datetime({ offset: true }).optional(),
  "updated_by": z.number().int().optional()
}