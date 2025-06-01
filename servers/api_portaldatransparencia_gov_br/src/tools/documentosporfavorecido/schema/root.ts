import { z } from "zod"

export const inputParamsSchema = {
  "codigoPessoa": z.string().describe("Código do Favorecido (CPF, CNPJ ou código do SIAFI)"),
  "fase": z.number().int().describe("Fase da despesa (1 - Empenho, 2 - Liquidação, 3 - Pagamento)"),
  "ano": z.number().int().describe("Ano de emissão do documento"),
  "ug": z.string().describe("Código da unidade gestora emissora do documento").optional(),
  "gestao": z.string().describe("Código da gestão do documento").optional(),
  "ordenacaoResultado": z.number().int().describe("Ordenação de Resultado (1 - Valor Ascendente, 2 - Valor Descendente, 3 - Data Ascendente, 4 - Data Descendente)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}