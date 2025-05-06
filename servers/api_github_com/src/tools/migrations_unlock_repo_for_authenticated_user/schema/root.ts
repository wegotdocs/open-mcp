import { z } from "zod"

export const inputParamsSchema = {
  "migration_id": z.number().int().describe("The unique identifier of the migration."),
  "repo_name": z.string().describe("repo_name parameter")
}