import { z } from "zod"

export const inputParamsSchema = {
  "tipoestacion": z.string().describe(" | Código | Tipo de Estación |\n|----------|----------|\n| automaticas  | Estaciones Automáticas   |\n| completas  | Estaciones Completas   |\n| pluviometricas  | Estaciones Pluviométricas   |\n| termometricas  | Estaciones Termométricas   ")
}