import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().describe("The sensitive code received from Vercel"),
  "state": z.string().describe("The state received from the initialization request").optional(),
  "client_id": z.string().describe("The integration client id"),
  "client_secret": z.string().describe("The integration client secret"),
  "redirect_uri": z.string().describe("The integration redirect URI").optional()
}