import { z } from "zod"

export const inputParamsSchema = {
  "codigo": z.string().describe("Código do Órgão (SIAPE)").optional(),
  "descricao": z.string().describe("Descrição do Órgão (SIAPE)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}