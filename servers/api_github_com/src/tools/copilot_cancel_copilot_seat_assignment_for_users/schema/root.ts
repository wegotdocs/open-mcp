import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_usernames": z.array(z.string()).min(1).describe("The usernames of the organization members for which to revoke access to GitHub Copilot.")
}