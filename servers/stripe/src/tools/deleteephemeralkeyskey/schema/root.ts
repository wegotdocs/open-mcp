import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().max(5000)
}