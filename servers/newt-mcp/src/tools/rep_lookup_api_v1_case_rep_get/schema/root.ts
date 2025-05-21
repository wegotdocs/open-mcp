import { z } from "zod"

export const inputParamsSchema = {
  "case_number": z.number().int().gte(0).lt(100000000)
}