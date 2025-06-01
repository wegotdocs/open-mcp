import { z } from "zod"

export const inputParamsSchema = {
  "codigoSancionado": z.string().describe("CNPJ ou CPF Sancionado").optional(),
  "nomeSancionado": z.string().describe("Nome, nome fantasia ou razão social do Sancionado").optional(),
  "orgaoSancionador": z.string().describe("Órgão Sancionador").optional(),
  "dataInicialSancao": z.string().describe("Data Inicial da Sanção (DD/MM/AAAA)").optional(),
  "dataFinalSancao": z.string().describe("Data Final da Sanção (DD/MM/AAAA)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}