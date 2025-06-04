import { z } from "zod"

export const inputParamsSchema = {
  "numero": z.number().int(),
  "metrosCuadrados": z.number(),
  "precio": z.number().optional(),
  "establecimiento": z.number().int().optional(),
  "cliente": z.number().int().optional()
}