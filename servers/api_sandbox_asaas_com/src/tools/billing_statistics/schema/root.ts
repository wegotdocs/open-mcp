import { z } from "zod"

export const inputParamsSchema = {
  "customer": z.string().describe("Filter by unique customer identifier").optional(),
  "billingType": z.enum(["BOLETO","CREDIT_CARD","TRANSFER","DEPOSIT","DEBIT_CARD","PIX"]).describe("Filter by payment method").optional(),
  "status": z.enum(["PENDING","RECEIVED","CONFIRMED","OVERDUE"]).describe("Filter by status").optional(),
  "anticipated": z.boolean().describe("Filter early registrations or not").optional(),
  "dateCreated[ge]": z.string().describe("Filter from initial creation date").optional(),
  "dateCreated[le]": z.string().describe("Filter from final creation date").optional(),
  "dueDate[ge]": z.string().describe("Filter from initial due date").optional(),
  "dueDate[le]": z.string().describe("Filter by final due date").optional(),
  "estimatedCreditDate[ge]": z.string().describe("Filter from estimated initial credit date").optional(),
  "estimatedCreditDate[le]": z.string().describe("Filter from estimated end credit date").optional(),
  "externalReference": z.string().describe("Filter by your system identifier").optional()
}