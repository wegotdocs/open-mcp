import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "account_number": z.string().optional(),
  "id": z.number().int().optional(),
  "ids": z.array(z.string()).optional(),
  "search": z.string().optional(),
  "basic_barcode": z.string().optional(),
  "barcode": z.string().optional(),
  "date": z.string().optional(),
  "page_size": z.number().int().optional(),
  "page": z.number().int().optional(),
  "on_sell": z.boolean().optional(),
  "on_buy": z.boolean().optional()
}