import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("The ID of the tenant."),
  "reason": z.union([z.null(), z.string()]).optional(),
  "requestUid": z.string()
}