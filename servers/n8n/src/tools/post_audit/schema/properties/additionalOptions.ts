import { z } from "zod"

export const inputParamsSchema = {
  "daysAbandonedWorkflow": z.number().int().describe("Days for a workflow to be considered abandoned if not executed").optional(),
  "categories": z.array(z.enum(["credentials","database","nodes","filesystem","instance"])).optional()
}