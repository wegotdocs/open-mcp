import { z } from "zod"

export const inputParamsSchema = {
  "invoiceIds": z.array(z.string()).optional(),
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "updatedAt": z.string().datetime({ offset: true }).optional()
}