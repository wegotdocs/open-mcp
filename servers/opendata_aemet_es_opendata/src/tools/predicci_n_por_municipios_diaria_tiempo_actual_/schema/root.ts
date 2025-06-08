import { z } from "zod"

export const inputParamsSchema = {
  "municipio": z.string().describe("<a href='https://www.ine.es/daco/daco42/codmun/diccionario24.xlsx'\ntarget='_blank'>Código de municipio</a>")
}