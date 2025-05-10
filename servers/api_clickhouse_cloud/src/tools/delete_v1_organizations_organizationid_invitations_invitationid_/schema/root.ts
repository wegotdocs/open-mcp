import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that has the invitation."),
  "invitationId": z.string().uuid().describe("ID of the requested organization.")
}