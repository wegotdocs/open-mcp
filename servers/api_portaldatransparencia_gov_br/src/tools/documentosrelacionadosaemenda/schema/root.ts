import { z } from "zod"

export const inputParamsSchema = {
  "codigo": z.string().describe("Código da emenda"),
  "pagina": z.number().int().describe("Página consultada")
}