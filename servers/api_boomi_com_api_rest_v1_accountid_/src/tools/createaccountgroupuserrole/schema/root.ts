import { z } from "zod"

export const inputParamsSchema = {
  "accountGroupId": z.string().describe("The ID of the account group.").optional(),
  "firstName": z.string().describe("The first name of the user.").optional(),
  "id": z.string().describe("The object’s conceptual ID, which is synthesized from the role, user, and account group IDs.").optional(),
  "lastName": z.string().describe("The last name of the user.").optional(),
  "notifyUser": z.boolean().describe("If true, which is the default, users receive an email notification when adding them to the account group.").optional(),
  "roleId": z.string().describe("The ID of the role.").optional(),
  "userId": z.string().describe("The user ID.").optional()
}