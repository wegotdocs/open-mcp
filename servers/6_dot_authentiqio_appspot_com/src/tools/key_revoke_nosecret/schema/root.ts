import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().describe("primary email associated to Key (ID)"),
  "phone": z.string().describe("primary phone number, international representation"),
  "code": z.string().describe("verification code sent by email").optional()
}