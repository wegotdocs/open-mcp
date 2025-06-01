import { z } from "zod"

export const inputParamsSchema = {
  "mesAno": z.number().int(),
  "codigoIbge": z.string(),
  "pagina": z.number().int().optional()
}