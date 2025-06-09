import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "b_language": z.number().int(),
  "dark_mode_enabled": z.boolean(),
  "double_auth": z.number().int()
}