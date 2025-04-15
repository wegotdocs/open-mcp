import { z } from "zod"

export const inputParamsSchema = {
  "template": z.string().max(5000)
}