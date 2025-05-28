import { z } from "zod"

export const inputParamsSchema = {
  "sales_order_reference": z.string().optional(),
  "task_assigned": z.string().optional(),
  "Content-Type": z.string().optional(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}