import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["INDIVIDUAL","BUSINESS"]).describe("Customer type"),
  "name": z.string().describe("Customer name"),
  "email": z.string().describe("Customer email").optional(),
  "cpf": z.string().describe("Customer CPF").optional(),
  "cnpj": z.string().describe("Customer CNPJ, if type is `BUSINESS`").optional()
}