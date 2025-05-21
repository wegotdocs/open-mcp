import { z } from "zod"

export const inputParamsSchema = {
  "clientIdEncrypted": z.string().describe("Client ID Encrypted"),
  "apiKeyEncrypted": z.string().describe("API Key Encrypted")
}