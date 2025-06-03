import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "type": z.string()
}