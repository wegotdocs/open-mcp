import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("Username for authentication"),
  "password": z.string().describe("Password for authentication")
}