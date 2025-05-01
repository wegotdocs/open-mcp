import { z } from "zod"

export const inputParamsSchema = {
  "BillableExpenseTracking": z.boolean().optional(),
  "POCustomField": z.array(z.object({ "CustomField": z.array(z.object({ "BooleanValue": z.boolean().optional(), "Name": z.string().optional(), "Type": z.string().optional() })).optional() })).optional(),
  "TrackingByCustomer": z.boolean().optional()
}