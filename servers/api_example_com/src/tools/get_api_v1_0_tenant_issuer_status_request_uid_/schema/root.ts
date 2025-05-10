import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("The ID of the tenant."),
  "request_uid": z.string().describe("The ID of the issuance request.")
}