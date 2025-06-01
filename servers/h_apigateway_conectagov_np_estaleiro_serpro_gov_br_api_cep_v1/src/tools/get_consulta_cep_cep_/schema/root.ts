import { z } from "zod"

export const inputParamsSchema = {
  "cep": z.string().describe("Número do CEP"),
  "x-cpf-usuario": z.string().describe("CPF do usuário da requisição")
}