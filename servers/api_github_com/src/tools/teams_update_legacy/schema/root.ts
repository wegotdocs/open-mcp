import { z } from "zod"

export const inputParamsSchema = {
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "name": z.string().describe("The name of the team."),
  "description": z.string().describe("The description of the team.").optional(),
  "privacy": z.enum(["secret","closed"]).describe("The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:  \n**For a non-nested team:**  \n * `secret` - only visible to organization owners and members of this team.  \n * `closed` - visible to all members of this organization.  \n**For a parent or child team:**  \n * `closed` - visible to all members of this organization.").optional(),
  "notification_setting": z.enum(["notifications_enabled","notifications_disabled"]).describe("The notification setting the team has chosen. Editing teams without specifying this parameter leaves `notification_setting` intact. The options are: \n * `notifications_enabled` - team members receive notifications when the team is @mentioned.  \n * `notifications_disabled` - no one receives notifications.").optional(),
  "permission": z.enum(["pull","push","admin"]).describe("**Closing down notice**. The permission that new repositories will be added to the team with when none is specified.").optional(),
  "parent_team_id": z.number().int().nullable().describe("The ID of a team to set as the parent team.").optional()
}