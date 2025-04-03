import { z } from "zod"

export const toolName = `patchglossaryterm`
export const toolDescription = `Update a glossary term`
export const baseUrl = `/api`
export const path = `/v1/glossaryTerms/{id}`
export const method = `patch`
export const security = []
export const keys = {
  "query": [
    "autoUnlock",
    "lockToken"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the glossary term"), "autoUnlock": z.boolean().describe("Automatically unlock the entity after operation is completed.  (Default = `true`)"), "lockToken": z.string().describe("Lock token - when you need different locks for one user (Default = ``)") }).shape