import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "items-per-page": z.number().int().describe("The number of entries per page. When the result feed is paged, the attribute items-per-page will be displayed in the feed.").optional(),
  "page": z.number().int().describe("The number of the page to be served. When the result feed is paged, the attribute page will be displayed in the feed.").optional(),
  "include-total": z.boolean().describe("Indicate to calculate the total count of the feed items as though not returning them all in one page. When the result feed is paged, the attribute include-total will be displayed in the feed.\n* true - the total count of feed items is calculated by server and returned\n* false - neither calculate nor return the total count").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/atom+xml","application/hal+json"]).describe("The Accept header.").optional()
}