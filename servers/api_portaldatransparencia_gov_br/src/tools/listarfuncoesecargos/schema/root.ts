import { z } from "zod"

export const inputParamsSchema = {
  "pagina": z.number().int().describe("Página consultada")
}