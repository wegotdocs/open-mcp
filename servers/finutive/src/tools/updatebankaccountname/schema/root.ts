import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "name": z.string().optional(),
  "id": z.string().optional(),
  "cuenta_impuestos_por_defecto": z.number().int().optional(),
  "default_invoice_account": z.number().int().optional()
}