import { z } from "zod"

export const inputParamsSchema = {
  "accountGroupId": z.string().describe("The ID of the account group.").optional(),
  "accountId": z.string().describe("The ID of the account.").optional(),
  "id": z.string().describe("The object’s conceptual ID from which the account and account group IDs synthesizes.").optional()
}