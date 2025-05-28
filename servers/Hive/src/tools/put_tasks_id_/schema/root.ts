import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "Content-Type": z.string().optional(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}