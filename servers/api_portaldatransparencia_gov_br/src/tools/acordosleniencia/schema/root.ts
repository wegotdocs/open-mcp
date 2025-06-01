import { z } from "zod"

export const inputParamsSchema = {
  "cnpjSancionado": z.string().describe("CNPJ sancionado").optional(),
  "nomeSancionado": z.string().describe("Nome, nome fantasia ou razão social do sancionado").optional(),
  "situacao": z.string().describe("Situação do acordo").optional(),
  "dataInicialSancao": z.string().describe("Data inicial da sanção (DD/MM/AAAA)").optional(),
  "dataFinalSancao": z.string().describe("Data final da sanção (DD/MM/AAAA)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}