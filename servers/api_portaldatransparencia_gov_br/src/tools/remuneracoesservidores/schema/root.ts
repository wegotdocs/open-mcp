import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("idServidorAposentadoPensionista").optional(),
  "cpf": z.string().describe("CPF do Servidor").optional(),
  "mesAno": z.number().int().describe("Ano e mês de referência (AAAAMM)"),
  "pagina": z.number().int().describe("Página consultada")
}