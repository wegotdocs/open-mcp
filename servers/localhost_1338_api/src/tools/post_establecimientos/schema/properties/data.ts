import { z } from "zod"

export const inputParamsSchema = {
  "nombre": z.string(),
  "direccion": z.string(),
  "trasteros": z.array(z.number().int()).optional()
}