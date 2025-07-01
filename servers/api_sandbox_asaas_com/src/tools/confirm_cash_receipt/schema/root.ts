import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique payment identifier in Asaas"),
  "paymentDate": z.string().date().describe("Date the customer made the payment").optional(),
  "value": z.number().describe("Amount paid by the customer").optional(),
  "notifyCustomer": z.boolean().describe("Send or not send notification of confirmed payment to the customer").optional()
}