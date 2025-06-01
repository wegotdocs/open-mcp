import { z } from "zod"

export const inputParamsSchema = {
  "codigoUG": z.string().describe("<a href='/swagger-ui.html#!/Licita231245es32do32Poder32Executivo32Federal/ugsUsingGET' >Código da Unidade Gestora</a>"),
  "numero": z.string().describe("Número da Licitação (NNNNNAAAA)"),
  "codigoModalidade": z.string().describe("<a href='/swagger-ui.html#!/Licita231245es32do32Poder32Executivo32Federal/modalidadesUsingGET' >Código da Modalidade da Licitação</a>")
}