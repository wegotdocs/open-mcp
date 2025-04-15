import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string(),
  "limit": z.number().lte(100).describe("Maximum number of aliases to list from a request (max 100).").optional(),
  "since": z.number().describe("Get aliases created after this epoch timestamp.").optional(),
  "until": z.number().describe("Get aliases created before this epoch timestamp.").optional(),
  "failedOnly": z.boolean().describe("Filter results down to aliases that failed to map to the requested deployment").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}