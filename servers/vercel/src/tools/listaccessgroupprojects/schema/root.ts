import { z } from "zod"

export const inputParams = {
  "idOrName": z.string().describe("The ID or name of the Access Group."),
  "limit": z.number().int().gte(1).lte(100).describe("Limit how many access group projects should be returned.").optional(),
  "next": z.string().describe("Continuation cursor to retrieve the next page of results.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}