import { z } from "zod"

export const inputParamsSchema = {
  "dataInicial": z.string().describe("Data de abertura inicial (DD/MM/AAAA)").optional(),
  "dataFinal": z.string().describe("Data de abertura final (DD/MM/AAAA)").optional(),
  "codigoOrgao": z.string().describe("<a href='/swagger-ui/index.html#/Órgãos/orgaosSiafi' target=\"_blank\">Código do Órgão (SIAFI)</a>"),
  "pagina": z.number().int().describe("Página consultada")
}