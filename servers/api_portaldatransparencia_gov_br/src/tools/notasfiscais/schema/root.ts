import { z } from "zod"

export const inputParamsSchema = {
  "cnpjEmitente": z.string().describe("CNPJ do emitente").optional(),
  "codigoOrgao": z.string().describe("Código do Órgão (SIAFI)").optional(),
  "nomeProduto": z.string().describe("Nome do produto").optional(),
  "pagina": z.number().int().describe("Página consultada")
}