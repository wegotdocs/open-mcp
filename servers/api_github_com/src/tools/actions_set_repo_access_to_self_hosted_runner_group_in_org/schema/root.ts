import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("List of repository IDs that can access the runner group.")
}