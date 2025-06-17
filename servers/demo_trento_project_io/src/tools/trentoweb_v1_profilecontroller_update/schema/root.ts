import { z } from "zod"

export const inputParamsSchema = {
  "analytics_enabled": z.boolean().describe("Whether user analytics collection is enabled").optional(),
  "current_password": z.string().describe("User current password, used to set a new password").optional(),
  "email": z.string().email().describe("User email").optional(),
  "fullname": z.string().describe("User full name").optional(),
  "password": z.string().describe("User new password").optional(),
  "password_confirmation": z.string().describe("User new password, should be the same as password field").optional()
}