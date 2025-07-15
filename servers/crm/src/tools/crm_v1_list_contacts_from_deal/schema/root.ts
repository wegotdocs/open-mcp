import { z } from "zod"

export const inputParamsSchema = {
  "page": z.string().describe("Página da listagem de contatos da negociação. Valor padrão é 1").optional(),
  "limit": z.string().describe("Limite de contatos que virão por listagem. Valor padrão é 20. Valor máximo é 200").optional()
}