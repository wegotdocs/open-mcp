import { z } from "zod"

export const inputParamsSchema = {
  "anoInicio": z.number().int(),
  "codigo": z.string().optional(),
  "pagina": z.number().int()
}