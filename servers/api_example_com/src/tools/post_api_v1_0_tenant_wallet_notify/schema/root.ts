import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("The ID of the tenant."),
  "actions": z.union([z.null(), z.array(z.object({ "action": z.string(), "data": z.union([z.null(), z.record(z.record(z.any()))]).optional() }))]).optional(),
  "channel": z.union([z.null(), z.string()]).optional(),
  "did": z.string(),
  "message": z.union([z.null(), z.string()]).optional(),
  "title": z.union([z.null(), z.string()]).optional()
}