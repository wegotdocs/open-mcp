import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "user_id": z.string().describe("User ID"),
  "role": z.enum(["USER","USER_ADMIN"]).describe("New user role")
}