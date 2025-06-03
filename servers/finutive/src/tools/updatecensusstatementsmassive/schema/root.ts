import { z } from "zod"

export const inputParamsSchema = {
  "period": z.string(),
  "model": z.string(),
  "businessIds": z.array(z.string())
}