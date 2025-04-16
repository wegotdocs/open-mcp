import { z } from "zod"

export const inputParamsSchema = {
  "user": z.string().describe("A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.").optional()
}