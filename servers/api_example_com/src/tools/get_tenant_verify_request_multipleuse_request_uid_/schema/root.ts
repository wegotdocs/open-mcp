import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("tenant ID"),
  "multipleuse_request_uid": z.string().describe("multipleuse request ID")
}