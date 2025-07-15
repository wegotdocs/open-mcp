import { z } from "zod"

export const inputParamsSchema = {
  "deal_id": z.string().describe("ID da negociação").optional(),
  "page": z.string().describe("Número da página listada. Valor padrão é 1").optional(),
  "limit": z.string().describe("Limite de anotações que virão por listagem. Valor padrão é 20. Valor máximo é 200").optional(),
  "start_date": z.string().describe("Filtrar por data - início").optional(),
  "end_date": z.string().describe("Filtrar por data - fim").optional()
}