import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("List of repository IDs to enable for GitHub Actions.")
}