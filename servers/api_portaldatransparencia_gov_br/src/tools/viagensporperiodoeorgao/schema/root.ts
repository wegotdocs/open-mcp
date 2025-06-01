import { z } from "zod"

export const inputParamsSchema = {
  "dataIdaDe": z.string().describe("Data de ida a partir de (DD/MM/AAAA)"),
  "dataIdaAte": z.string().describe("Data de ida até (DD/MM/AAAA)"),
  "dataRetornoDe": z.string().describe("Data de retorno a partir de (DD/MM/AAAA)"),
  "dataRetornoAte": z.string().describe("Data de retorno até (DD/MM/AAAA)"),
  "codigoOrgao": z.string().describe("<a href='/swagger-ui/index.html#/Órgãos/orgaosSiafi' target=\"_blank\">Código do Órgão (SIAFI)</a>"),
  "pagina": z.number().int().describe("Página consultada")
}