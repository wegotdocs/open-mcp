import { z } from "zod"

export const inputParamsSchema = {
  "nis": z.string().describe("NIS (sem máscara, somente números)"),
  "anoMesReferencia": z.number().int().describe("Ano e mês de referência (AAAAMM)").optional(),
  "anoMesCompetencia": z.number().int().describe("Ano e mês de competência (AAAAMM)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}