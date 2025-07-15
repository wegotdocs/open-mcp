import { z } from "zod"

export const inputParamsSchema = {
  "active": z.string().optional()
}