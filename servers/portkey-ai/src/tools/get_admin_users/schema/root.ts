import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().int().optional(),
  "currentPage": z.number().int().optional(),
  "role": z.enum(["admin","member","owner"]).optional(),
  "email": z.string().email().optional(),
  "x-portkey-api-key": z.string().optional()
}