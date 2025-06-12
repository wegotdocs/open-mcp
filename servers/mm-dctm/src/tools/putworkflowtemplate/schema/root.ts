import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "templateId": z.string().describe("The object id of the workflow template."),
  "action": z.string().describe("Specifies what action will be done on the workflow template, currently, only these actions are supported, VALIDATE,INSTALL,INVALIDATE,UNINSTALL."),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}