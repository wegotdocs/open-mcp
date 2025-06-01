import { z } from "zod"

export const inputParamsSchema = {
  "numeroProcesso": z.string().describe("Número do processo"),
  "pagina": z.number().int().describe("Página consultada")
}