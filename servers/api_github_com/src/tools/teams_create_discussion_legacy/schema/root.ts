import { z } from "zod"

export const inputParamsSchema = {
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "title": z.string().describe("The discussion post's title."),
  "body": z.string().describe("The discussion post's body text."),
  "private": z.boolean().describe("Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.").optional()
}