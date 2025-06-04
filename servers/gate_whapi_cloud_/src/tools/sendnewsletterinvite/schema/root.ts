import { z } from "zod"

export const inputParamsSchema = {
  "NewsletterInviteCode": z.string().regex(new RegExp("^[A-Za-z0-9]{24}$")).describe("Newsletter Invite code")
}