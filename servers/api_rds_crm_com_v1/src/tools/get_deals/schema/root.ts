import { z } from "zod"

export const inputParamsSchema = {
  "query": z.string().describe("Termo de busca para filtrar oportunidades").optional(),
  "limit": z.number().int().describe("Número máximo de oportunidades a retornar").optional()
}