import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("Password Reset Key")
}