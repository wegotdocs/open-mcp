import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("API Key name"),
  "clientId": z.string().describe("Client ID")
}