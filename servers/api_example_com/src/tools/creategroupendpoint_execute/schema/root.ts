import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Group name"),
  "icon": z.string().describe("Group icon").optional(),
  "isAdmin": z.boolean().describe("Is Admin?").optional(),
  "clientId": z.string().describe("Client ID")
}