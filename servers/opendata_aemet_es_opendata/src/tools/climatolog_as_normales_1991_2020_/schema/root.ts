import { z } from "zod"

export const inputParamsSchema = {
  "idema": z.string().describe("Indicativo climatológico de la EMA")
}