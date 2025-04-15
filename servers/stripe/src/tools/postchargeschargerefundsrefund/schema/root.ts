import { z } from "zod"

export const inputParamsSchema = {
  "charge": z.string(),
  "refund": z.string()
}