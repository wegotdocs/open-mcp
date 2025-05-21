import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID").optional(),
  "isAdmin": z.string().describe("Is admin").optional(),
  "adminType": z.enum(["REPORT","LOCAL","GLOBAL","MONITOR"]).describe("Admin types").optional(),
  "groupId": z.number().describe("Group ID").optional()
}