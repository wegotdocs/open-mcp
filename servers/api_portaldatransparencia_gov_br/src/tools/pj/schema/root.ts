import { z } from "zod"

export const inputParamsSchema = {
  "cnpj": z.string().describe("CNPJ")
}