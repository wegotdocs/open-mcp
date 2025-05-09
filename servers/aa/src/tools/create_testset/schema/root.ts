import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "csvdata": z.array(z.record(z.any()))
}