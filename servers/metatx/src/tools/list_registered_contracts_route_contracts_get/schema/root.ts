import { z } from "zod"

export const inputParamsSchema = {
  "blockchain": z.string().optional(),
  "address": z.string().optional(),
  "limit": z.number().int().optional(),
  "offset": z.number().int().optional()
}