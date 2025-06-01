import { z } from "zod"

export const inputParamsSchema = {
  "codigoDocumento": z.string().describe("Código do documento (Unidade Gestora + Gestão + Número do documento)"),
  "fase": z.number().int().describe("Fase da despesa (1 - Empenho, 2 - Liquidação, 3 - Pagamento)")
}