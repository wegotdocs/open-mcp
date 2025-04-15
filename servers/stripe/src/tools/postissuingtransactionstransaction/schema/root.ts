import { z } from "zod"

export const inputParamsSchema = {
  "transaction": z.string().max(5000)
}