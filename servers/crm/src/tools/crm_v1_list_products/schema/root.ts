import { z } from "zod"

export const inputParamsSchema = {
  "page": z.string().describe("Número atual da página").optional(),
  "limit": z.string().describe("Limite de produtos que virão por listagem. Valor padrão é 20. Valor máximo é 200").optional()
}