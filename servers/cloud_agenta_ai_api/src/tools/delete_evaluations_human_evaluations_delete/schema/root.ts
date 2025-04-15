import { z } from "zod"

export const inputParams = {
  "evaluations_ids": z.array(z.string())
}