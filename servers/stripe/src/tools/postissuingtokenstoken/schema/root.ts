import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().max(5000)
}