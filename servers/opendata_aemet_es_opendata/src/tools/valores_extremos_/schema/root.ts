import { z } from "zod"

export const inputParamsSchema = {
  "parametro": z.string().describe(" | Código | Parámetro Meteorológico |\n|----------|----------|\n| P  | Precipitación   |\n| T  | Temperatura   |\n| V  | Viento "),
  "idema": z.string().describe("Indicativo climatológico de la EMA")
}