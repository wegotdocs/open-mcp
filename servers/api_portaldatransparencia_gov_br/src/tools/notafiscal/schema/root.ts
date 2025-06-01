import { z } from "zod"

export const inputParamsSchema = {
  "chaveUnicaNotaFiscal": z.string().describe("Chave única da nota fiscal")
}