import { z } from "zod"

export const inputParamsSchema = {
  "sales_order": z.string().optional(),
  "Content-Type": z.string().optional(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}