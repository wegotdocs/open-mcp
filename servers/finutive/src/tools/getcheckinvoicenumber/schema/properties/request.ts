import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "type": z.string().optional(),
  "year": z.number().int().optional(),
  "invoice_number": z.string().optional(),
  "invoice_id": z.string().optional(),
  "prefix_id": z.string().optional(),
  "stakeholder_id": z.string().optional()
}