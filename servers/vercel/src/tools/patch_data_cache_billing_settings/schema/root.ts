import { z } from "zod"

export const inputParamsSchema = {
  "excessBillingEnabled": z.boolean().optional()
}