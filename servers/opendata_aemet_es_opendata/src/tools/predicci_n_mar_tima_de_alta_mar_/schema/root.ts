import { z } from "zod"

export const inputParamsSchema = {
  "area": z.string().describe(" | Código | Área de Alta Mar |\n|----------|----------|\n| 0 | Océano Atlántico al sur de 35º N   |\n| 1  | Océano Atlántico al norte de 30º N   |\n| 2  | Mar Mediterráneo")
}