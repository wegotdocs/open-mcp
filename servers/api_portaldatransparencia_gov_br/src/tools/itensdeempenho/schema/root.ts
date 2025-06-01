import { z } from "zod"

export const inputParamsSchema = {
  "codigoDocumento": z.string().describe("Código do empenho (Unidade Gestora + Gestão + Número do documento)"),
  "pagina": z.number().int().describe("Página consultada")
}