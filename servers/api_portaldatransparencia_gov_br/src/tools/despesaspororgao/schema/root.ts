import { z } from "zod"

export const inputParamsSchema = {
  "ano": z.number().int().describe("Ano da despesa (AAAA)"),
  "orgaoSuperior": z.string().describe("Órgão superior (código SIAFI)").optional(),
  "orgao": z.string().describe("Órgão/Entidade vinculada (código SIAFI)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}