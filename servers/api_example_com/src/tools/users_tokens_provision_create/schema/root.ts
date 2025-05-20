import { z } from "zod"

export const inputParamsSchema = {
  "expires": z.string().datetime({ offset: true }).nullable().optional(),
  "write_enabled": z.boolean().describe("Permit create/update/delete operations using this key").optional(),
  "description": z.string().max(200).optional(),
  "username": z.string().min(1),
  "password": z.string().min(1)
}