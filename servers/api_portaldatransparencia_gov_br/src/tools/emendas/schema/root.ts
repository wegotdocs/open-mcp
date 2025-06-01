import { z } from "zod"

export const inputParamsSchema = {
  "codigoEmenda": z.string().describe("Código da Emenda").optional(),
  "numeroEmenda": z.string().describe("Número da emenda").optional(),
  "nomeAutor": z.string().describe("Nome do Autor").optional(),
  "tipoEmenda": z.string().describe("Tipo de emenda").optional(),
  "ano": z.number().int().describe("Ano").optional(),
  "codigoFuncao": z.string().describe("Código da função").optional(),
  "codigoSubfuncao": z.string().describe("Código da subfunção").optional(),
  "pagina": z.number().int().describe("Página consultada")
}