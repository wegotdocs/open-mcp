import { z } from "zod"

export const inputParamsSchema = {
  "mesAno": z.number().int().describe("Ano e mês de referência (AAAAMM)"),
  "codigoIbge": z.string().describe("Código IBGE"),
  "pagina": z.number().int().describe("Página consultada")
}