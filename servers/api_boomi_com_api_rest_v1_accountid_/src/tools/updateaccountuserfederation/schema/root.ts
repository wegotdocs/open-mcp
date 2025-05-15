import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "accountId": z.string().describe("The account ID.").optional(),
  "federationId": z.string().describe("The federation ID uniquely identifies the user.").optional(),
  "b_id": z.string().describe("The object’s conceptual ID, which is synthesized from the federation, user, and account IDs.").optional(),
  "userId": z.string().describe("The user ID.").optional()
}