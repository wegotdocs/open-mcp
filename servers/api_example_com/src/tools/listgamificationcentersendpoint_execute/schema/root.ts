import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID").optional(),
  "groupId": z.number().describe("Group ID").optional(),
  "limit": z.number().describe("Limit of records to return").optional()
}