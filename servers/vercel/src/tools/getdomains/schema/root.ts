import { z } from "zod"

export const inputParams = {
  "limit": z.number().describe("Maximum number of domains to list from a request.").optional(),
  "since": z.number().describe("Get domains created after this JavaScript timestamp.").optional(),
  "until": z.number().describe("Get domains created before this JavaScript timestamp.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}