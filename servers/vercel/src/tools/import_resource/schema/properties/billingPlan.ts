import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "type": z.enum(["prepayment","subscription"]),
  "name": z.string(),
  "description": z.string().optional(),
  "paymentMethodRequired": z.boolean().optional(),
  "cost": z.string().optional(),
  "details": z.array(z.object({ "label": z.string(), "value": z.string().optional() }).strict()).optional(),
  "heightlightedDetails": z.array(z.object({ "label": z.string(), "value": z.string().optional() }).strict()).optional(),
  "effectiveDate": z.string().optional()
}