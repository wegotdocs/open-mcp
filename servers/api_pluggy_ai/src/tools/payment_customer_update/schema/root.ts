import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Payment customer primary identifier"),
  "b_id": z.string().describe("Primary identifier"),
  "type": z.enum(["INDIVIDUAL","BUSINESS"]).describe("Customer type"),
  "name": z.string().describe("Customer name"),
  "email": z.string().describe("Customer email").optional(),
  "cpf": z.string().describe("Customer CPF").optional(),
  "cnpj": z.string().describe("Customer CNPJ, if type is `BUSINESS`").optional()
}