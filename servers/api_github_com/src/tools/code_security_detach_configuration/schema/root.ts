import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("An array of repository IDs to detach from configurations.").optional()
}