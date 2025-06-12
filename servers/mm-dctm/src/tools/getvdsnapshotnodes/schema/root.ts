import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "objectId": z.string().describe("The r_object_id of required sysobject."),
  "items-per-page": z.number().int().describe("The number of entries per page. When the result feed is paged, the attribute items-per-page will be displayed in the feed.").optional(),
  "page": z.number().int().describe("The number of the page to be served. When the result feed is paged, the attribute page will be displayed in the feed.").optional(),
  "inline": z.boolean().describe("Ensures whether to show content (the object instance) in the atom entry for a collection. * 'true', return object instance and embed object instance into entry's content element. * 'false', do not return object instance within entry's content.").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "depth": z.number().int().describe("Specifies to what depth level the virtual document hierarchy will be returned. -1 means return the whole virtual document tree.").optional(),
  "vdm-number": z.string().describe("The node's number in the virtual document tree. The schema of vdm-number is based on the level of the node, e.g.,\n* 1st level, 1, 2, 3, ...\n* 2nd level, 1.1, 1.2, 3.1, ...\n* 3rd level, 1.1.1, 1.1.2, 1.1.3, ...\n* ...").optional(),
  "object-id": z.string().describe("The r_object_id of required sysobject.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/atom+xml","application/hal+json"]).describe("The Accept header.").optional()
}