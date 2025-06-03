import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().describe("Page size for the paging request, default: 20").optional(),
  "page": z.number().describe("Page number for the paging request, default: 1").optional(),
  "name": z.string().describe("Filter payment customers by name").optional(),
  "email": z.string().describe("Filter payment customers by email").optional(),
  "cpf": z.string().describe("Filter payment customers by CPF").optional(),
  "cnpj": z.string().describe("Filter payment customers by CNPJ").optional()
}