import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "id": z.number().optional(),
  "organization_id": z.number().optional(),
  "name": z.string().optional(),
  "product_amount": z.string().optional(),
  "object_id": z.number().optional(),
  "from_account_id": z.number().optional(),
  "transaction_type": z.number().optional(),
  "vat": z.number().optional(),
  "course": z.number().optional(),
  "currency": z.number().optional(),
  "products": z.string().optional(),
  "page_size": z.number().optional(),
  "page": z.number().optional()
}