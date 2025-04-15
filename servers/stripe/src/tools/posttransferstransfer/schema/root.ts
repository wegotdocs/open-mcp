import { z } from "zod"

export const inputParamsSchema = {
  "transfer": z.string().max(5000)
}