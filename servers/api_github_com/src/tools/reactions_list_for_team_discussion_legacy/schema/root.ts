import { z } from "zod"

export const inputParamsSchema = {
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}