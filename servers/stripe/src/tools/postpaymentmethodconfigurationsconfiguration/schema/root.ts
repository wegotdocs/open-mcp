import { z } from "zod"

export const inputParamsSchema = {
  "configuration": z.string().max(5000)
}