import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().describe("email").optional(),
  "password": z.string().describe("password")
}