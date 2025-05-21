import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID").optional(),
  "isDraft": z.string().describe("Is draft").optional()
}