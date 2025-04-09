import { z } from "zod"

export const inputParams = {
  "jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.").optional()
}