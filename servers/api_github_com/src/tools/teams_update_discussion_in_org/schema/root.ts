import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "title": z.string().describe("The discussion post's title.").optional(),
  "body": z.string().describe("The discussion post's body text.").optional()
}