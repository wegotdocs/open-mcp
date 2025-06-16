import { z } from "zod"

export const inputParamsSchema = {
  "tokenID": z.string().describe("Unique identifier of the publishing token."),
  "valid_until": z.string().datetime({ offset: true }).describe("The new expiration date for the publishing token."),
  "token_name": z.string().describe("The new name for the publishing token.").optional()
}