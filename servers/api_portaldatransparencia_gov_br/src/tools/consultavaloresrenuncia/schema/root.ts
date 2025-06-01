import { z } from "zod"

export const inputParamsSchema = {
  "nomeSiglaUF": z.string().describe("Nome ou Sigla UF").optional(),
  "codigoIbge": z.string().describe("Código IBGE").optional(),
  "cnpj": z.string().describe("CNPJ").optional(),
  "pagina": z.number().int().describe("Página consultada")
}