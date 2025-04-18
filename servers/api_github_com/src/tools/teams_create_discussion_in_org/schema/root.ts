import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "title": z.string().describe("The discussion post's title."),
  "body": z.string().describe("The discussion post's body text."),
  "private": z.boolean().describe("Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.").optional()
}