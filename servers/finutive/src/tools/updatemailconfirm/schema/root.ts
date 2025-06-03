import { z } from "zod"

export const inputParamsSchema = {
  "otp": z.string().describe("One-time password"),
  "mail": z.string().describe("Email address to confirm")
}