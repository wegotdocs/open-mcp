import { z } from "zod"

export const inputParamsSchema = {
  "members": z.string().describe("An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.")
}