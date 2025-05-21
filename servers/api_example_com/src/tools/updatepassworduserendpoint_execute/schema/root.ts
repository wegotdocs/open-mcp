import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("User ID"),
  "encryptedPassword": z.string().describe("Encrypted password")
}