import { z } from "zod"

export const inputParamsSchema = {
  "page": z.string().describe("Número atual da página").optional(),
  "limit": z.string().describe("Limite de empresas que virão por listagem. Valor padrão é 20. Valor máximo é 200").optional(),
  "order": z.string().describe("Campo a ser ordenado. Valor padrão é \"name\"").optional(),
  "direction": z.string().describe("Ordenação da lista. \"asc\" ou \"desc\", padrão é \"asc\"").optional(),
  "organization_segment": z.string().describe("ID do segmento. Busca todas as empresas que têm esse segmento").optional(),
  "user_id": z.string().describe("ID do usuário. Busca as empresas do usuário anterior no parâmetro").optional(),
  "q": z.string().describe("String com o nome da empresa. Busca as empresas com a string anterior no parâmetro").optional()
}