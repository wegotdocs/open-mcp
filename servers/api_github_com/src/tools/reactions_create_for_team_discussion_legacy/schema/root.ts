import { z } from "zod"

export const inputParamsSchema = {
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion.")
}