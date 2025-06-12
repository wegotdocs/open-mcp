import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "object-id": z.string().describe("The r_object_id of required sysobject.").optional(),
  "object-type": z.string().describe("The type of the queried object.").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional()
}