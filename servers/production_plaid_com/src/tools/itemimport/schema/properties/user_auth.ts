import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().describe("Opaque user identifier"),
  "auth_token": z.string().describe("Authorization token Plaid will use to aggregate this user’s accounts")
}