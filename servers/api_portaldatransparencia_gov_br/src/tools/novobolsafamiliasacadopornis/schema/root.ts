import { z } from "zod"

export const inputParamsSchema = {
  "nis": z.string(),
  "anoMesReferencia": z.number().int().optional(),
  "anoMesCompetencia": z.number().int().optional(),
  "pagina": z.number().int().optional()
}