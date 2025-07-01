import { z } from "zod"

export const inputParamsSchema = {
  "identificationField": z.string().describe("Digitizable bill line"),
  "scheduleDate": z.string().describe("Payment scheduling date").optional(),
  "description": z.string().describe("Bill Payment Description").optional(),
  "discount": z.number().describe("Discount attributed to payment").optional(),
  "interest": z.number().describe("Interest attributed to payment").optional(),
  "fine": z.number().describe("Fine assigned to payment").optional(),
  "dueDate": z.string().date().describe("Expiration date of the account if it is the type that does not have this information").optional(),
  "value": z.number().describe("Account value if it is the type that does not have this information (Ex: credit card invoices)").optional(),
  "externalReference": z.string().describe("Unique identifier of the bill in your system").optional()
}