import { z } from "zod"

export const inputParamsSchema = {
  "value_list": z.string().max(5000)
}