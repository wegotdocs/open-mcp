import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "method-category": z.string().describe("Specified whether to display the admin or dm_method").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}