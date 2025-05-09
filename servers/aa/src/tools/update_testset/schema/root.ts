import { z } from "zod"

export const inputParamsSchema = {
  "testset_id": z.string(),
  "name": z.string(),
  "csvdata": z.array(z.record(z.any()))
}