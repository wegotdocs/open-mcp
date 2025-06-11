import { z } from "zod"

export const inputParamsSchema = {
  "q": z.string().describe("Search query (name, logged on user name, IP address, etc.)").optional(),
  "limit": z.number().int().describe("Limit number of devices to return").optional()
}