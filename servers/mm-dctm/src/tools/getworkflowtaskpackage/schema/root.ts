import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "itemId": z.string().describe("The object id of the inbox item."),
  "index": z.string().describe("The index of the package in the workflow task packages."),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional()
}