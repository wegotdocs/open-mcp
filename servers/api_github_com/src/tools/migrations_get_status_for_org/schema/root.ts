import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "migration_id": z.number().int().describe("The unique identifier of the migration."),
  "exclude": z.array(z.literal("repositories").describe("Allowed values that can be passed to the exclude param.")).describe("Exclude attributes from the API response to improve performance").optional()
}