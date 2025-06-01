import { z } from "zod"

export const inputParamsSchema = {
  "dataInicial": z.string().describe("Data referência início (DD/MM/AAAA)").optional(),
  "dataFinal": z.string().describe("Data referência fim (DD/MM/AAAA)").optional(),
  "dataUltimaLiberacaoInicial": z.string().describe("Data da última liberação de recurso início (DD/MM/AAAA)").optional(),
  "dataUltimaLiberacaoFinal": z.string().describe("Data da última liberação de recurso fim (DD/MM/AAAA)").optional(),
  "dataVigenciaInicial": z.string().describe("Data de vigência início (DD/MM/AAAA)").optional(),
  "dataVigenciaFinal": z.string().describe("Data de vigência fim (DD/MM/AAAA)").optional(),
  "convenente": z.string().describe("Convenente").optional(),
  "tipoConvenente": z.string().describe("Tipo de Convenente").optional(),
  "numero": z.string().describe("Número do convênio").optional(),
  "numeroOriginal": z.string().describe("Número original do convênio").optional(),
  "codigoOrgao": z.string().describe("<a href='/swagger-ui/index.html#/Órgãos/orgaosSiafi' target=\"_blank\">Código do Órgão (SIAFI)</a>").optional(),
  "uf": z.string().describe("Sigla UF").optional(),
  "codigoIBGE": z.string().describe("Município (Código IBGE)").optional(),
  "situacao": z.string().describe("Código Situação").optional(),
  "tipoInstrumento": z.string().describe("Código Tipo de Instrumento").optional(),
  "funcao": z.string().describe("Código Função").optional(),
  "subfuncao": z.string().describe("Código Subfunção").optional(),
  "valorLiberadoDe": z.string().describe("Valor liberado de (Formato: 1.000,00)").optional(),
  "valorLiberadoAte": z.string().describe("Valor liberado até (Formato: 1.000,00)").optional(),
  "valorTotalDe": z.string().describe("Valor total de (Formato: 1.000,00)").optional(),
  "valorTotalAte": z.string().describe("Valor total até (Formato: 1.000,00)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}