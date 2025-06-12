import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "audit-scope": z.string().describe("The scope of the audit event would effect to register and would use with 'object-id' to get the intersection to operate. * 'repository', means the event would register over whole repository. * 'type', means the event would register over type. * 'object', means the event would register over object."),
  "object-id": z.string().describe("The r_object_id of required sysobject.").optional(),
  "object-type": z.string().describe("The type of the queried object.").optional()
}