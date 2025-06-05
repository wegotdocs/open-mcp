import { z } from "zod"

export const inputParamsSchema = {
  "access_token": z.string().optional(),
  "code": z.string().optional(),
  "id_token": z.string().optional()
}