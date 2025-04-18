import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion comment.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}