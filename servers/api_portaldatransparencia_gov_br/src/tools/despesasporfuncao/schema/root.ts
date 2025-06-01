import { z } from "zod"

export const inputParamsSchema = {
  "ano": z.number().int().describe("Ano da despesa (AAAA)"),
  "funcao": z.string().describe("Função (código SIAFI)").optional(),
  "subfuncao": z.string().describe("Subfunção (código SIAFI)").optional(),
  "programa": z.string().describe("Programa (código SIAFI)").optional(),
  "acao": z.string().describe("Ação (código SIAFI)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}