import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "id": z.string().describe("The r_object_id of queried object."),
  "items-per-page": z.number().int().describe("The number of entries per page. When the result feed is paged, the attribute items-per-page will be displayed in the feed.").optional(),
  "page": z.number().int().describe("The number of the page to be served. When the result feed is paged, the attribute page will be displayed in the feed.").optional(),
  "include-total": z.boolean().describe("Indicate to calculate the total count of the feed items as though not returning them all in one page. When the result feed is paged, the attribute include-total will be displayed in the feed.\n* true - the total count of feed items is calculated by server and returned\n* false - neither calculate nor return the total count").optional(),
  "inline": z.boolean().describe("Ensures whether to show content (the object instance) in the atom entry for a collection. * 'true', return object instance and embed object instance into entry's content element. * 'false', do not return object instance within entry's content.").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "max-results-count": z.number().int().describe("The maximum number of results to for a saved search When -1 is used as the value for the max-results-count parameter, the Request may require more time to retrieve as many matching objects as possible. The number of matching objects returned is only limited by the DFC configuration. Using a default value of 1000 , which returns 10 pages at once by default, greatly improves performance.\n-1: Apply the DFC configuration\nAny non-negative integer: the smaller of max-results -count and DFC configuration takes effect.").optional(),
  "Accept": z.literal("application/hal+json").describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}