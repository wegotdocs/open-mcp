import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "reaction_id": z.number().int().describe("The unique identifier of the reaction.")
}