import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion.")
}