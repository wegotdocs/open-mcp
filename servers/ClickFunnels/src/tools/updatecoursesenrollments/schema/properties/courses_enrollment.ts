import { z } from "zod"

export const inputParamsSchema = {
  "suspended": z.union([z.boolean().describe("Suspended"), z.null().describe("Suspended")]).describe("Suspended").optional(),
  "suspension_reason": z.union([z.string().describe("Suspension Reason"), z.null().describe("Suspension Reason")]).describe("Suspension Reason").optional()
}