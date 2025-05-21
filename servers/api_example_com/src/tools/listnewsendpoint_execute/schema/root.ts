import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID").optional(),
  "createdByUserId": z.string().describe("User ID").optional(),
  "type": z.enum(["NEWS","EVENT"]).describe("News type").optional()
}