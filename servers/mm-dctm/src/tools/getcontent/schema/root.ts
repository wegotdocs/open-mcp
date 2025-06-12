import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "id": z.string().describe("The r_object_id of queried object."),
  "format": z.string().describe("Specifies the format name of the specific content or rendition.").optional(),
  "page": z.number().int().describe("Specifies the page number of the specific content or rendition.").optional(),
  "modifier": z.string().describe("Specifies the page modifier of the specific rendition.").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "media-url-policy": z.enum(["DC_PREF","DC_ONLY","LOCAL","ALL"]).describe("Specifies the content media URL return policy. * 'dc-pref', would try to retrieve a distributed content URL first. If no distributed content URL is available, a Content Media resource URL from the REST server is still acceptable. * 'dc-only', return a distributed content URL. If there is no ACS server or BOCS server, the REST server returns the HTTP 400 Conflict error. * 'local', return a Content Media resource URL from the REST server regardless of the availability of the ACS server and the BOCS server. * 'all', all available Content Media links are returned.").optional(),
  "network-location": z.string().describe("The network location for distributed content write.").optional(),
  "require-checksum": z.any().describe("Specifies the query parameter for Checksum").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional()
}