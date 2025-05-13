import { z } from "zod"

export const inputParamsSchema = {
  "grantType": z.string().optional(),
  "username": z.string().optional(),
  "password": z.string().optional()
}