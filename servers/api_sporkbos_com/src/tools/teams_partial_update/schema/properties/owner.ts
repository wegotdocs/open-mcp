import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "name": z.string(),
  "email": z.string().email()
}