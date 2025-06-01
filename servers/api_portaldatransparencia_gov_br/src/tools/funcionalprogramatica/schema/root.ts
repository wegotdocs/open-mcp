import { z } from "zod"

export const inputParamsSchema = {
  "ano": z.number().int(),
  "pagina": z.number().int()
}