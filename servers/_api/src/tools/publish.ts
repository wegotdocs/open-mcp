import { z } from "zod"

export const toolName = `publish`
export const toolDescription = `Publish a glossary term`
export const baseUrl = `/api`
export const path = `/v1/glossaryTerms/{id}/publish`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "validateUsersForRoles",
    "autoUnlock",
    "lockToken"
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Glossary Term Id"), "validateUsersForRoles": z.boolean().describe("Publish artefact without validation of roles"), "autoUnlock": z.boolean().describe("Automatically unlock the entity after operation is completed.  (Default = `true`)"), "lockToken": z.string().describe("Lock token - when you need different locks for one user (Default = ``)"), "comment": z.string() }).shape