import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "ids": z.array(z.string())
}