import { z } from "zod"

export const inputParamsSchema = {
  "accountId": z.string().describe("The account ID.").optional(),
  "firstName": z.string().describe("The first name of a user in the account.").optional(),
  "id": z.string().optional(),
  "lastName": z.string().describe("The last name of a user in the account.").optional(),
  "notifyUser": z.boolean().describe("If true").optional(),
  "roleId": z.string().describe("The ID of the role.").optional(),
  "userId": z.string().describe("The user ID.").optional()
}