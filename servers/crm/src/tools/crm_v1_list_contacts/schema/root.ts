import { z } from "zod"

export const inputParamsSchema = {
  "page": z.string().describe("Número atual da página").optional(),
  "limit": z.string().describe("Limite de contatos que serão listados. Valor padrão é 20. Valor máximo é 200").optional(),
  "order": z.string().describe("Campo a ser ordenado. Valor padrão é \"name\"").optional(),
  "direction": z.string().describe("Ordenação da lista. \"asc\" ou \"desc\", padrão é \"asc\"").optional(),
  "email": z.string().describe("Filtra os resultados pelo e-mail informado").optional(),
  "q": z.string().describe("Nome do contato a ser buscado").optional(),
  "phone": z.string().describe("Filtra os resultados pelo telefone informado").optional(),
  "title": z.string().describe("Filtra os resultados pelo cargo informado").optional()
}