import { z } from "zod"

export const inputParamsSchema = {
  "q": z.string().describe("Termo de busca para filtrar contatos por nome").optional(),
  "title": z.string().describe("Filtrar por cargo/título").optional(),
  "limit": z.number().int().describe("Número máximo de contatos a retornar").optional()
}