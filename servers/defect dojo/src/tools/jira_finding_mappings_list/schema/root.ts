import { z } from "zod"

export const inputParamsSchema = {
  "engagement": z.number().int().optional(),
  "finding": z.number().int().optional(),
  "finding_group": z.number().int().optional(),
  "id": z.number().int().optional(),
  "jira_id": z.string().optional(),
  "jira_key": z.string().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional()
}