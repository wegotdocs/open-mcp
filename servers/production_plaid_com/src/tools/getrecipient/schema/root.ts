import { z } from "zod"

export const inputParamsSchema = {
  "recipientId": z.string().describe("Recipient Identifier. Uniquely identifies the recipient"),
  "OAUTH-STATE-ID": z.string().describe("The value that is passed into the OAuth URI 'state' query parameter.").optional()
}