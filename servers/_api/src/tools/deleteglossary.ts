import { z } from "zod"

export const toolName = `deleteglossary`
export const toolDescription = `Delete a glossary by Id`
export const baseUrl = `/api`
export const path = `/v1/glossaries/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "recursive",
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the glossary"), "recursive": z.boolean().describe("Recursively delete this entity and it's children. (Default `false`)"), "autoUnlock": z.boolean().describe("Automatically unlock the entity after operation is completed.  (Default = `true`)"), "lockToken": z.string().describe("Lock token - when you need different locks for one user (Default = ``)") }).shape