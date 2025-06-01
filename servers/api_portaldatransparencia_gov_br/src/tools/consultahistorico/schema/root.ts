import { z } from "zod"

export const inputParamsSchema = {
  "codigoDocumento": z.string().describe("Código do empenho (Unidade Gestora + Gestão + Número do documento)"),
  "sequencial": z.number().int().describe("Número sequencial do item de empenho"),
  "pagina": z.number().int().describe("Página consultada")
}