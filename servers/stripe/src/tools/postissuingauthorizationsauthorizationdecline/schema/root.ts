import { z } from "zod"

export const inputParamsSchema = {
  "authorization": z.string().max(5000)
}