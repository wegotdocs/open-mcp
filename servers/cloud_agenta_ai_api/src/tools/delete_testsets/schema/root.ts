import { z } from "zod"

export const inputParams = {
  "testset_ids": z.array(z.string())
}