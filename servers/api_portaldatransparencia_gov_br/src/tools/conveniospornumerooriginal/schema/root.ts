import { z } from "zod"

export const inputParamsSchema = {
  "numeroOriginal": z.string().describe("Número original do convênio"),
  "pagina": z.number().int().describe("Página consultada")
}