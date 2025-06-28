import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("Username for the new account"),
  "password": z.string().describe("Password for the new account")
}