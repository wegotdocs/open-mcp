import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_teams": z.array(z.string()).min(1).describe("List of team names within the organization to which to grant access to GitHub Copilot.")
}