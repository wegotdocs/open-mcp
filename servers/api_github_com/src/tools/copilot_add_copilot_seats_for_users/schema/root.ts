import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_usernames": z.array(z.string()).min(1).describe("The usernames of the organization members to be granted access to GitHub Copilot.")
}