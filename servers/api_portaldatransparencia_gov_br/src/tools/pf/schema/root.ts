import { z } from "zod"

export const inputParamsSchema = {
  "cpf": z.string().describe("CPF").optional(),
  "nis": z.string().describe("NIS").optional()
}