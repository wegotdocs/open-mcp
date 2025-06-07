import { z } from "zod"

export const inputParamsSchema = {
  "subscription_id": z.union([z.string(), z.null()]).describe("Azure subscription ID").optional()
}