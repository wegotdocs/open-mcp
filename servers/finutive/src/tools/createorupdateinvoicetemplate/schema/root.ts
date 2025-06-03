import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "business_id": z.string().optional(),
  "template_id": z.string().optional(),
  "name": z.string().optional(),
  "stakeholder_id": z.string().optional(),
  "payment_type": z.string().optional(),
  "bank_account_invoice_id": z.string().optional(),
  "language": z.string().optional(),
  "currency": z.string().optional(),
  "has_irpf": z.boolean().optional(),
  "irpf_id": z.string().optional(),
  "description": z.string().optional(),
  "activity_type": z.string().optional(),
  "price_definition": z.string().optional(),
  "products_data": z.array(z.string()).optional(),
  "expense_account": z.string().optional(),
  "activity_line": z.string().optional(),
  "taxes_name": z.string().optional(),
  "tax_regime": z.string().optional(),
  "pdf_template": z.string().optional(),
  "mail_template": z.string().optional(),
  "enable_mail_template": z.boolean().optional(),
  "serie": z.string().optional(),
  "type": z.string().optional(),
  "valid_vats": z.array(z.number().int()).optional()
}