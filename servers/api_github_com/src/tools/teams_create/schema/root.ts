import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the team."),
  "description": z.string().describe("The description of the team.").optional(),
  "maintainers": z.array(z.string()).describe("List GitHub IDs for organization members who will become team maintainers.").optional(),
  "repo_names": z.array(z.string()).describe("The full name (e.g., \"organization-name/repository-name\") of repositories to add the team to.").optional(),
  "privacy": z.enum(["secret","closed"]).describe("The level of privacy this team should have. The options are:  \n**For a non-nested team:**  \n * `secret` - only visible to organization owners and members of this team.  \n * `closed` - visible to all members of this organization.  \nDefault: `secret`  \n**For a parent or child team:**  \n * `closed` - visible to all members of this organization.  \nDefault for child team: `closed`").optional(),
  "notification_setting": z.enum(["notifications_enabled","notifications_disabled"]).describe("The notification setting the team has chosen. The options are:  \n * `notifications_enabled` - team members receive notifications when the team is @mentioned.  \n * `notifications_disabled` - no one receives notifications.  \nDefault: `notifications_enabled`").optional(),
  "permission": z.enum(["pull","push"]).describe("**Closing down notice**. The permission that new repositories will be added to the team with when none is specified.").optional(),
  "parent_team_id": z.number().int().describe("The ID of a team to set as the parent team.").optional()
}