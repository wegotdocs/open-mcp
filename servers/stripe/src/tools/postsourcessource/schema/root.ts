import { z } from "zod"

export const inputParamsSchema = {
  "source": z.string().max(5000)
}