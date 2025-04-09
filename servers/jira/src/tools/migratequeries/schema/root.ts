import { z } from "zod"

export const inputParams = {
  "queryStrings": z.array(z.string()).describe("A list of queries with user identifiers. Maximum of 100 queries.").optional()
}