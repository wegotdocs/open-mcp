import { z } from "zod"

export const toolName = `delete`
export const toolDescription = `Delete a subject area`
export const baseUrl = `/api`
export const path = `/v1/adcSubjectAreas/{id}`
export const method = `delete`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Chart Id"), "autoUnlock": z.boolean().describe("Automatically unlock the entity after operation is completed.  (Default = `true`)"), "lockToken": z.string().describe("Lock token - when you need different locks for one user (Default = ``)") }).shape