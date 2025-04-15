import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().int().optional(),
  "currentPage": z.number().int().optional(),
  "role": z.enum(["admin","member"]).optional(),
  "email": z.string().email().optional(),
  "status": z.enum(["pending","cancelled","accepted","expired"]).optional()
}