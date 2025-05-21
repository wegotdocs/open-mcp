import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID").optional(),
  "status": z.string().describe("Status").optional(),
  "type": z.enum(["ONE_TIME","RECURRING","CONDITIONAL"]).describe("Survey type").optional(),
  "groupId": z.number().describe("Group ID").optional()
}