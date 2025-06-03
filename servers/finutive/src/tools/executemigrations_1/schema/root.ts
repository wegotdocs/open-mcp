import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().int().optional(),
  "initialPage": z.number().int().optional(),
  "threads": z.number().int().optional(),
  "batch": z.boolean().optional(),
  "token": z.string().optional(),
  "invoices": z.boolean().optional(),
  "documents": z.boolean().optional()
}