import { z } from "zod"

export const inputParamsSchema = {
  "billingStatus": z.enum(["billingStatusUnspecified","billingStatusPending","billingStatusActive","billingStatusInactive"]).describe("The current billing profile status.").optional()
}