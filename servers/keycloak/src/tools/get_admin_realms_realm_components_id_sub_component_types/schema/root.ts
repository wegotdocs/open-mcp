import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "type": z.string().optional()
}