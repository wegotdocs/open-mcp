import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "username": z.string().optional(),
  "email": z.string().optional(),
  "password": z.string().optional()
}