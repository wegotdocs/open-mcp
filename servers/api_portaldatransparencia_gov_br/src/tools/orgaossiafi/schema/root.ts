import { z } from "zod"

export const inputParamsSchema = {
  "codigo": z.string().describe("Código do Órgão (SIAFI)").optional(),
  "descricao": z.string().describe("Descrição do Órgão (SIAFI)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}