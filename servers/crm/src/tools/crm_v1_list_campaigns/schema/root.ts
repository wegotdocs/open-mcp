import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.string().describe("Limite de campanhas que virão por listagem. Valor padrão é 20. Valor máximo é 200").optional(),
  "page": z.string().describe("Número atual da página. Valor padrão é 1").optional(),
  "q": z.string().describe("Nome da campanha a ser buscada. Ex: a campanha \"Facebook Ads\" deve ser buscada como \"facebook%20ads\"").optional()
}