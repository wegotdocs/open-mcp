import { z } from "zod"

export const inputParamsSchema = {
  "deal_pipeline_id": z.string().describe("ID do Funil de Vendas. Caso o parâmetro não seja passado ou não existe um funil de vendas do ID especificado, será retornada as etapas do funil de vendas padrão").optional(),
  "limit": z.string().describe("Limite de etapas do funil de vendas que virão por listagem.  Valor padrão é 12. Valor máximo é 12").optional(),
  "page": z.string().describe("Página da listagem de etapas do funil de venda").optional()
}