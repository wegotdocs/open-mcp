import { z } from "zod"

export const inputParamsSchema = {
  "component": z.string().optional(),
  "enable_engagement_epic_mapping": z.boolean().optional(),
  "enabled": z.boolean().optional(),
  "engagement": z.number().int().optional(),
  "id": z.number().int().optional(),
  "jira_instance": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "prefetch": z.array(z.enum(["engagement","jira_instance","product"])).describe("List of fields for which to prefetch model instances and add those to the response").optional(),
  "product": z.number().int().optional(),
  "project_key": z.string().optional(),
  "push_all_issues": z.boolean().optional(),
  "push_notes": z.boolean().optional()
}