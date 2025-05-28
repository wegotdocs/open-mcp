import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "type": z.string().optional(),
  "source": z.string().optional(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}