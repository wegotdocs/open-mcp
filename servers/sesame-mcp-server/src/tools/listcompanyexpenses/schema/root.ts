import { z } from "zod"

export const inputParamsSchema = {
  "employeeId": z.string().uuid().describe("Filter expenses by employee id").optional(),
  "from": z.string().date().describe("From date").optional(),
  "to": z.string().date().describe("To date").optional(),
  "paymentMethodIds": z.string().describe("Payment method").optional(),
  "status": z.enum(["pending","accepted","rejected","pending_info","personal"]).describe("Expense status").optional(),
  "limit": z.number().int().describe("Limit work entries").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}