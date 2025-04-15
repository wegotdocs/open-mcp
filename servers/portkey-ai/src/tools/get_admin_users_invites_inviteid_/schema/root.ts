import { z } from "zod"

export const inputParamsSchema = {
  "inviteId": z.string().describe("string")
}