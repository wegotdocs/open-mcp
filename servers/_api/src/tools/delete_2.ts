import { z } from "zod"

export const toolName = `delete_2`
export const toolDescription = `Delete a glossary term by Id`
export const baseUrl = `/api`
export const path = `/v1/glossaryTerms/{id}/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "recursive",
    "hardDelete",
    "autoUnlock",
    "lockToken",
    "validateUsersForRoles"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "comment"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the glossary term"), "recursive": z.boolean().describe("Recursively delete this entity and it's children. (Default `false`)"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)"), "autoUnlock": z.boolean().describe("Automatically unlock the entity after operation is completed.  (Default = `true`)"), "lockToken": z.string().describe("Lock token - when you need different locks for one user (Default = ``)"), "validateUsersForRoles": z.boolean().describe("Publish artefact without validation of roles"), "comment": z.string() }).shape