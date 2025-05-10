import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization the member is part of."),
  "userId": z.string().uuid().describe("ID of the user to patch"),
  "role": z.enum(["admin","developer"]).describe("Role of the member in the organization.").optional()
}