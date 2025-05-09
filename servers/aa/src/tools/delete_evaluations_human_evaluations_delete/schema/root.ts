import { z } from "zod"

export const inputParamsSchema = {
  "evaluations_ids": z.array(z.string())
}