import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("Tenant ID"),
  "request_uid": z.string().describe("Request ID")
}