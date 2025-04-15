import { z } from "zod"

export const inputParamsSchema = {
  "jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. Order by clauses are not allowed.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "nextPageToken": z.string().describe("The continuation token to fetch the next page. This token is provided by the response of this endpoint.").optional()
}