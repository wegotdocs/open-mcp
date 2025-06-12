import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "quick-flow": z.string().describe("Specifies whether to start an ad-hoc workflow or start a workflow from template. * 'true', would creates and starts an ad-hoc workflow to route objects to users and/or groups. * 'false', would creates and starts a workflow from the template.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}