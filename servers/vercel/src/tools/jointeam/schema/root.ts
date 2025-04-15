import { z } from "zod"

export const inputParamsSchema = {
  "inviteCode": z.string().describe("The invite code to join the team.").optional()
}