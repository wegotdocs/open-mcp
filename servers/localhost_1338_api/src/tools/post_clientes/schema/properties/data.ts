import { z } from "zod"

export const inputParamsSchema = {
  "nombre": z.string().optional(),
  "dni": z.string().optional(),
  "telefono": z.string().optional(),
  "trasteros": z.array(z.number().int()).optional()
}