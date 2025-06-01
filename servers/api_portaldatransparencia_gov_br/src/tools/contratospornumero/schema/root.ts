import { z } from "zod"

export const inputParamsSchema = {
  "numero": z.string().describe("Número do contrato"),
  "pagina": z.number().int().describe("Página consultada")
}