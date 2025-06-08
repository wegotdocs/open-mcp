import { z } from "zod"

export const inputParamsSchema = {
  "dia": z.string().describe(" | Código | Día |\n|----------|----------|\n| 1  | Mañana   |\n| 2  | Pasado Mañana   |\n| 3  | Dentro de 3 días   |\n| 4  | Dentro de 4 días   |\n| 5  | Dentro de 5 días   |\n| 6  | Dentro de 6 días   |\n| 7  | Dentro de 7 días   "),
  "area": z.string().describe(" | Código | Área |\n|----------|----------|\n| p  | Península y Baleares  |\n| c  | Canarias   ")
}