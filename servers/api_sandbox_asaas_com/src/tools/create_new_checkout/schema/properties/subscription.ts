import { z } from "zod"

export const inputParamsSchema = {
  "cycle": z.enum(["WEEKLY","BIWEEKLY","MONTHLY","BIMONTHLY","QUARTERLY","SEMIANNUALLY","YEARLY"]).describe("Billing frequency").optional(),
  "endDate": z.string().date().describe("Deadline for payments to be due").optional(),
  "nextDueDate": z.string().date().describe("Due date of the next payment to be generated").optional()
}