import { z } from "zod"

export const inputParamsSchema = {
  "cpf": z.string().describe("CPF of the payer"),
  "cnpj": z.string().describe("CNPJ of the payer").optional()
}