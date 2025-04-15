import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("The user name for login").optional(),
  "password": z.string().describe("The password for login in clear text").optional()
}