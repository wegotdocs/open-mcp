import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.string().describe("Limite de motivos da perda que virão por listagem. Valor padrão é 20. Valor máximo é 200").optional(),
  "page": z.string().describe("Página da listagem de motivos da perda. Valor padrão é 1").optional(),
  "q": z.string().describe("Nome do motivo da perda a ser buscado. Ex: a fonte \"Motivo 1\" deve ser buscada como \"motivo%201\"").optional(),
  "order": z.string().describe("Campo a ser ordenado. Valor padrão e aceito é \"name\"").optional()
}