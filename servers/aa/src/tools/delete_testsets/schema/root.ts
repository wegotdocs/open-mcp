import { z } from "zod"

export const inputParamsSchema = {
  "testset_ids": z.array(z.string())
}