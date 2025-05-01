import { z } from "zod"

export const inputParamsSchema = {
  "DisplayName": z.string().optional()
}