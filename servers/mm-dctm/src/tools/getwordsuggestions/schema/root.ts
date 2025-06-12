import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "items-per-page": z.number().int().describe("The number of entries per page. When the result feed is paged, the attribute items-per-page will be displayed in the feed.").optional(),
  "page": z.number().int().describe("The number of the page to be served. When the result feed is paged, the attribute page will be displayed in the feed.").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "suggestion-view": z.string().describe("The suggestion view for the word to be checked in CCE(Contextual Content Engine). * 'typeahead' or do not provide, would give typeahead results of given word. * 'homophone', would give homophone results of given word. * 'all', would give both typeahead and homophone results of given word.").optional(),
  "word": z.string().describe("The word that needs to be passed to CCE(Contextual Content Engine) to check."),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/atom+xml","application/hal+json"]).describe("The Accept header.").optional()
}