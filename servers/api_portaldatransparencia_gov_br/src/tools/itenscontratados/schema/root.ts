import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("ID do registro"),
  "pagina": z.number().int().describe("Página consultada")
}