import { z } from "zod"

export const inputParamsSchema = {
  "refresh_token": z.string().optional()
}