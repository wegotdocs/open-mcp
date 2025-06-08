import { z } from "zod"

export const inputParamsSchema = {
  "area": z.string().describe(" | Código de  Área Montañosa |  Área Montañosa |\n|----------|----------|\n| 0 | Pirineo Catalán  |\n| 1  | Pirineo Navarro y Aragonés")
}