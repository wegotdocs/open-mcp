import { z } from "zod"

export const inputParamsSchema = {
  "action-plan-id": z.string().describe("action plan id"),
  "limit": z.number().int().describe("page limit, default 100").optional(),
  "next_page_token": z.string().describe("page token").optional(),
  "x-redlock-auth": z.string().describe("Authorize using Authentication token")
}