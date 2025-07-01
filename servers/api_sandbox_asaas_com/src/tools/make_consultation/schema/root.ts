import { z } from "zod"

export const inputParamsSchema = {
  "customer": z.string().describe("Unique customer identifier in Asaas").optional(),
  "cpfCnpj": z.string().describe("CPF or CNPJ of the customer. Enter this field if your client is not registered with Asaas").optional()
}