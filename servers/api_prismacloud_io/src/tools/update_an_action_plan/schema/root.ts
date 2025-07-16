import { z } from "zod"

export const inputParamsSchema = {
  "action-plan-id": z.string().describe("action plan id"),
  "x-redlock-auth": z.string().describe("Authorize using Authentication token")
}