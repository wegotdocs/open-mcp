import { z } from "zod"

export const inputParamsSchema = {
  "codigo": z.string().describe("Código do registro")
}