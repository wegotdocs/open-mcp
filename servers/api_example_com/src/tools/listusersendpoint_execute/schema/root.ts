import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID").optional(),
  "isAdmin": z.string().describe("Is admin").optional(),
  "isActive": z.string().describe("Is active").optional(),
  "isPasswordReset": z.string().describe("Is password reset").optional(),
  "adminType": z.enum(["REPORT","LOCAL","GLOBAL","MONITOR"]).describe("Admin types").optional(),
  "groupId": z.number().describe("Group ID").optional(),
  "deleted": z.string().describe("Deleted status").optional()
}