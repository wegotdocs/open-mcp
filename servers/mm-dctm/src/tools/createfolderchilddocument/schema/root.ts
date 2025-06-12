import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "folderId": z.string().describe("The r_object_id of queried folder."),
  "require-dc-write": z.string().describe("Whether the document requires distributed content upload"),
  "network-location": z.string().describe("The network location for distributed content write.").optional(),
  "format": z.string().describe("The format of the content uploaded.").optional(),
  "content-length": z.string().describe("The byte count of the content uploaded. A comma separated list can be used to define multiple values for this parameter.").optional(),
  "async": z.string().describe("Whether async upload when distributed content writing.").optional(),
  "all-primary": z.string().describe("Whether save all contents as primary on different pages.").optional(),
  "modifier": z.string().describe("uniquely identifies a rendition within the same page number and format for a document. If there already exists a rendition with the supplied page_modifier (at the given format and page) the rendition will be overwritten. If null is passed then page_modifier is set to empty string.").optional(),
  "content-charset": z.string().describe("The charset of the content uploaded.").optional(),
  "content-count": z.number().int().describe("The count of the content uploaded.").optional(),
  "require-ip-network-location": z.string().describe("Whether a BOCS url for a document content upload need to be selected  based on client IP address").optional(),
  "require-checksum": z.any().describe("Specifies the query parameter for Checksum").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json","multipart/form-data","multipart/mixed"]).describe("The Content-Type header.").optional()
}