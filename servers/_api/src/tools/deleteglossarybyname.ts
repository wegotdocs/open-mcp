import { z } from "zod"

export const toolName = `deleteglossarybyname`
export const toolDescription = `Delete a glossary by name`
export const baseUrl = `/api`
export const path = `/v1/glossaries/name/{name}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "autoUnlock",
    "lockToken"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Name of the glossary"), "autoUnlock": z.boolean().describe("Automatically unlock the entity after operation is completed.  (Default = `true`)"), "lockToken": z.string().describe("Lock token - when you need different locks for one user (Default = ``)") }).shape