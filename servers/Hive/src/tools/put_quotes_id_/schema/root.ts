import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "Authorization": z.string().optional()
}