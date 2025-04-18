import { z } from "zod"

export const inputParamsSchema = {
  "migration_id": z.number().int().describe("The unique identifier of the migration."),
  "exclude": z.array(z.string()).optional()
}