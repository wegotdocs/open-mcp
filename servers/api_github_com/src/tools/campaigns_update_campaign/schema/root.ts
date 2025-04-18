import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "campaign_number": z.number().int().describe("The campaign number."),
  "name": z.string().min(1).max(50).describe("The name of the campaign").optional(),
  "description": z.string().min(1).max(255).describe("A description for the campaign").optional(),
  "managers": z.array(z.string()).max(10).describe("The logins of the users to set as the campaign managers. At this time, only a single manager can be supplied.").optional(),
  "team_managers": z.array(z.string().describe("The slug of each team")).max(10).describe("The slugs of the teams to set as the campaign managers.").optional(),
  "ends_at": z.string().datetime({ offset: true }).describe("The end date and time of the campaign, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.").optional(),
  "contact_link": z.string().url().nullable().describe("The contact link of the campaign. Must be a URI.").optional(),
  "state": z.enum(["open","closed"]).describe("Indicates whether a campaign is open or closed").optional()
}