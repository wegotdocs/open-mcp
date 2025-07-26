import { z } from "zod"

export const inputParamsSchema = {
  "jira_id": z.string().min(1).max(200),
  "jira_key": z.string().min(1).max(200),
  "jira_creation": z.string().datetime({ offset: true }).nullable().describe("The date a Jira issue was created from this finding.").optional(),
  "jira_change": z.string().datetime({ offset: true }).nullable().describe("The date the linked Jira issue was last modified.").optional(),
  "jira_project": z.number().int().nullable().optional(),
  "finding": z.number().int().nullable().optional(),
  "engagement": z.number().int().nullable().optional(),
  "finding_group": z.number().int().nullable().optional()
}