import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("The ID of the tenant."),
  "request_uid": z.string().describe("The ID of the Verify request."),
  "availableActions": z.array(z.object({ "action": z.string(), "data": z.union([z.null(), z.record(z.record(z.any()))]).optional() })),
  "messages": z.array(z.object({ "body": z.string(), "lang": z.string(), "mimeType": z.union([z.null(), z.string()]).optional(), "title": z.string() })),
  "reason": z.string(),
  "status": z.string()
}