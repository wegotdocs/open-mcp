import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("tenant ID"),
  "request_uid": z.string().describe("return the status of verify with request request_uid")
}