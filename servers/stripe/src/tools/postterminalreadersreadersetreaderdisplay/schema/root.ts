import { z } from "zod"

export const inputParamsSchema = {
  "reader": z.string().max(5000)
}