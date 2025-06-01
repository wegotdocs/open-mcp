import { z } from "zod"

export const inputParamsSchema = {
  "cpf": z.string().describe("CPF"),
  "pagina": z.number().int().describe("Página consultada")
}