import { z } from "zod"

export const inputParamsSchema = {
  "mesAnoInicio": z.string().describe("Mês ano início (MM/AAAA)"),
  "mesAnoFim": z.string().describe("Mês ano fim (MM/AAAA)"),
  "nomeFavorecido": z.string().describe("Nome Favorecido").optional(),
  "codigoFavorecido": z.string().describe("CNPJ / CPF / Código do favorecido").optional(),
  "tipoFavorecido": z.string().describe("Tipo de favorecido").optional(),
  "uf": z.string().describe("Sigla UF").optional(),
  "codigoIBGE": z.string().describe("Município").optional(),
  "orgaoSuperior": z.string().describe("Órgão superior (código SIAFI)").optional(),
  "orgao": z.string().describe("Órgão/Entidade vinculada (código SIAFI)").optional(),
  "unidadeGestora": z.string().describe("Unidade gestora (código SIAFI)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}