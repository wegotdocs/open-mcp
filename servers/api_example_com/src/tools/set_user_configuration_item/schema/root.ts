import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string(),
  "value": z.any()
}