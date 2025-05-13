import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().optional(),
  "end_date": z.string().optional(),
  "columns": z.string().optional(),
  "summarize_column_by": z.string().optional(),
  "department": z.string().optional(),
  "vendor": z.string().optional(),
  "class": z.string().optional(),
  "accounting_method": z.string().optional(),
  "qzurl": z.string().optional(),
  "customer": z.string().optional()
}