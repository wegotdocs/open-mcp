import { z } from "zod"

export const inputParamsSchema = {
  "user": z.number().int(),
  "expires": z.string().datetime({ offset: true }).nullable().optional(),
  "last_used": z.string().datetime({ offset: true }).nullable().optional(),
  "key": z.string().min(40).max(40).optional(),
  "write_enabled": z.boolean().describe("Permit create/update/delete operations using this key").optional(),
  "description": z.string().max(200).optional()
}