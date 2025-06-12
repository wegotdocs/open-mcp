import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "all-contents": z.string().describe("Specifies whether to include all contents of an object or only get the first page contents. * 'true', would include all contents of the specified objects. * 'false', would only include the first page contents of the specified objects.").optional(),
  "format": z.string().describe("The format of the content uploaded.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}