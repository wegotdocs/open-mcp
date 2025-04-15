import { z } from "zod"

export const inputParamsSchema = {
  "charge": z.string().max(5000)
}