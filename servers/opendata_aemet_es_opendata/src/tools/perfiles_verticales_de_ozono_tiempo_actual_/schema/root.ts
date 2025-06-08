import { z } from "zod"

export const inputParamsSchema = {
  "estacion": z.string().describe(" | Código | Estación |\n|----------|----------|\n| canarias  | Izaña   |\n| peninsula  | Madrid   ")
}