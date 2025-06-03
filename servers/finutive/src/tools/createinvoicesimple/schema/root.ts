import { z } from "zod"

export const inputParamsSchema = {
  "invoiceId": z.string(),
  "stakeholder_name": z.string().optional(),
  "stakeholder_id": z.string().optional(),
  "date": z.string().datetime({ offset: true }).optional(),
  "total_vat": z.number().optional(),
  "total_amount": z.number().optional(),
  "type": z.string().optional(),
  "accounting_account": z.string().optional(),
  "reference": z.string().optional()
}