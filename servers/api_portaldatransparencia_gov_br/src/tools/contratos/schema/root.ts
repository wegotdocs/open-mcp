import { z } from "zod"

export const inputParamsSchema = {
  "dataInicial": z.string().describe("Data vigência início (DD/MM/AAAA)").optional(),
  "dataFinal": z.string().describe("Data vigência fim (DD/MM/AAAA)").optional(),
  "codigoOrgao": z.string().describe("<a href='/swagger-ui/index.html#/Órgãos/orgaosSiafi' target=\"_blank\">Código do Órgão (SIAFI)</a>"),
  "pagina": z.number().int().describe("Página consultada")
}