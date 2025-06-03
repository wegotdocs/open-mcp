import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "bank": z.string().optional(),
  "name": z.string().optional(),
  "iban": z.string().optional(),
  "bank_name": z.string().optional(),
  "user": z.string().optional(),
  "password": z.string().optional(),
  "id": z.string().optional(),
  "cuenta_impuestos_por_defecto": z.boolean().optional(),
  "default_invoice_account": z.boolean().optional()
}