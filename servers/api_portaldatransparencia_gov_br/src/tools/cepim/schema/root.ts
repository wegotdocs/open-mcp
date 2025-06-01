import { z } from "zod"

export const inputParamsSchema = {
  "cnpjSancionado": z.string().describe("CNPJ do Sancionado").optional(),
  "nomeSancionado": z.string().describe("Nome, nome fantasia ou razão social do Sancionado").optional(),
  "ufSancionado": z.string().describe("UF do Sancionado (sigla)").optional(),
  "orgaoEntidade": z.string().describe("Órgão/Entidade").optional(),
  "pagina": z.number().int().describe("Página consultada")
}