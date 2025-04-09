import { z } from "zod"

export const inputParams = {
  "inviteId": z.string().describe("The Team invite code ID.")
}