import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("The ID of the tenant."),
  "trace_id": z.string().describe("The ID of the notification.")
}