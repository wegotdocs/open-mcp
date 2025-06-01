import { z } from "zod"

export const inputParamsSchema = {
  "cpfCnpj": z.string().describe("CPF/CNPJ do Fornecedor"),
  "pagina": z.number().int().describe("Página consultada")
}