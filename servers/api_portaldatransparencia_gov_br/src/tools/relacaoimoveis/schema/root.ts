import { z } from "zod"

export const inputParamsSchema = {
  "codigoOrgaoSiafiResponsavelGestao": z.string().describe("<a href='/swagger-ui/index.html#/Órgãos/orgaosSiafi' target=\"_blank\">Código do Órgão (SIAFI)</a>").optional(),
  "situacao": z.string().describe("<a href='/swagger-ui.html#!/Im243veis32Funcionais/situacaoImovelUsingGET' >Situação Imóvel</a>").optional(),
  "regiao": z.string().describe("Região").optional(),
  "cep": z.string().describe("CEP").optional(),
  "endereco": z.string().describe("Endereço").optional(),
  "pagina": z.number().int().describe("Página consultada")
}