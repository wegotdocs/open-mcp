import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().describe("Email of the user").optional(),
  "username": z.string().describe("Username of the user").optional(),
  "password": z.string().describe("Password")
}