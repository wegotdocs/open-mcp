import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "payment": z.string().describe("Filter anticipations of a payment").optional(),
  "installment": z.string().describe("Filter advances for an installment payment").optional(),
  "status": z.enum(["PENDING","DENIED","CREDITED","DEBITED","CANCELLED","OVERDUE","SCHEDULED"]).describe("Filter by status").optional()
}