import { z } from "zod"

export const inputParamsSchema = {
  "mesExtratoInicio": z.string().describe("Mês extrato início (MM/AAAA)").optional(),
  "mesExtratoFim": z.string().describe("Mês extrato fim (MM/AAAA)").optional(),
  "dataTransacaoInicio": z.string().describe("Data transação início (DD/MM/AAAA)").optional(),
  "dataTransacaoFim": z.string().describe("Data transação fim (DD/MM/AAAA)").optional(),
  "tipoCartao": z.number().int().describe("Tipo de cartão (CPGF=1 ou CPCC=2 ou CPDC=3)").optional(),
  "codigoOrgao": z.string().describe("Órgão/Entidade (Código SIAFI)").optional(),
  "cpfPortador": z.string().describe("Portador (CPF)").optional(),
  "cpfCnpjFavorecido": z.string().describe("Favorecido (CPF/CNPJ)").optional(),
  "valorDe": z.string().describe("Valor de (####,##)").optional(),
  "valorAte": z.string().describe("Valor até (####,##)").optional(),
  "pagina": z.number().int().describe("Página consultada")
}