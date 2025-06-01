import { z } from "zod"

export const inputParamsSchema = {
  "unidadeGestora": z.string().describe("Unidade gestora emitente (código SIAFI)").optional(),
  "gestao": z.string().describe("Gestão (código SIAFI)").optional(),
  "dataEmissao": z.string().describe("Data de emissão (DD/MM/AAAA)"),
  "fase": z.number().int().describe("Fase da despesa (1 - Empenho, 2 - Liquidação, 3 - Pagamento)"),
  "pagina": z.number().int().describe("Página consultada")
}