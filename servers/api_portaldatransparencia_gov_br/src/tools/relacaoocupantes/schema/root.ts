import { z } from "zod"

export const inputParamsSchema = {
  "codigoOrgaoResponsavelGestaoSiafi": z.string().describe("<a href='/swagger-ui/index.html#/Órgãos/orgaosSiafi' target=\"_blank\">Código do Órgão Responsável pela Gestão(SIAFI)</a>").optional(),
  "descricaoOrgaoOcupante": z.string().describe("Descrição do Órgão do Ocupante").optional(),
  "cpfOcupante": z.string().describe("CPF Ocupante").optional(),
  "dataInicioOcupacao": z.string().describe("Data início ocupação(DD/MM/AAAA)").optional(),
  "dataFimOcupacao": z.string().describe("Data fim ocupação (DD/MM/AAAA)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}