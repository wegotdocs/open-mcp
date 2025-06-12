import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "id": z.string().describe("The r_object_id of queried object."),
  "items-per-page": z.number().int().describe("The number of entries per page. When the result feed is paged, the attribute items-per-page will be displayed in the feed.").optional(),
  "page": z.number().int().describe("The number of the page to be served. When the result feed is paged, the attribute page will be displayed in the feed.").optional(),
  "include-total": z.boolean().describe("Indicate to calculate the total count of the feed items as though not returning them all in one page. When the result feed is paged, the attribute include-total will be displayed in the feed.\n* true - the total count of feed items is calculated by server and returned\n* false - neither calculate nor return the total count").optional(),
  "inline": z.boolean().describe("Ensures whether to show content (the object instance) in the atom entry for a collection. * 'true', return object instance and embed object instance into entry's content element. * 'false', do not return object instance within entry's content.").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "facet-id-constraints": z.string().describe("Contains the key value pairs for each facet id and its constraint. The id should comply with the facet id in the AQL.").optional(),
  "query-locale": z.string().describe("A locale used to evaluate the query and parse word into language dependent token. Only supported with xPlore.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/atom+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}