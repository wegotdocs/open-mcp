import { z } from "zod"

export const inputParamsSchema = {
  "mesAnoLancamento": z.number().int().describe("Mês e Ano de lançamento (AAAAMM)"),
  "funcao": z.string().describe("Função (código SIAFI)").optional(),
  "subfuncao": z.string().describe("Subfunção (código SIAFI)").optional(),
  "programa": z.string().describe("Programa (código SIAFI)").optional(),
  "acao": z.string().describe("Ação (código SIAFI)").optional(),
  "grupoDespesa": z.string().describe("Grupo Despesa (código SIAFI)").optional(),
  "elementoDespesa": z.string().describe("Elemento Despesa (código SIAFI)").optional(),
  "modalidadeAplicacao": z.string().describe("Modalidade de Aplicação (código SIAFI)").optional(),
  "idPlanoOrcamentario": z.number().int().describe("Id Plano orçamentário").optional(),
  "pagina": z.number().int().describe("Página consultada")
}