import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().optional()
}