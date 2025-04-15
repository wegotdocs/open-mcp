import { z } from "zod"

export const inputParamsSchema = {
  "inviteId": z.string().describe("The Team invite code ID.")
}