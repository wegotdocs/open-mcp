import { z } from "zod"

export const inputParamsSchema = {
  "domain": z.string().max(5000)
}