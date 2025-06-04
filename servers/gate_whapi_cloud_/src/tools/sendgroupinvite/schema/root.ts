import { z } from "zod"

export const inputParamsSchema = {
  "InviteCode": z.string().regex(new RegExp("^[A-Za-z0-9]{14,22}$")).describe("Invite code")
}