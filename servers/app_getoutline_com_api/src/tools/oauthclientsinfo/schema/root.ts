import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Unique identifier for the OAuth client.").optional(),
  "clientId": z.string().describe("Public identifier for the OAuth client.").optional()
}