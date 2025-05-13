import { z } from "zod"

export const inputParamsSchema = {
  "Active": z.boolean().optional(),
  "DiscountPercent": z.number().optional(),
  "DueDays": z.number().optional(),
  "Id": z.string().optional(),
  "Name": z.string().optional(),
  "SyncToken": z.string().optional(),
  "Type": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}