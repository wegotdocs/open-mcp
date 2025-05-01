import { z } from "zod"

export const inputParamsSchema = {
  "BillCustomers": z.boolean().optional(),
  "MarkTimeEntriesBillable": z.boolean().optional(),
  "ShowBillRateToAll": z.boolean().optional(),
  "UseServices": z.boolean().optional(),
  "WorkWeekStartDate": z.string().optional()
}