import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the user").optional(),
  "email": z.string().describe("Email of the user").optional(),
  "username": z.string().describe("Username of the user").optional()
}