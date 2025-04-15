import { z } from "zod"

export const inputParamsSchema = {
  "test_clock": z.string().max(5000)
}