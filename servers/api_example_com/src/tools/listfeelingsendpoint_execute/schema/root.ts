import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID").optional(),
  "userId": z.string().describe("User ID").optional(),
  "typeId": z.number().describe("Type ID").optional(),
  "groupId": z.number().describe("Group ID").optional()
}