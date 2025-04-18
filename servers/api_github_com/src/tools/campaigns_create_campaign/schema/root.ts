import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().min(1).max(50).describe("The name of the campaign"),
  "description": z.string().min(1).max(255).describe("A description for the campaign"),
  "managers": z.array(z.string().describe("The login of each manager")).max(10).describe("The logins of the users to set as the campaign managers. At this time, only a single manager can be supplied.").optional(),
  "team_managers": z.array(z.string().describe("The slug of each team")).max(10).describe("The slugs of the teams to set as the campaign managers.").optional(),
  "ends_at": z.string().datetime({ offset: true }).describe("The end date and time of the campaign. The date must be in the future."),
  "contact_link": z.string().url().nullable().describe("The contact link of the campaign. Must be a URI.").optional(),
  "code_scanning_alerts": z.array(z.object({ "repository_id": z.number().int().describe("The repository id"), "alert_numbers": z.array(z.number().int()).min(1).describe("The alert numbers") }).strict()).min(1).describe("The code scanning alerts to include in this campaign"),
  "generate_issues": z.boolean().describe("If true, will automatically generate issues for the campaign. The default is false.").optional()
}