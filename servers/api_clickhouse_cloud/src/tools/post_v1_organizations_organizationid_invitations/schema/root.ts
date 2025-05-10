import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization to invite a user to."),
  "email": z.string().email().describe("Email of the invited user. Only a user with this email can join using the invitation. The email is stored in a lowercase form.").optional(),
  "role": z.enum(["admin","developer"]).describe("Role of the member in the organization.").optional()
}