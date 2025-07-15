import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.string().describe("Limite de funis de vendas que virão por listagem. Valor padrão é 20. Valor máximo é 200").optional(),
  "page": z.string().describe("Página da listagem de funis de vendas. Valor padrão é 1").optional()
}