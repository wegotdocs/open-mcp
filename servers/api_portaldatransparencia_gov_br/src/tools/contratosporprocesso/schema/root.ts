import { z } from "zod"

export const inputParamsSchema = {
  "processo": z.string().describe("Número do processo"),
  "pagina": z.number().int().describe("Página consultada")
}