import { z } from "zod"

export const inputParamsSchema = {
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "body": z.string().describe("The discussion comment's body text.")
}