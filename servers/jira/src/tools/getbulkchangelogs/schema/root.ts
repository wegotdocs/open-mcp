import { z } from "zod"

export const inputParamsSchema = {
  "fieldIds": z.array(z.string().describe("List of field IDs to filter changelogs")).min(0).max(10).describe("List of field IDs to filter changelogs").optional(),
  "issueIdsOrKeys": z.array(z.string().describe("List of issue IDs/keys to fetch changelogs for")).min(1).max(1000).describe("List of issue IDs/keys to fetch changelogs for"),
  "maxResults": z.number().int().gte(1).lte(10000).describe("The maximum number of items to return per page").optional(),
  "nextPageToken": z.string().describe("The cursor for pagination").optional()
}