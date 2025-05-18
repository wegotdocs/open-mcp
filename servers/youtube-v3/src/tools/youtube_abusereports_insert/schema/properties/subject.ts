import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "typeId": z.string().optional(),
  "url": z.string().optional()
}