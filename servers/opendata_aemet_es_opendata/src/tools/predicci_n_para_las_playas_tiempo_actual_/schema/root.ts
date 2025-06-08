import { z } from "zod"

export const inputParamsSchema = {
  "playa": z.string().describe("<a\nhref='https://www.aemet.es/documentos/es/eltiempo/prediccion/playas/Playas_codigos.csv'\ntarget='_blank'>Código de playa</a>")
}