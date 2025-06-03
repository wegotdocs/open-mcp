import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The requester's primary email address. To indicate the authenticated user, you can use the special value `me`."),
  "pageSize": z.number().int().describe("The number of key pairs to return. If not provided, the page size will default to 20 entries.").optional(),
  "pageToken": z.string().describe("Pagination token indicating which page of key pairs to return. If the token is not supplied, then the API will return the first page of results.").optional()
}