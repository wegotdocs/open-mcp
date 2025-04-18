import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "invitee_id": z.number().int().describe("**Required unless you provide `email`**. GitHub user ID for the person you are inviting.").optional(),
  "email": z.string().describe("**Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.").optional(),
  "role": z.enum(["admin","direct_member","billing_manager","reinstate"]).describe("The role for the new member. \n * `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.  \n * `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.  \n * `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization. \n * `reinstate` - The previous role assigned to the invitee before they were removed from your organization. Can be one of the roles listed above. Only works if the invitee was previously part of your organization.").optional(),
  "team_ids": z.array(z.number().int()).describe("Specify IDs for the teams you want to invite new members to.").optional()
}