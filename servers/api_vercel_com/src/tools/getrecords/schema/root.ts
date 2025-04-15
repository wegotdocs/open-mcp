import { z } from "zod"

export const inputParams = {
  "domain": z.string(),
  "limit": z.string().describe("Maximum number of records to list from a request.").optional(),
  "since": z.string().describe("Get records created after this JavaScript timestamp.").optional(),
  "until": z.string().describe("Get records created before this JavaScript timestamp.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}