import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().describe("Total installment or billing amount"),
  "installmentCount": z.number().int().describe("Number of installments").optional(),
  "billingTypes": z.array(z.enum(["UNDEFINED","BOLETO","CREDIT_CARD","MUNDIPAGG_CIELO","TRANSFER","DEPOSIT","DEBIT_CARD","PIX","ASAAS_MONEY"]).describe("Form of payment")).describe("Form of payment")
}