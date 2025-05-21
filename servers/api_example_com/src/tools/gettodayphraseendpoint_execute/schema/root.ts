import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID"),
  "groupId": z.number().describe("Group ID")
}