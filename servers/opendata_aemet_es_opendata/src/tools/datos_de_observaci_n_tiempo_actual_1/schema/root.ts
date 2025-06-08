import { z } from "zod"

export const inputParamsSchema = {
  "idema": z.string().describe("Índicativo climatológico de la EMA")
}