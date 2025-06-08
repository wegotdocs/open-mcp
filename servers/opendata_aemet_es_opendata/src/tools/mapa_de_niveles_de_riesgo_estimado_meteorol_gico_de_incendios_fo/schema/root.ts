import { z } from "zod"

export const inputParamsSchema = {
  "area": z.string().describe(" | Código | Área |\n|----------|----------|\n| p  | Península y Baleares  |\n| c  | Canarias   ")
}