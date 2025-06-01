import { z } from "zod"

export const inputParamsSchema = {
  "mesAno": z.number().int().describe("Mês e Ano (AAAAMM)"),
  "codigoOrgao": z.string().describe("Órgão (código SIAFI)").optional(),
  "tipoTransferencia": z.number().int().describe("<a href='/swagger-ui.html#!/Despesas32P250blicas/listaTipoTransferenciaUsingGET' >ID do Tipo de Transferência</a>").optional(),
  "uf": z.string().describe("Sigla UF").optional(),
  "codigoIbge": z.string().describe("Município").optional(),
  "pagina": z.number().int().describe("Página consultada")
}