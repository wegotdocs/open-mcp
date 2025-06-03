import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "search": z.string().optional(),
  "type": z.enum(["CLIENT","PROVIDER","TPV"]),
  "length": z.number().int().optional(),
  "start": z.number().int().optional(),
  "readAll": z.boolean().optional(),
  "order_column": z.number().int(),
  "order_dir": z.number().int(),
  "activity_line": z.string().optional(),
  "accounting_account": z.string().optional(),
  "sage_accounting_account": z.string().optional(),
  "tax_regime": z.string().optional()
}