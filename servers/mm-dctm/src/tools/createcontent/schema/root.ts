import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "objectId": z.string().describe("The r_object_id of required sysobject."),
  "format": z.string().describe("Specifies the format name of the specific content or rendition.").optional(),
  "page": z.number().int().describe("Specifies the page number of the specific content or rendition.").optional(),
  "modifier": z.string().describe("Specifies the page modifier of the specific rendition.").optional(),
  "primary": z.string().describe("Specifies whether the imported content is primary content or a rendition.").optional(),
  "content-length": z.number().int().describe("The byte count of the content uploaded.").optional(),
  "content-charset": z.string().describe("The charset of the content uploaded.").optional(),
  "overwrite": z.string().describe("Specifies whether or not to overwrite the existing content with the same content properties. * 'true', would overwrite the existing primary content. * 'false', throw an exception when the primary content or rendition with the same content properties already exists.").optional(),
  "require-checksum": z.any().describe("Specifies the query parameter for Checksum").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}