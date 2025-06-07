import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().min(3).max(50).describe("Username"),
  "password": z.string().min(6).describe("Password"),
  "email": z.union([z.string(), z.null()]).describe("Email address").optional(),
  "full_name": z.union([z.string(), z.null()]).describe("Full name").optional(),
  "is_admin": z.boolean().describe("Admin privileges").optional()
}