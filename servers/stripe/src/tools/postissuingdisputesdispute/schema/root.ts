import { z } from "zod"

export const inputParamsSchema = {
  "dispute": z.string().max(5000)
}