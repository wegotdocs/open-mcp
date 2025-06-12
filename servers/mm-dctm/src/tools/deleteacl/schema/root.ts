import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "objectId": z.string().describe("The r_object_id of required sysobject."),
  "force": z.string().describe("Indicates whether to destroy the ACL object even if it is referenced by other objects in the repository. * 'true', would destroy the ACL object even if it is referenced by other objects in the repository. * 'false', do not destroy the ACL object if it is referenced by other objects.").optional()
}