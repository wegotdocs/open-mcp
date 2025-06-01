import { z } from "zod"

export const inputParamsSchema = {
  "codigo": z.string().describe("CPF/NIS"),
  "pagina": z.number().int().describe("Página consultada")
}