import { z } from "zod"

export const inputParamsSchema = {
  "codPlanoOrcamentario": z.string().describe("Código Plano Orçamentária").optional(),
  "descPlanoOrcamentario": z.string().describe("Descrição Plano Orçamentário").optional(),
  "codPOIdentfAcompanhamento": z.string().describe("Identificado de acompanhamento").optional(),
  "ano": z.number().int().describe("Ano"),
  "pagina": z.number().int().describe("Página consultada")
}