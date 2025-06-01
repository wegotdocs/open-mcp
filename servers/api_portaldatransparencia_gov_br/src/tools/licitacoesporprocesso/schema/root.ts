import { z } from "zod"

export const inputParamsSchema = {
  "processo": z.string().describe("Número do Processo")
}