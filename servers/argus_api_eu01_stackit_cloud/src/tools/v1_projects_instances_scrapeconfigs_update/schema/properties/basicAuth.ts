import { z } from "zod"

export const inputParamsSchema = {
  "password": z.string().min(1).max(200).describe("password").optional(),
  "username": z.string().min(1).max(200).describe("username").optional()
}